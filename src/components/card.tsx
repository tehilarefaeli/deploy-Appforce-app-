import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import { makeStyles } from '@mui/styles';


import Typography from '@mui/material/Typography';
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getPendingSelector,
  getUsersSelector,
  getErrorSelector,
} from "store/user/selectors";
import { fetchUserRequest, deleteSuccess } from "store/user/actions";
import { IUser } from "store/user/types";
import AddUser from "./addUser";
import EditUser from "./editUser"

export default function UserCard() {

  const dispatch = useDispatch();
  const pending = useSelector(getPendingSelector);
  const users = useSelector(getUsersSelector);
  const error = useSelector(getErrorSelector);

  const useStyles = makeStyles({
    root: {
      maxWidth: 345,
    },
    media: {
      padding: '5px',
      color: 'white',
      height: 140,
      backgroundSize: '50%',
    },
    cardCss: {
      margin: '5px',
      minWidth: '150px',
      filter: 'drop-shadow(0px 0px 10px #3335)',
    },
  });
  const classes = useStyles();

  const handleDelete = (id: any)=> {    
    dispatch(deleteSuccess(id))
};

  useEffect(() => {
    dispatch(fetchUserRequest());
  }, [dispatch]);
  return (
    <Grid>
    <Grid container>
    {  Object.values(users)?.map((user: any, index: number) => ( 
    <Grid
    item
    xs={12}
    sm={6}
    md={4}
    lg={3}
    className={classes.cardCss}

  >
    <Card className={classes.root}>
      <CardMedia
        component="img"
        className={classes.media}
        image={user?.picture?.medium}
      />
      <CardContent>

        <Typography gutterBottom variant="h5" component="div">
        {user?.name?.title}     {user?.name?.first}      {user?.name?.last}   
        </Typography>

        <Typography variant="body2" color="text.secondary">
       {user?.email}
        </Typography>

        <Typography variant="body2" color="text.secondary">
        {user?.location?.street?.number} {user?.location?.street?.name} 
        </Typography>
        <Typography variant="body2" color="text.secondary">
       {user?.location?.city} {user?.location?.country}
        </Typography>
      </CardContent>
      <CardActions>
        <Button onClick={()=>handleDelete(user?.id?.value)} size="small">delete</Button>
        <EditUser exsistUser={user}/>
      </CardActions>
    </Card>
    </Grid>
   ) )}
   
    </Grid>    <AddUser/>
    </Grid>
    );
}
