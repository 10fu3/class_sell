import React, {CSSProperties} from "react";
import {Grid, Toolbar, Typography} from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";

export const HomePage = ()=>{

    return <>
        <Grid container>
            <Toolbar>
                <Grid item>
                    <HomeIcon style={{color:"#1391a7"}}/>
                </Grid>
                <Grid item style={{width:"20px"}}/>
                <Grid item>
                    <Typography style={{color:"#3b3b3b"}} variant="h6">
                        ログイン
                    </Typography>
                </Grid>
            </Toolbar>
        </Grid>
        <div style={{backgroundColor:"#e2e1e1",paddingTop:30}}>
            <Grid container justifyContent="center">
                <Grid item container justifyContent="center" style={{maxWidth:900,minWidth:"70%",backgroundColor:"#fafafa"}}>
                    <Grid item>
                        {
                            [...Array(97)].map((_)=>{
                                return <div style={{width:200,height:200,backgroundColor:"#f1f1f1",marginTop:10,marginLeft:10,float:"left"}}>
                                    a
                                </div>
                            })
                        }
                    </Grid>
                </Grid>
            </Grid>
        </div>
    </>
}