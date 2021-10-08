import {AppBar, Avatar, Badge, IconButton, InputAdornment, TextField, Toolbar, Typography} from "@mui/material";
import React, {CSSProperties, useEffect, useState} from "react";

import Search from '@mui/icons-material/Search';

import {Link} from "react-router-dom";
import {UserIcon} from "./button/UserIcon";
import {NotificationIcon} from "./button/NotificationIcon";
import {Auth, Profile} from "../Auth";

const Header = ()=>{

    const [profile,setProfile] = useState<Profile|null>(null);

    const rightHeaderIcons = [
        <NotificationIcon/>,
        <div style={{width:"15px"}}/>,
        <UserIcon/>]

    useEffect(()=>{
        const getProfile = async ()=>{
            const maybeProfile = await Auth.getProfile();
            if(maybeProfile.type === 'success'){
                setProfile(maybeProfile.value)
            }
        }
        getProfile()
    },[]);

    const appBarStyle:CSSProperties = {
        backgroundColor:"#505050",
        width:"100%"
    }

    const linkDecoration:CSSProperties = {
        color:"white",textDecorationLine:"none"
    }

    const textFieldStyle:CSSProperties = {
        width:"100%",
    }

    const textFieldBackgroundStyle:CSSProperties = {
        marginLeft:"30px",
        width:"calc( 100% - 100px )",
        maxWidth:"480px",
        backgroundColor:"#fff",
        borderRadius:"5px"
    }

    return <>
        <AppBar style={appBarStyle} position="static">
            <Toolbar style={{marginLeft:"5%",marginRight:"5%"}}>
                <Link to="/" style={linkDecoration}>
                    <Typography variant="h6">
                        Shibazon
                    </Typography>
                </Link>
                <div style={textFieldBackgroundStyle}>
                    <TextField
                        style={textFieldStyle}
                        InputProps={{
                            startAdornment:(
                                <InputAdornment position="start">
                                    <Search/>
                                </InputAdornment>
                            )
                        }}
                        size="small"
                        color="primary"
                        variant="outlined"/>
                </div>
                <div style={{flexGrow: 1}}/>
                <div style={{width:"15px"}}/>
                {
                    profile ? rightHeaderIcons : <Link to="/login" style={linkDecoration}>ログインする</Link>
                }
            </Toolbar>
        </AppBar>
    </>
}
export default Header