import React, { useState } from "react";
import { Button, Input, Paper, FormControl, InputLabel, Select, MenuItem } from "@mui/material";
import { Link } from "react-router-dom";

const Register = () => {
    const [contributorType, setContributorType] = useState("individual");

    const handleContributorTypeChange = (event) => {
        setContributorType(event.target.value);
    };

    return (
        <Paper className="loginPage" elevation={20}>
            <h1>Register</h1>
            <form>
                <Input className="credential" placeholder="Enter Name" variant="outlined" />
                <Input className="credential" placeholder="Enter Userid" variant="outlined" />
                <Input className="credential" placeholder="Enter Email" variant="outlined" />
                <Input className="credential" placeholder="Enter Password" variant="outlined" />
                <FormControl variant="outlined" style={{ width: "100%", marginTop: "20px" }}>
                    <InputLabel id="contributor-type-label">Contributor Type</InputLabel>
                    <Select
                        labelId="contributor-type-label"
                        id="contributor-type"
                        value={contributorType}
                        onChange={handleContributorTypeChange}
                        label="Contributor Type"
                    >
                        <MenuItem value="individual">Individual</MenuItem>
                        <MenuItem value="organization">Organization</MenuItem>
                        <MenuItem value="restaurant">Restaurant</MenuItem>
                        <MenuItem value="marketplace">Marketplace</MenuItem>
                    </Select>
                </FormControl>

                <Button style={{ marginTop: "35px", borderRadius: "200px" }} variant="contained" color="success">
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
