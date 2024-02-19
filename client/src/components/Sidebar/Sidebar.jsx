import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from 'react-redux';

const Sidebar = () => {
  const { user } = useSelector(state => state.auth);
  return (
    <div class="bg-green-300 ml-7 dark:bg-dark-green-500 shadow-down-01 dark:shadow-dark-down-01 rounded-lg w-[300px] flex flex-col min-w-[300px] p-4 pt-[21px] my-4">
      <div class="flex flex-col space-y-4">
        <div class="flex space-x-4">
          <div class="relative flex h-20 w-20">
            <Link to="/userprofile">
              <img
                src="https://assets.leetcode.com/users/default_avatar.jpg"
                alt="Avatar"
                class="h-20 w-20 rounded-lg object-cover"
              />
            </Link>
          </div>
          <div class="flex flex-col">
            <div class="flex items-center">
              <div class="font-semibold">{user.name}</div>
            </div>
            <div class="flex items-center">
              <div class="text-xs">@{user.userid}</div>
            </div>
            <div class="flex flex-1 items-end space-x-[5px] text-base">
              <span>Rank</span>
              <span class="font-medium">1</span>
            </div>
          </div>
        </div>
      </div>
      <div class="border-b border-divider-3 dark:border-dark-divider-3 my-4 "></div>
      <div className="space-y-2">
        <Link
          to="/link2"
          className="ring-2 ring-white/100 hover:ring-white/40 block text-black hover:underline text-sm leading-6 p-2 rounded-md hover:bg-green-400 focus:bg-green-400 focus:outline-none focus:ring focus:border-green-300"
        >
          Home
        </Link>
        <Link
          to="/link1"
          className="ring-1 ring-white/100 hover:ring-white/40 block text-black hover:underline text-sm leading-6 p-2 rounded-md hover:bg-green-400 focus:bg-green-400 focus:outline-none focus:ring focus:border-green-300"
        >
          Contribute
        </Link>
        <Link
          to="/link2"
          className="ring-1 ring-white/100 hover:ring-white/40 block text-black hover:underline text-sm leading-6 p-2 rounded-md hover:bg-green-400 focus:bg-green-400 focus:outline-none focus:ring focus:border-green-300"
        >
          Past Constributions
        </Link>
        <Link
          to="/link3"
          className="ring-1 ring-white/100 hover:ring-white/40 block text-black hover:underline text-sm leading-6 p-2 rounded-md hover:bg-green-400 focus:bg-green-400 focus:outline-none focus:ring focus:border-green-300"
        >
          Notifications
        </Link>
        <div className="mb-4 relative">
          <input
            type="text"
            placeholder="Search..."
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-green-300"
          />
          <button className="absolute inset-y-0 right-0 px-4 py-2 bg-green-500 text-white rounded-md">
            Search
          </button>
        </div>
      </div>
      <div className="my-8 h-20"></div>
      <div className="space-y-2">
        <Link
          to="/settings1"
          className="ring-1 ring-white/100 hover:ring-white/40 block text-black hover:underline text-sm leading-6 p-2 rounded-md hover:bg-green-400 focus:bg-green-400 focus:outline-none focus:ring focus:border-green-300"
        >
          Raise ticket
        </Link>
        <Link
          to="/settings2"
          className="ring-1 ring-white/100 hover:ring-white/40 block text-black hover:underline text-sm leading-6 p-2 rounded-md hover:bg-green-400 focus:bg-green-400 focus:outline-none focus:ring focus:border-green-300"
        >
          Settings
        </Link>
      </div>
    </div>
  );
};

export default Sidebar;
