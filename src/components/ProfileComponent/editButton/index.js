import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
import { Input, InputAdornment } from "@mui/material";
import EditIcon from '@mui/icons-material/Edit';
import { Send } from "@mui/icons-material"
import { useDispatch } from 'react-redux';
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
    const [value, setValue] = React.useState("")
    const dispatchEditName = useDispatch();
   
    const handlePressInput = ({ code }) => {
        if (code === "Enter") {
            editProfileName(value);
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
              value={value}
              onChange={(e) => setValue(e.target.value)}
              endAdornment={
                  <InputAdornment position='end'>
                      {value && <Send onClick={() => dispatchEditName(editProfileName(value), setOpen(false))}></Send>}
                  </InputAdornment>
              }>
              </Input>
          </Box>
        </Modal>
      </span>
    );
  }
