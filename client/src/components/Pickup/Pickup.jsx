import React, { useState } from 'react';
import { styled } from '@mui/system';
import { Box, Typography, Checkbox, IconButton } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import { useDispatch } from 'react-redux';
import { cancelPickup, loadUser, updatePickup } from '../../redux/action';

const useStyles = styled((theme) => ({
    pickupContainer: {
        padding: theme.spacing(1),
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    pickupDetails: {
        width: '70%',
    },
    title: {
        fontSize: 20,
        marginVertical: theme.spacing(1),
        color: theme.palette.primary.main,
    },
    description: {
        color: theme.palette.text.secondary,
    },
    cancelButton: {
        backgroundColor: theme.palette.secondary.main,
        borderRadius: '50%',
    },
}));

const Pickup = ({ title, description, status, pickupId }) => {
    const classes = useStyles();
    const dispatch = useDispatch();
    const [completed, setCompleted] = useState(status);

    const handleCheckbox = () => {
        setCompleted(!completed);
        dispatch(updatePickup(pickupId));
    };

    const cancelHandler = async () => {
        await dispatch(cancelPickup(pickupId));
        dispatch(loadUser());
    };

    return (
        <Box className={classes.pickupContainer}>
            <Box className={classes.pickupDetails}>
                <Typography className={classes.title}>Food: {title}</Typography>
                <Typography className={classes.description}>Details: {description}</Typography>
            </Box>
            <div>
                <Checkbox
                    checked={completed}
                    color="primary"
                    onChange={handleCheckbox}
                />
                Picked Up
            </div>
            <div>
                <IconButton
                    aria-label="cancel"
                    onClick={cancelHandler}
                    className={classes.cancelButton}
                >
                    <DeleteIcon style={{ color: '#f60' }} />
                </IconButton>
                Cancel Pickup
            </div>
        </Box>
    );
};

export default Pickup;
