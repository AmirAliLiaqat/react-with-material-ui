import React, { useState } from 'react';
import Header from '../Header';
import Sidebar from './Sidebar';
import Footer from '../Footer';
import {Box, TextField, Button, Typography, Modal} from '@mui/material';
import {Send} from '@mui/icons-material';
import {useFormik} from 'formik';
import {signUpSchema} from './schemas';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #ccc',
  borderRadius: "5px",
  boxShadow: 24,
  p: 4,
};

const initialValues = {
  fullname: "",
  number: "",
  email: "",
  message: "",
}

const Contact = () => {
  const [open, setOpen] = useState(false);
  const handleClose = () => setOpen(false);

  const {values, errors, touched, handleChange, handleBlur, handleSubmit} = useFormik({
    initialValues: initialValues,
    validationSchema: signUpSchema,
    onSubmit: (values, action) => {
      console.log("🚀 ~ file: Contact.jsx:29 ~ Contact ~ values:", values); 
      action.resetForm();
    }
  })
  console.log("🚀 ~ file: Contact.jsx:41 ~ Contact ~ errors:", errors)

  return (
    <>
      <Header/>
      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-3 col-md-3 col-sm-6 border-end">
            <Sidebar/>
          </div>
          <div className="col-lg-9 col-md-9 col-sm-6 my-auto">
            <Box
              component="form"
              sx={{
                width: 500,
                maxWidth: '100%',
              }}
              noValidate
              autoComplete="off"
              className='mx-auto text-center'
              onSubmit={handleSubmit}
            >
              <TextField type='text' label="Full Name" className='my-3' name="fullname" value={values.fullname} onChange={handleChange} onBlur={handleBlur} autoComplete='off' fullWidth required />
              { errors.fullname && touched.fullname ? <p className='text-danger text-start'>{errors.fullname}</p> : null }
              <TextField type='number' label="Phone" className='my-3' name='number' value={values.number} onChange={handleChange} onBlur={handleBlur} autoComplete='off' fullWidth required />
              { errors.number && touched.number ? <p className='text-danger text-start'>{errors.number}</p> : null }
              <TextField type='email' label="Email" className='my-3' name='email' value={values.email} onChange={handleChange} onBlur={handleBlur} autoComplete='off' fullWidth required />
              { errors.email && touched.email ? <p className='text-danger text-start'>{errors.email}</p> : null }
              <TextField type="text" label="Message" className='my-3' name='message' value={values.message} onChange={handleChange} onBlur={handleBlur} autoComplete='off' fullWidth required />
              { errors.message && touched.message ? <p className='text-danger text-start mb-2'>{errors.message}</p> : null }
              <Button type='submit' variant="contained" endIcon={<Send />}>Send</Button>
            </Box>
            <Modal
              open={open}
              onClose={handleClose}
              aria-labelledby="modal-modal-title"
              aria-describedby="modal-modal-description"
            >
              <Box sx={style}>
                <Typography id="modal-modal-title" variant="h6" component="h2">
                  Your Message Send Successfully...
                </Typography>
                <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                  Name: {values.fullname} <br/>
                  Number: {values.number} <br/>
                  Email: {values.email} <br/>
                  Message: {values.message} <br/>
                </Typography>
              </Box>
            </Modal>
          </div>
        </div>
      </div>
      <Footer/>
    </>
  )
}

export default Contact;