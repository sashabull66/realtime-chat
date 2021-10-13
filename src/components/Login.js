import React, {useContext} from "react";
import {Box, Button, Container, Grid} from "@mui/material";
import {Context} from "../index";
import firebase from "firebase/compat";

const Login = () => {
    const {auth} = useContext(Context)

    const login = async () => {
        const provider = new firebase.auth.GoogleAuthProvider();
        const {user} = await auth.signInWithPopup(provider);
    }

    return (
        <Container>
            <Grid container style={{height: window.innerHeight - 50}} alignItems={'center'} justifyContent={'center'}>
                <Grid style={{width: 400, background: 'lightgray', borderRadius: 3}} container alignItems={'center'}
                      direction={'column'}>
                    <Box p={5}>
                        <Button variant={'outlined'} onClick={login}>Login with google</Button>
                    </Box>
                </Grid>
            </Grid>
        </Container>
    )
}

export default Login