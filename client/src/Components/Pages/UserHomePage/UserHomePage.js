import React from 'react';
import UserHeader from './UserHeader';
import CreatePost from './CreatePost';
import ProfileSidebar from './ProfileSidebar';
import MapPost from './MapPost';
import Footer from '../HomePage/Footer'

export default function UserHomePage() {
  return (
    <div className="min-h-screen bg-gray-100">
      <UserHeader />
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row gap-8">
          {/* Left Sidebar */}
          <div className="w-full md:w-1/4">
            <ProfileSidebar />
          </div>
          
          {/* Main Content */}
          <div className="w-full md:w-2/3">
            <CreatePost />
            <div className="space-y-6 mt-6">
              <MapPost />
              <MapPost />
              <MapPost />
              <MapPost />
              <MapPost />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}



