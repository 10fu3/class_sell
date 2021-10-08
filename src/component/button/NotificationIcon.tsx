import {Badge, IconButton} from "@mui/material";
import Notifications from "@mui/icons-material/Notifications";
import React from "react";

export const NotificationIcon = ()=>{
    return <IconButton>
        <Badge badgeContent={100} color="primary">
            <Notifications style={{color:"white"}}/>
        </Badge>
    </IconButton>
}