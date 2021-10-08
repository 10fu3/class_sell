import {
    Avatar,
    Badge,
    Divider,
    IconButton,
    ListItemText,
    Menu,
    MenuItem,
    MenuList,
    Popover,
    Typography
} from "@mui/material";
import React, {useState} from "react";

export const UserIcon = ()=>{
    const [anchorEl, setAnchorEl] = React.useState<HTMLButtonElement | null>(null);

    const open = Boolean(anchorEl);
    const id = open ? 'simple-popover' : undefined;

    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    return <IconButton>
        <Badge overlap="circular"color="primary" onClick={handleClick}>
            <Avatar alt="Remy Sharp" src="https://mui.com/static/images/avatar/1.jpg" />
        </Badge>
        <Menu
            id={id}
            open={open}
            anchorEl={anchorEl}
            onClose={handleClose}
            anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
            }}
        >
            <MenuItem onClick={handleClose}>マイページ</MenuItem>
            <MenuItem onClick={handleClose}>プロフィール</MenuItem>
            <Divider/>
            <MenuItem onClick={handleClose}>設定</MenuItem>
            <MenuItem onClick={handleClose}>ヘルプ</MenuItem>
            <Divider/>
            <MenuItem onClick={handleClose}>ログアウト</MenuItem>
        </Menu>
    </IconButton>
}