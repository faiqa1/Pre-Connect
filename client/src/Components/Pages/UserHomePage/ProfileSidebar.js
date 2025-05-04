import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import pic from "../../../Images/profilepic.png";

export default function ProfileSidebar() {
  const [profile, setProfile] = useState({
    profilePic: null,
    name: "Name",
    headline: "Headline"
  });

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const token = localStorage.getItem("accessToken");
        const res = await axios.get("http://localhost:8080/api/profile/me", {
          headers: { Authorization: `Bearer ${token}` },
        });
        const data = res.data.data || res.data;
        setProfile({
          profilePic: data.profilePic || null,
          name: data.username || "Name",
          headline: data.headline || "Headline"
        });
      } catch (err) {
        // fallback: do nothing
      }
    };
    fetchProfile();
  }, []);

  return (
    <div className="bg-blue w-full  h-[22rem] rounded-lg mx-5 my-8 flex-shrink-0 py-5 md:max-w-[15rem] lg:max-w-[20rem]   max-w-md">
        <div className="flex flex-col items-center w-full h-full mx-auto my-2">
          <div
            className="profileCircle w-32 h-32 rounded-full relative overflow-hidden"
          >
            <img src={profile.profilePic || pic} className="absolute w-full h-full object-cover " alt="Profile" />
          </div>
          <div className="textWrapper text-center">
            <h3 className="text-white font-extrabold text-xl my-2">{profile.name}</h3>
            <p className="text-white text-md py-2 px-5">
              {profile.headline}
            </p>
            <Link to='/profile'>
              <p className="text-white font-extrabold text-md underline decoration-[#002746] hover:decoration-[#fff]">View Profile</p>
            </Link>
          </div>
        </div>
    </div>
  );
}
