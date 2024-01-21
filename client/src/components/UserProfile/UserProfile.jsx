import { Paper } from "@mui/material";
import React from "react";
import { useSelector } from 'react-redux';

const UserProfile = () => {
  const { user } = useSelector(state => state.auth);
  return (
    <Paper className="user-profile p-8 m-5" elevation={20}>
      <div className="flex items-center">
        <div>
          <img
            src="https://assets.leetcode.com/users/default_avatar.jpg"
            alt="Avatar"
          />
        </div>
        <div className="profile-data ml-8">
          <h1 className="text-2xl font-bold mb-2">{user.name}</h1>
          <h1 className="text-xs font-bold mb-2">@{user.userid}</h1>
          <h2 className="text-gray-600">Age: 19</h2>
          <h2 className="text-gray-600">Contribution: 120 meals</h2>
          <h2 className="text-gray-600">Pickups: 10</h2>
          <h2 className="text-gray-600">Type: Individual</h2>
        </div>
      </div>

      <div className="mt-8 border-t pt-6">
        <h2 className="text-lg font-bold mb-4">Community Stats</h2>
        <div className="grid grid-cols-2 gap-4">
          <div className="stat">
            <h3 className="text-sm text-gray-600">Views</h3>
            <p className="text-xl font-bold">3</p>
            <p className="text-xs text-gray-500">Last week: 0</p>
          </div>
          <div className="stat">
            <h3 className="text-sm text-gray-600">Contributions</h3>
            <p className="text-xl font-bold">120</p>
            <p className="text-xs text-gray-500">Last week: 0</p>
          </div>
          <div className="stat">
            <h3 className="text-sm text-gray-600">score</h3>
            <p className="text-xl font-bold">1200</p>
            <p className="text-xs text-gray-500">Last week increment: 0</p>
          </div>
          <div className="stat">
            <h3 className="text-sm text-gray-600">Reputation</h3>
            <p className="text-xl font-bold">0</p>
            <p className="text-xs text-gray-500">Last week: 0</p>
          </div>
        </div>
      </div>
    </Paper>
  );
};

export default UserProfile;
