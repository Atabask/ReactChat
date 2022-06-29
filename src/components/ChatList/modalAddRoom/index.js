import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
import { Input, InputAdornment } from "@mui/material";
import { useDispatch, useSelector } from 'react-redux';
import AddIcon from '@mui/icons-material/Add';
import Send from '@mui/icons-material/Send';
import { createConversation } from "../../../store/conversations/thunk"

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

export const ModalAddRoom = () => {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const [nameNewRoom, setNameNewRoom] = React.useState("")
    const conversations = useSelector(
        (state) => state.conversations.conversations
      )
    const dispatchCreateRoom = useDispatch();

    



    const createRoom = (nameNewRoom) => {
        const isValidName = !conversations.includes(nameNewRoom)

        if (!!isValidName) {
            dispatchCreateRoom(createConversation(nameNewRoom));
        } else {
            alert("Fill in the field")
        }
        setOpen(false)
    };

    return (
        <span>
            <Button onClick={handleOpen}><AddIcon /></Button>
            <Modal
                open={open}
                onClose={handleClose}>
                <Box sx={style}>
                    <Input placeholder='Enter a name'
                        type='text'
                        fullWidth={true}
                        value={nameNewRoom}
                        onChange={(e) => setNameNewRoom(e.target.value)}
                        endAdornment={
                            <InputAdornment position='end'>
                                {nameNewRoom &&
                                    <Send onClick={() => createRoom((nameNewRoom))}>
                                    </Send>}
                            </InputAdornment>
                        }>
                    </Input>
                </Box>
            </Modal>
        </span>
    );
}
