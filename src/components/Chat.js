import React, {useContext, useState} from 'react';
import {Avatar, Button, Container, Grid, TextField} from "@mui/material";
import {Context} from "../index";
import {useAuthState} from "react-firebase-hooks/auth";
import {useCollectionData} from "react-firebase-hooks/firestore";
import Loader from "./Loader";
import firebase from "firebase/compat";

const Chat = () => {
    const {auth, firestore} = useContext(Context);
    const [user] = useAuthState(auth)
    const [value, setValue] = useState('')
    const [messages, loading] = useCollectionData(
        firestore.collection('messages').orderBy('createdAt')
    )

    const sendMessage = async () => {
        if (value.trim().length === 0) return
        firestore.collection('messages').add({
            uid: user.uid,
            displayName: user.displayName,
            photoURL: user.photoURL,
            text: value,
            createdAt: firebase.firestore.FieldValue.serverTimestamp()
        })
        setValue('')
    }
    return (
        loading ?
            <Loader/>
            :
            <Container>
                <Grid container style={{height: window.innerHeight - 60, marginTop: 10}} justifyContent={'center'}>
                    <div style={{width: '80%', height: '60%', border: '2px solid gray', overflowY: 'auto'}}>
                        {messages.map(message =>
                            <div style={{
                                margin:10,
                                border: user.uid === message.uid ? '2px solid green' : '2px solid red',
                                marginLeft: user.uid === message.uid ? 'auto' : '10px',
                                width: 'fit-content',
                                padding: 5
                            }}>
                                <Grid container>
                                    <Avatar src={message.photoURL}/>
                                    <div>{message.displayName}</div>
                                </Grid>
                                <div>{message.text}</div>
                            </div>
                        )}
                    </div>
                    <Grid container direction={'column'} alignItems={'flex-end'} style={{width: '80%'}}>
                        <TextField value={value} onChange={e => setValue(e.target.value)} variant={'outlined'}
                                   style={{marginBottom: 3}} fullWidth maxRows={2}/>
                        <Button variant={'outlined'} onClick={sendMessage}>Send message</Button>
                    </Grid>
                </Grid>
            </Container>
    );
};

export default Chat;