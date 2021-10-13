import React, {useContext} from "react";
import {AppBar, Button, Grid, Toolbar} from "@mui/material";
import {NavLink} from "react-router-dom";
import {LOGIN_ROUTE} from "../utils/consts";
import {Context} from "../index";
import {useAuthState} from "react-firebase-hooks/auth";

const Navbar = () => {
    const {auth} = useContext(Context)
    const [user] = useAuthState(auth);

    return (
        <AppBar position="static" color={'secondary'}>
            <Toolbar variant={'dense'}>
                <Grid container justifyContent={'flex-end'}>
                    {user ?
                        <Button variant={'outlined'} onClick={()=>{auth.signOut()}}>Logout</Button>
                        :
                        <NavLink to={LOGIN_ROUTE}>
                            <Button variant={'outlined'}>Login</Button>
                        </NavLink>
                    }
                </Grid>
            </Toolbar>
        </AppBar>
    )
}

export default Navbar;