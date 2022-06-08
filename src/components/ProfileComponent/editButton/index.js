import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
import { Input, InputAdornment } from "@mui/material";
import EditIcon from '@mui/icons-material/Edit';
import { Send } from "@mui/icons-material"
import { useDispatch, useSelector } from 'react-redux';
import { editProfileName } from "../../../store/profile"

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
  };

export const ModalEdit = () => {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const [newName, setNewName] = React.useState("")
    const profile = useSelector((state) => state.profile);
    const dispatchEditName = useDispatch();
    console.log(newName)
    console.log(profile)

   
    const handlePressInput = ({ code }) => {
        if (code === "Enter") {
            editProfileName(newName);
        }
    };
  
    return (
      <span>
        <Button onClick={handleOpen}><EditIcon/></Button>
        <Modal
          open={open}
          onClose={handleClose}>
          <Box sx={style}>
              <Input placeholder='Enter a name'
              type='text'
              fullWidth={true}
              onKeyDown={handlePressInput}
              value={newName}
              onChange={(e) => setNewName(e.target.value)}
              endAdornment={
                  <InputAdornment position='end'>
                      {newName && <Send onClick={() => dispatchEditName(editProfileName(newName))}></Send>}
                  </InputAdornment>
              }>
              </Input>
          </Box>
        </Modal>
      </span>
    );
  }

//   import React from "react";
//   import styles from "./editButton.module.css"
//   // import EditIcon from '@mui/icons-material/Edit';
//   import Box from '@mui/material/Box';
//   import Button from '@mui/material/Button';
//   import Modal from '@mui/material/Modal';
//   import { Input } from "@mui/material";



// export const EditButton = () => {
//     const [open, setOpen] = React.useState(false);
//     const handleOpen = () => setOpen(true);
//     const handleClose = () => setOpen(false);


//     return <span>
//         <Button className={styles.btn_show} onClick={handleOpen()}>Open Edit Form</Button>
//         <Modal open={open} onClose={handleClose}>
//             <Box>
//             <Input placeholder="Enter a name"></Input>
//             </Box>
//             </Modal>    
//     </span>
// }