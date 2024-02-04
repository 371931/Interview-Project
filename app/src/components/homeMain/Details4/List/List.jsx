import React from "react";
import "./List.css";
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import MessageIcon from '@mui/icons-material/Message';
import DescriptionOutlinedIcon from '@mui/icons-material/DescriptionOutlined';
import Badge from "../../../Badge/Badge.jsx";
import CampaignIcon from '@mui/icons-material/Campaign';
import RouterIcon from '@mui/icons-material/Router';
import MicIcon from '@mui/icons-material/Mic';
import BookmarkBorderOutlinedIcon from '@mui/icons-material/BookmarkBorderOutlined';
import BugReportOutlinedIcon from '@mui/icons-material/BugReportOutlined';

export default function GutterlessList() {
    return (
        <div className="lister">
            <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
                    <ListItem
                        disableGutters
                        secondaryAction={
                            <Badge value="100" bg="#4053b2"/>
                        }>
                        <ListItemText >
                            <div  className="listStyled" ><DescriptionOutlinedIcon />
                            File List</div>
                        </ListItemText>
                    </ListItem>

                    <ListItem
                        disableGutters
                        secondaryAction={
                                <Badge value="40+" bg="#2c98f0" />
                        }>
                        <ListItemText >
                            <div  className="listStyled" ><MessageIcon />
                            Messages</div>
                        </ListItemText>
                    </ListItem>
                    
                    <ListItem
                        disableGutters
                        secondaryAction={
                            <Badge value="22" bg="#50af54" />
                        }>
                        <ListItemText >
                            <div  className="listStyled" ><CampaignIcon />
                            Notifications</div>
                        </ListItemText>
                    </ListItem>

                    <ListItem
                        disableGutters
                        secondaryAction={
                            <Badge value="80%" bg="#f2443d"/>
                        }>
                        <ListItemText >
                            <div  className="listStyled" ><RouterIcon />
                            Bandwidth usage</div>
                        </ListItemText>
                    </ListItem>

                    <ListItem
                        disableGutters
                        secondaryAction={
                            <Badge value="5" bg="#2c98f0" radius="50%" padding="7px" fs="8px"/>
                        }>
                        <ListItemText >
                            <div  className="listStyled" ><MicIcon />
                            Calls Attended</div>
                        </ListItemText>
                    </ListItem>

                    <ListItem
                        disableGutters
                        secondaryAction={
                            <Badge value="2" bg="#feea4f" radius="50%" padding="7px" fs="8px"/>
                        }>
                        <ListItemText >
                            <div  className="listStyled" ><BookmarkBorderOutlinedIcon />
                            Bookmarks Today</div>
                        </ListItemText>
                    </ListItem>

                    <ListItem
                        disableGutters
                        secondaryAction={
                            <Badge value="9" bg="#f2443d" radius="50%" padding="7px" fs="8px"/>
                        }>
                        <ListItemText >
                            <div  className="listStyled" ><BugReportOutlinedIcon />
                            Bug Fix Today</div>
                        </ListItemText>
                    </ListItem>
            </List>
        </div>
    );
}