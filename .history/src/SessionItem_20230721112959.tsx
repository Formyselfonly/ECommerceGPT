import React, { useState } from 'react';
import {
    ListItemText, MenuItem, Divider,
    IconButton, Typography, ListItemIcon,
} from '@mui/material';
import { Session } from './types'
import FileCopyIcon from '@mui/icons-material/FileCopy';
import EditIcon from '@mui/icons-material/Edit';
import ChatBubbleIcon from '@mui/icons-material/ChatBubble';
import MoreHorizOutlinedIcon from '@mui/icons-material/MoreHorizOutlined';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import StyledMenu from './StyledMenu';
import { useTranslation } from "react-i18next";
import StarIcon from '@mui/icons-material/Star';
import StarOutlineIcon from '@mui/icons-material/StarOutline';

export interface Props {
    session: Session
    selected: boolean
    switchMe: () => void

}

export default function SessionItem(props: Props) {
    const { t } = useTranslation()
    const { session, selected, switchMe} = props
    const [hovering, setHovering] = useState(false)
    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
    const open = Boolean(anchorEl);
    const handleClick = (event: React.MouseEvent<HTMLElement>) => {
        event.stopPropagation()
        event.preventDefault()
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <>
        <MenuItem
            key={session.id}
            selected={selected}
            onClick={() => switchMe()}
            onMouseEnter={() => {
                setHovering(true)
            }}
            onMouseOver={() => {
                setHovering(true)
            }}
            onMouseLeave={() => {
                setHovering(false)
            }}
        >
            <ListItemIcon>
                <IconButton><ChatBubbleIcon fontSize="small" /></IconButton>
            </ListItemIcon>
            <ListItemText>
                <Typography variant="inherit" noWrap>
                    {session.name}
                </Typography>
            </ListItemText>
        </MenuItem>

        </>
    )
}
