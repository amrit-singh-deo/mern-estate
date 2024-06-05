import React from "react";
import { useSelector } from "react-redux";

const Profile = () => {
  const { currentUser } = useSelector((state) => state.user.userReducer);
  return (
    <div className="p-3 max-w-lg mx-auto">
      <h1 className="text-3xl font-semibold text-center my-2">Profile</h1>
      <form className="flex flex-col gap-4">
        <img
          src={currentUser.avatar}
          alt="profile"
          className="rounded-full h-24 w-24 object-cover hover:cursor-pointer self-center mt-2"
        />
        <input type="text" id="username" placeholder="Username" className="border p-3 rounded-lg" />
        <input type="text" id="email" placeholder="Email" className="border p-3 rounded-lg" />
        <input type="text" id="password" placeholder="Password" className="border p-3 rounded-lg" />
        <button className="bg-slate-700 rounded-lg p-3 uppercase hover:opacity-95 disabled:opacity-80 text-white">Update</button>
      </form>
      <div className="flex justify-between mt-5">
        <span className="text-red-700 cursor-pointer">Delete Account</span>
        <span className="text-red-700 cursor-pointer">Sign Out</span>
      </div>
    </div>
  );
};

export default Profile;
