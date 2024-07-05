import React from 'react';
import UserHeader from './UserHeader';
import CreatePost from './CreatePost';
import ProfileSidebar from './ProfileSidebar';
import MapPost from './MapPost';
import Footer from '../HomePage/Footer'

export default function UserHomePage() {
  return (
    <div>
      <UserHeader />
      <div className="mainContentWrapper flex flex-wrap justify-between">
        <ProfileSidebar />
        <div className="flex flex-col items-center justify-center mx-auto  w-full md:w-2/3">
          <CreatePost />
          <MapPost />
          <MapPost />
          <MapPost />
          <MapPost />
          <MapPost />
          <MapPost />
          <MapPost />
          <MapPost />
        </div>
      </div>
      <Footer/>
    </div>
  );
}
