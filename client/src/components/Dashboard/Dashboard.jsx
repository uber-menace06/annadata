import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addPickup, loadUser } from '../../redux/action.js';
import Pickup from "../Pickup/Pickup.jsx";
import {
  Dialog, Button, TextField, Typography, Container, Paper, AppBar, Toolbar, IconButton, DialogTitle,
  DialogContent,
} from '@mui/material';
import AddIcon from '@mui/icons-material/Add';

const Dashboard = () => {
  const { user } = useSelector(state => state.auth);
  const dispatch = useDispatch();

  const { loading, message, error } = useSelector(state => state.message);

  const [openDialog, setOpenDialog] = useState(false);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const hideDialog = () => {
    setOpenDialog(!openDialog);
  }

  const addPickupHandler = async () => {
    await dispatch(addPickup(title, description));
    dispatch(loadUser());
  }

  useEffect(() => {
    if (error) {
      alert(error);
      dispatch({ type: "clearError" });
    }
    if (message) {
      alert(message);
      dispatch({ type: "clearMessage" });
    }
  }, [error, message, dispatch]);

  return (
    <Container>
      <AppBar position="static" style={{ background: "#272829" }}>
        <Toolbar>
          <Typography variant="h6" style={{ flexGrow: 1, textAlign: "center" }}>
            All Pickups
          </Typography>
        </Toolbar>
      </AppBar>

      <Paper style={{ padding: 20, marginTop: 20 }}>
        {user && user.pickups.map((item) => (
          <Pickup key={item._id} title={item.title} description={item.description} status={item.completed} PickupId={item._id} />
        ))}
      </Paper>

      <IconButton
        style={{ backgroundColor: "#eee", position: "fixed", bottom: 40, right: 40, width: 80, height: 80 }}
        className='z-20'
        title='Order Pickup'
        onClick={hideDialog}
      >
        <AddIcon />
      </IconButton>

      <Dialog open={openDialog} onClose={hideDialog}>
        <DialogTitle>Order Pickup</DialogTitle>
        <DialogContent>
          <TextField
            label="Title"
            variant="outlined"
            fullWidth
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            style={{ marginBottom: 15 }}
          />
          <TextField
            label="Description"
            variant="outlined"
            fullWidth
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            style={{ marginBottom: 15 }}
          />

          <div style={{ display: "flex", justifyContent: "flex-end" }}>
            <Button
              variant="contained"
              color="primary"
              onClick={addPickupHandler}
              disabled={!title || !description || loading}
            >
              ADD
            </Button>
            <Button onClick={hideDialog} style={{ marginLeft: 10 }}>
              CANCEL
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </Container>
  );
}

export default Dashboard;
