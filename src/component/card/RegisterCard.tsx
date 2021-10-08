import {Button, CardContent, Divider, Grid, Paper, TextField, Toolbar, Typography} from "@mui/material";
import React, {CSSProperties, useState} from "react";
import {Link} from "react-router-dom";
import {Auth} from "../../Auth";

export const RegisterCard = ()=>{

    const [mail, setMail] = useState('');
    const [password, setPassword] = useState('');
    const [nick,setNick] = useState('');

    const [failedMessage,setFailedMessage] = useState<string|null>(null);

    const textFieldBackgroundStyle:CSSProperties = {
        backgroundColor:"#fff",
        borderRadius:"5px",
        width:"100%"
    }

    const linkStyle:CSSProperties = {
        color:"#005dbe",
        textDecorationLine:"none"
    }

    const sendRegister = ()=>{
        const send = async ()=>{
            const result = await Auth.register(mail,password,nick)
            if(result.type === 'failure'){
                setFailedMessage(result.value.message)
            }
        }
        setFailedMessage(null)
        send()
    }

    return <>
        <Paper variant="outlined" style={{width: 500, backgroundColor:"#ececec"}} elevation={3}>
            <CardContent>
                <Toolbar>
                    基本情報
                </Toolbar>
                <div style={{marginTop: 13}}/>
                <Divider/>
                <div style={{marginTop: 13}}/>
                <div style={textFieldBackgroundStyle}>
                    <TextField
                        size="small"
                        label="メールアドレス:"
                        onChange={(event) => setMail(event.target.value)}
                        variant="outlined"
                        style={{width:"100%"}}/>
                </div>
                <div style={{marginTop: 13}}/>
                <div style={textFieldBackgroundStyle}>
                    <TextField
                        size="small"
                        label="パスワード:"
                        onChange={(event) => setPassword(event.target.value)}
                        variant="outlined"
                        type="password"
                        style={{width: "100%"}}/>
                </div>
                <div style={{marginTop: 13}}/>
                <div style={textFieldBackgroundStyle}>
                    <TextField
                        size="small"
                        label="ニックネーム:"
                        onChange={(event) => setNick(event.target.value)}
                        variant="outlined"
                        style={{width: "100%"}}/>
                </div>
                <div style={{marginTop: 13}}/>
                {
                    failedMessage ? <p style={{color:"red"}}>{failedMessage}</p> : <></>
                }
                <p style={{fontSize:"12px",color:"#777777"}}>
                    [アカウント登録]をクリックすることで、
                    <Link to="" style={linkStyle}>
                        利用規約
                    </Link>
                    、
                    <Link to="" style={linkStyle}>
                        データに関するポリシー
                    </Link>
                    、
                    <Link to="" style={linkStyle}>
                        Cookieポリシー
                    </Link>
                    に同意するものとします。サービスに関連してShibazonからメールが届くことがありますが、これはいつでもオフに設定できます。
                </p>
                <div style={{marginTop: 13}}/>
                <Divider/>
                <div style={{marginTop: 20}}/>
                <Toolbar>
                    <div style={{width:"100%",textAlign:"center"}}>
                        <Button
                            style={{
                                color: "white",
                                padding:14,
                                backgroundColor: "#3cb512",
                            }}
                            onClick={sendRegister}
                        >
                            <Typography variant="h6">
                                新しいアカウントを作成
                            </Typography>
                        </Button>
                    </div>
                </Toolbar>
            </CardContent>
        </Paper>
    </>
}