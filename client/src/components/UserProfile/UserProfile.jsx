import { Paper } from "@mui/material";
import React from "react";
const UserProfile = () => {
  return (
    <Paper className="userProfile" elevation={20}>
      <div className="userData">
        <div className="profileImg">
          <img
            src="https://assets.leetcode.com/users/default_avatar.jpg"
            alt="Avatar"
            class="h-40 w-40 rounded-lg object-cover"
          />
        </div>
        <div className="profileData">
          <h1>Avhishek Pandey</h1>
          <h2>Age: 32</h2>
          <h2>Contribution: 5o meals</h2>
          <h2>Pickups: 10 meals</h2>
          <h2>Type: Individual</h2>
        </div>
      </div>
    </Paper>
  );
};

export default UserProfile;
