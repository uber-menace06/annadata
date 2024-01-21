import React, { useEffect, useState } from 'react'
import { Button, Input, Paper } from "@mui/material";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux'
import { login } from '../../redux/action.js'

const Login = () => {
    const { error } = useSelector(state => state.auth)
    const dispatch = useDispatch();
    const [userid, setuserid] = useState("");
    const [password, setPassword] = useState("");
    const loginHandler = () => {
        dispatch(login(userid, password))
    }
    useEffect(() => {
        if (error) {
            alert(error)
            dispatch({ type: "clearError" })
        }

    }, [error, dispatch, alert,])

    return (
        <Paper className="loginPage" elevation={20}>
            <h1>Login</h1>
            <form>
                <Input className="credential" placeholder="Enter UserID" variant="outlined" onChange={(e) => setuserid(e.target.value)} />
                <Input className="credential" type='password' placeholder="Enter Password" variant="outlined" onChange={(e) => setPassword(e.target.value)} />
                <Button style={{ marginTop: "35px", borderRadius: "200px" }} onClick={loginHandler} variant="contained" color="success">Login</Button>
            </form>
            <div>
                <p style={{ marginTop: "10px" }} >don't have an account?</p>
                <Link className="register-link" to="/register">
                    <Button style={{ marginTop: "10px" }} variant="outlined" >Register</Button>
                </Link>
            </div>
        </Paper>
    )
}

export default Login;