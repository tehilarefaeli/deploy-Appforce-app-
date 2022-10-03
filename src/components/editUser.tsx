
import React, { useState, useRef, useEffect } from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { editUserRequest } from "store/user/actions";
import { useDispatch, useSelector } from "react-redux";
import {
    getUsersSelector
  } from "store/user/selectors";

import { useForm, SubmitHandler } from 'react-hook-form';
import {  object, string, TypeOf } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';


const registerSchema = object({
    first: string()
      .min(3,'First Name must be  more than 3 characters'),
    last: string()
      .min(3,'Last Name must be  more than 3 characters'),
    email: string().min(1,'Email is required').email('Email is invalid'),
    name: string()
    .min(1,'Title is required'),
    number: string()
    .min(1,'Title is required'),
    city: string()
    .min(1,'Title is required'),
    country: string()
    .min(1,'Title is required'),
  });
  
  
export type RegisterInput = TypeOf<typeof registerSchema>;




export default function EditUser({exsistUser}:any) {

    const {
        register,
        formState: { errors, isSubmitSuccessful },
        reset,
        handleSubmit,
      } = useForm<RegisterInput>({
        resolver: zodResolver(registerSchema),
      });
    
      useEffect(() => {
        if (isSubmitSuccessful) {
          reset();
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
      }, [isSubmitSuccessful]);

    const dispatch = useDispatch();
    

    const [open, setOpen] = React.useState(false);
    const [userData, setUserData] = useState<any>({
            first:'',
            last:'',
             email:'',
            city:'',
            country:'',
                name:'',
                number:0,
                picture: exsistUser?.picture.medium,
                title:exsistUser.name.title

    })
    const [submitted, setSubmitted] = useState(false);
    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    useEffect(() => {
        if (isSubmitSuccessful) {
          reset();
        }
      }, [isSubmitSuccessful]);

    const onSubmitHandler: SubmitHandler<RegisterInput> = (values) => {
        const id = exsistUser.id.value;
        const data={
            name:{
                first:values.first,
                last:values.last,
                title:exsistUser.name.title

            },
            email:values.email,
            location:{ number:values.number,
                name:values.name,
                city:values.city,
                country:values.country},
            picture:exsistUser.picture.medium,
        }
        dispatch(editUserRequest(id,data));
        setOpen(false);
      };

    return (
          <div>
            <Button size="small" onClick={handleClickOpen}>
                Edit
            </Button>
            <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title" fullWidth>
                
                <DialogContent>
                    <DialogContentText>
                        Edit User
                     </DialogContentText>

                     <Box component='form'
                     noValidate
                    autoComplete='off'
                        onSubmit={handleSubmit(onSubmitHandler)}>
                        <TextField
                            fullWidth
                            autoFocus
                            margin="dense"
                            id="fName"
                            label="First Name"
                            type="text"
                            error={!!errors['first']}
                            helperText={errors['first'] ? errors['first'].message : ''}
                            {...register('first')}
                        />
                        <br/>

                        <TextField
                            autoFocus
                            fullWidth
                            margin="dense"
                            id="lName"
                            label="Last Name"
                            type="text"
                            error={!!errors['last']}
                            helperText={errors['last'] ? errors['last'].message : ''}
                            {...register('last')}
                        />
                        
                        <br/>
                        <TextField
                            fullWidth
                            autoFocus
                            margin="dense"
                            id="email"
                            label="Email"
                            type="text"
                            error={!!errors['email']}
                            helperText={errors['email'] ? errors['email'].message : ''}
                            {...register('email')}
                        />
                        <br/>
                        <TextField
                            fullWidth
                            autoFocus
                            margin="dense"
                            id="nstreet"
                            label="Street Name"
                            type="text"
                            error={!!errors['name']}
                            helperText={errors['name'] ? errors['name'].message : ''}
                            {...register('name')}
                        />
                    
                        <br/>

                        <TextField
                            fullWidth
                            autoFocus
                            margin="dense"
                            id="street"
                            label="Street Number"
                            type="text"
                            error={!!errors['number']}
                            helperText={errors['number'] ? errors['number'].message : ''}
                            {...register('number')}
                        />
                          <br/>

                        <TextField
                            fullWidth
                            autoFocus
                            margin="dense"
                            id="city"
                            label="City"
                            type="text"
                            error={!!errors['city']}
                            helperText={errors['city'] ? errors['city'].message : ''}
                            {...register('city')}
                        />
                        <br/>
                        <TextField
                            fullWidth
                            autoFocus
                            margin="dense"
                            id="country"
                            label="country"
                            type="text"
                            error={!!errors['country']}
                            helperText={errors['country'] ? errors['country'].message : ''}
                            {...register('country')}
                        
                        />
                        <br/>
                        <DialogActions>
                            <Button onClick={handleClose} color="primary">
                                Cancel
                         </Button>
                            <Button
                                fullWidth
                                color="primary"
                                type="submit"
                            >
                                Add
                            </Button>

                        </DialogActions>
                        </Box>
                </DialogContent>

            </Dialog>
        </div>






    );
                            }
