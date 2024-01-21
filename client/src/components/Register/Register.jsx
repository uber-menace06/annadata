import React, { useState } from "react";
import {
  Button,
  Input,
  Paper,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
} from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const Register = () => {
  const [userid, setuserid] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [ctype, settype] = useState("");
  const navigate = useNavigate();

  const registerHandler = async () => {
    try {
      const response = await axios.post("http://localhost:4000/api/register", {
        userid,
        name,
        email,
        password,
        type: ctype,
      });
      console.log(response.data);
    } catch (error) {
      console.error("Axios Error:", error.response.data);
    }
    navigate("/")
  };

  return (
    <Paper className="loginPage" elevation={20}>
      <h1>Register</h1>
      <form>
        <Input
          className="credential"
          placeholder="Enter Userid"
          variant="outlined"
          onChange={(e) => setuserid(e.target.value)}
        />
        <Input
          className="credential"
          placeholder="Enter Name"
          variant="outlined"
          onChange={(e) => setName(e.target.value)}
        />
        <Input
          className="credential"
          placeholder="Enter Email"
          variant="outlined"
          onChange={(e) => setEmail(e.target.value)}
        />
        <Input
          className="credential"
          type="password"
          placeholder="Enter Password"
          variant="outlined"
          onChange={(e) => setPassword(e.target.value)}
        />
        <FormControl
          variant="outlined"
          style={{ width: "100%", marginTop: "20px" }}
        >
          <InputLabel id="contributor-type-label">Contributor Type</InputLabel>
          <Select
            labelId="contributor-type-label"
            id="contributor-type"
            value={ctype}
            onChange={(e) => settype(e.target.value)}
            label="Contributor Type"
          >
            <MenuItem value="individual">Individual</MenuItem>
            <MenuItem value="organization">Organization</MenuItem>
            <MenuItem value="restaurant">Restaurant</MenuItem>
            <MenuItem value="marketplace">Marketplace</MenuItem>
          </Select>
        </FormControl>

        <Button
          style={{ marginTop: "35px", borderRadius: "200px" }}
          onClick={registerHandler}
          variant="contained"
          color="success"
        >
          Register
        </Button>
      </form>
      <div>
        <p style={{ marginTop: "10px" }}>Login to an existing account</p>
        <Link className="register-link" to="/login">
          <Button style={{ marginTop: "10px" }} variant="outlined">
            Login
          </Button>
        </Link>
      </div>
    </Paper>
  );
};

export default Register;
