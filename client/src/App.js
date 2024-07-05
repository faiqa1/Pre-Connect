import "./App.css";
import Home from "./Components/Pages/HomePage/Home";
import Location from "./Components/Pages/HomePage/Location";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Blog from "./Components/Pages/Blog/Blog";
import Signup from "./Components/Pages/Signup.js/Signup";
import Layout from "./Components/Layout/Index";
import HomePageLayout from "./Components/Layout/HomepageLayout";
import BlogPage1 from "./Components/Pages/Blog/BlogPage1";
import BlogPage2 from "./Components/Pages/Blog/BlogPage2";
import BlogPage3 from "./Components/Pages/Blog/BlogPage3";
import BlogPage4 from "./Components/Pages/Blog/BlogPage4";
import BlogPage5 from "./Components/Pages/Blog/BlogPage5";
import AllJobs from "./Components/Pages/Jobs&Companies/AllJobs";
import FeaturedJobs from "./Components/Pages/HomePage/FeaturedJobs";
import Companies from "./Components/Pages/HomePage/Companies";
import UserHomePage from "./Components/Pages/UserHomePage/UserHomePage";
import Profile from "./Components/Pages/UserHomePage/Profile";
import Job from "./Components/Pages/Jobs/Job";
import Project from "./Components/Pages/Projects/Project";
import Notification from "./Components/Pages/Notifications/Notification";
import Projectform from "./Components/Pages/Projects/Projectform";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route
            index
            element={
              <Layout>
                <Home />
              </Layout>
            }
          />
          <Route
            path="/blogs"
            element={
              <Layout>
                <Blog />
              </Layout>
            }
          />
          <Route
            path="/page1"
            element={
              <Layout>
                <BlogPage1 />
              </Layout>
            }
          />
          <Route
            path="/page2"
            element={
              <Layout>
                <BlogPage2 />
              </Layout>
            }
          />
          <Route
            path="/page3"
            element={
              <Layout>
                <BlogPage3 />
              </Layout>
            }
          />
          <Route
            path="/page4"
            element={
              <Layout>
                <BlogPage4 />
              </Layout>
            }
          />
          <Route
            path="/page5"
            element={
              <Layout>
                <BlogPage5 />
              </Layout>
            }
          />
          <Route
            path="/featuredjobs"
            element={
              <Layout>
                <FeaturedJobs />
              </Layout>
            }
          />
          <Route
            path="/companies"
            element={
              <Layout>
                <Companies />
              </Layout>
            }
          />
          <Route
            path="/alljobs"
            element={
              <Layout>
                <AllJobs />
              </Layout>
            }
          />
          <Route path="/userhomepage" element={<UserHomePage />} />
          <Route
            path="/loc"
            element={
              <Layout>
                {" "}
                <Location />{" "}
              </Layout>
            }
          />
          <Route
            path="profile"
            element={
              <HomePageLayout>
                <Profile />
              </HomePageLayout>
            }
          />
          <Route path="/job"
            element={
              <HomePageLayout>
                <Job />
              </HomePageLayout>
            } />
             <Route path="/projects"
            element={
              <HomePageLayout>
                <Project/>
              </HomePageLayout>
            } />
             <Route path="/notification"
            element={
              <HomePageLayout>
                <Notification/>
              </HomePageLayout>
            } />
          <Route path="/signup" element={<Signup />} />
          <Route path="/projectform" element={<Projectform />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
