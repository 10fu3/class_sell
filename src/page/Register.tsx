import {Grid, Toolbar, Typography} from "@mui/material";
import AppRegistrationIcon from '@mui/icons-material/AppRegistration';
import React from "react";
import {RegisterCard} from "../component/card/RegisterCard";

export const RegisterPage = ()=>{
    return <>
        <Grid container>
            <Toolbar>
                <Grid item>
                    <AppRegistrationIcon style={{color:"#1391a7"}}/>
                </Grid>
                <Grid item style={{width:"20px"}}/>
                <Grid item>
                    <Typography style={{color:"#3b3b3b"}} variant="h6">
                        新規登録
                    </Typography>
                </Grid>
            </Toolbar>
        </Grid>
        <Grid container justifyContent="center">
            <Grid item>
                <RegisterCard/>
            </Grid>
        </Grid>
    </>
}