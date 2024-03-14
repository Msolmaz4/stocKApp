import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';

import Modal from '@mui/material/Modal';
import { TextField } from '@mui/material';

import useStockCall from '../../hooks/useStockCall';

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

export default function FirmModal({open,handleClose,info,setInfo}) {
//   const [open, setOpen] = React.useState(false);
//   const handleOpen = () => setOpen(true);
//   const handleClose = () => setOpen(false);

// const [info,setInfo] = useState({
//     "name":'',
//     "address":'',
//     "phone":'',
//     "image":''

// })
   
const handleChange = (e)=>{
    setInfo({...info,[e.target.name]:e.target.value})
   
}
const {postStockData,putStockData} = useStockCall()
const  handleSubmit = (e)=>{
    e.preventDefault()
 console.log(info)

 setInfo({
  "name":'',
  "address":'',
  "phone":'',
  "image":''

})


if(info._id){
putStockData('firms',info)
}else{
   postStockData('firms',info)
}
 handleClose()
}
  return (
    <div>
    
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
        <Box component='form' onSubmit={handleSubmit} sx={{display:"flex", flexDirection:'column', gap:2}}>
        <TextField
                  id='name'
                  name="name" 
                  label="Firmaname"
                  type='text'
                  variant='outlined'
                  value={info.name}
             
                  onChange={handleChange}
                />
               
        <TextField
                  id='name'
                  name="address" 
                  label="Firm Adres"
                  type='text'
                  variant='outlined'
                  value={info.address}
                  onChange={handleChange}
                />
               
        <TextField
                  id='name'
                  name="phone" 
                  label="Firmaname"
                  type='text'
                  variant='outlined'
                  value={info.phone}
                  onChange={handleChange}
                />
               
        <TextField
                
                  name="image" 
                  label="Firm Logo"
                  type='text'
                  variant='outlined'
                  value={info.image}
                  onChange={handleChange}
                />
                <Button variant="contained" type="submit" >
                  {info ? "Submit" : "Update"}
                </Button>
        </Box>
        </Box>
      </Modal>
    </div>
  );
}