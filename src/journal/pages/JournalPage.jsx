import { AddOutlined } from "@mui/icons-material";
import { Typography, IconButton } from "@mui/material";
import React from "react";
import {NoteView, NothingSelectedView} from '../../views/index'
import JournalLayout from "../JournalLayout";

const JournalPage = () => {
  return (
    <JournalLayout>
      <Typography variant="h1">
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry.
      </Typography>

      <NothingSelectedView />
      <NoteView />


    <IconButton size='large' sx={{color: 'white', backgroundColor: 'error.main', ':hover': {backgroundColor: 'error.main', opacity: 0.9}, position: 'fixed', right: 50, bottom: 50}}>
      <AddOutlined sx={{fontSize: 30}} />
    </IconButton>

    </JournalLayout>
  );
};

export default JournalPage;
