import React, {CSSProperties, useContext, useState} from "react";
import {Button, Card, CardContent, Divider, Grid, Paper, TextField, Toolbar, Typography} from "@mui/material";
import {Auth} from "../../Auth";
import {Link} from "react-router-dom";

export const LoginCard: React.FC = () => {

    const [mail, setMail] = useState('');
    const [password, setPassword] = useState('');

    const [isFailed, setFailed] = useState(false);

    const loginHandle = async (mail: string, password: string) => {

        const session = await Auth.login(mail, password);

        setFailed(false);

        if (session === null) {
            setFailed(true);
        } else {
            Auth.save(session);
            setFailed(false);
            if (window.location.search.includes("redirect")) {
                let perm = window.location.search.slice(1)
                    .split('?redirect=')
                    .filter(e => e.includes("redirect"))
                    [0].replace("redirect=", "");
                window.location.href = decodeURIComponent(perm);
            } else {
                window.location.href = decodeURIComponent("");
            }
        }
    }

    //useContext(AuthContext)

    const textFieldBackgroundStyle:CSSProperties = {
        backgroundColor:"#fff",
        borderRadius:"5px",
        width:"100%"
    }

    return <div>
        <Paper variant="outlined" style={{width: 370, padding: 10,backgroundColor:"#ececec"}} elevation={3}>
            <CardContent>
                <Toolbar>
                    <div style={{textAlign:"center",width:"100%"}}>
                        Shibazon ID でログイン
                    </div>
                </Toolbar>
                <Grid container justifyContent="center">
                    <div style={textFieldBackgroundStyle}>
                        <TextField
                            size="small"
                            label="メールアドレス:"
                            onChange={(event) => setMail(event.target.value)}
                            variant="outlined"
                            style={{width: "100%"}}/>
                    </div>
                </Grid>
                <div style={{marginTop: 13}}/>
                <Grid container justifyContent="center">
                    <div style={textFieldBackgroundStyle}>
                        <TextField
                            size="small"
                            label="パスワード:"
                            onChange={(event) => setPassword(event.target.value)}
                            variant="outlined"
                            type="password"
                            style={{width: "100%"}}/>
                    </div>
                </Grid>
                {
                    isFailed ? <div>
                        <div style={{marginTop: 20}}/>
                        <p style={{color: "red"}}>入力されたメールアドレスまたはパスワードが間違っています</p>
                    </div> : <div/>
                }
                <div style={{marginTop: 13}}/>
                <Button
                    onClick={() => {
                        loginHandle(mail, password)
                    }}
                    style={{
                        color: "white",
                        backgroundColor: "#007bff",
                        width: "100%",

                    }}>
                    ログイン
                </Button>
                <div style={{marginTop: 10}}/>

                <div style={{width:"100%",textAlign:"center"}}>
                    <a href="/aa" style={{color: "#007bff", textDecoration: "none"}}>パスワードを忘れた場合</a>
                </div>

                <div style={{marginTop: 13}}/>

                <Divider/>

                <div style={{marginTop: 13}}/>

                <div style={{width:"100%",textAlign:"center"}}>
                    <Link to="/register">
                        <Button
                            style={{
                                color: "white",
                                backgroundColor: "#3cb512",
                            }}>
                            新しいアカウントを作成
                        </Button>
                    </Link>
                </div>

            </CardContent>
        </Paper>
    </div>
}