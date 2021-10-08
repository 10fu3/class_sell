import {Card, Grid, Toolbar, Typography} from "@mui/material";
import React from "react";

import AccountIcon from '@mui/icons-material/AccountCircleOutlined';
import {LoginCard} from "../component/card/LoginCard";

export const LoginPage = ()=>{
    return <>
        <Grid container>
            <Toolbar>
                <Grid item>
                    <AccountIcon style={{color:"#1391a7"}}/>
                </Grid>
                <Grid item style={{width:"20px"}}/>
                <Grid item>
                    <Typography style={{color:"#3b3b3b"}} variant="h6">
                        ログイン
                    </Typography>
                </Grid>
            </Toolbar>
        </Grid>
        <Grid container justifyContent="center" alignItems="center" style={{ minHeight: 'calc( 100vh - 128px )' }}>
            <Grid item>
                <LoginCard/>
                <div style={{marginTop:"100px"}}/>
            </Grid>
        </Grid>
    </>
}