import axios from "axios";
import { useNavigate } from "react-router-dom";
// import { useAuth } from "../../../Context/AuthContext"; 
// import { useHistory } from "react-router-dom"; 
import { FaGooglePlusG } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { Link } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const validationSchema = Yup.object({
  username: Yup.string().required("Name is required"),
  email: Yup.string()
    .email("Invalid email address")
    .required("Email is required"),
  password: Yup.string().required("Password is required"),
});

const Signup = () => {
  const navigate = useNavigate();
  // const { login } = useAuth();

  // Formik for Sign Up
  const signUpFormik = useFormik({
    initialValues: { username: "", email: "", password: "" },
    validationSchema,
    onSubmit: (values) => {
      console.log("Sign Up Form Values", values);
      handleSignUpSubmit(values); // API call for Sign Up
    },
  });

  // Formik for Sign In
  const signInFormik = useFormik({
    initialValues: { email: "", password: "" },
    validationSchema: validationSchema.pick(["email", "password"]),
    onSubmit: (values) => {
      console.log("Sign In Form Values", values);
      handleSignInSubmit(values); // API call for Sign In
    },
  });

  // Handle Sign Up Submit (API call)
  // const handleSignUpSubmit = async (values) => {
  //   try {
  //     const response = await axios.post("http://localhost:8080/api/users/register", {
  //       username: values.username,
  //       email: values.email,
  //       password: values.password,
  //     });
      
  //     if (response.data) {
  //       // Get the token from signup response
  //       const { accessToken } = response.data;
        
  //       if (!accessToken) {
  //         throw new Error("No access token received");
  //       }
        
  //       // Store the token in localStorage
  //       localStorage.setItem("accessToken", accessToken);
        
  //       toast.success("Signup successful!");
  //       navigate("/homepage");
  //     } else {
  //       throw new Error("Invalid response from server");
  //     }
  //   } catch (error) {
  //     console.error("Signup Error:", error.response?.data || error.message);
  //     const errorMessage = error.response?.data?.message || error.message || "Signup failed";
  //     toast.error(errorMessage);
  //   }
  // };
  
  // // Handle Sign In Submit (API call)
  // const handleSignInSubmit = async (values) => {
  //   try {
  //     const response = await axios.post("http://localhost:8080/api/users/login", values);
  //     console.log("Login Successful:", response.data);
      
  //     // Get the token from response
  //     const { accessToken } = response.data;
      
  //     if (!accessToken) {
  //       throw new Error("No access token received");
  //     }
      
  //     // Store the token in localStorage
  //     localStorage.setItem("accessToken", accessToken);
      
  //     toast.success("Login successful!");
  //     navigate("/homepage", { replace: true });
  //   } catch (error) {
  //     console.error("Login Error:", error.response?.data || error.message);
  //     toast.error(error.response?.data?.message || "Login failed");
  //     // Clear any existing token on login failure
  //     localStorage.removeItem("accessToken");
  //   }
  // };

  const handleSignUpSubmit = async (values) => {
    try {
      const response = await axios.post("http://localhost:8080/api/users/register", {
        username: values.username,
        email: values.email,
        password: values.password,
      });
  
      console.log("Signup Response:", response.data);
  
      // Since signup doesn't return a token, we'll show success and redirect to login
      if (response.status === 201) {
        toast.success("Signup successful! Please login.");
        // Switch to login form
        handleSwitchToSignIn();
      } else {
        throw new Error("Unexpected response from server");
      }
    } catch (error) {
      console.error("Signup Error:", error.response?.data || error.message);
  
      const errorMessage =
        error.response?.data?.message ||
        (error.response?.status === 409
          ? "User already exists"
          : "Signup failed. Please try again.");
  
      toast.error(errorMessage);
    }
  };
  
  const handleSignInSubmit = async (values) => {
    try {
      const response = await axios.post("http://localhost:8080/api/users/login", {
        email: values.email,
        password: values.password,
      });
  
      console.log("Login Response:", response.data);
  
      if (response.data?.accessToken) {
        localStorage.setItem("accessToken", response.data.accessToken);
        toast.success("Login successful!");
        // Add a small delay before navigation to ensure toast is visible
        setTimeout(() => {
          navigate("/homepage", { replace: true });
        }, 1000);
      } else {
        throw new Error("No access token received");
      }
    } catch (error) {
      console.error("Login Error:", error.response?.data || error.message);
  
      const errorMessage =
        error.response?.data?.message ||
        (error.response?.status === 401
          ? "Invalid email or password"
          : "Login failed. Please try again.");
  
      toast.error(errorMessage);
      localStorage.removeItem("accessToken");
    }
  };
  

  // Handle form switch to Sign In
  const handleSwitchToSignIn = () => {
    document.getElementById("container").classList.remove("right-panel-active");
  };

  // Handle form switch to Sign Up
  const handleSwitchToSignUp = () => {
    document.getElementById("container").classList.add("right-panel-active");
  };

  return (
    <div className="formWrapper p-14 h-full flex mx-auto justify-center items-center bg-radial">
      <ToastContainer />
      <div className="container" id="container">
        <div className="form-container sign-up-container">
          <form onSubmit={signUpFormik.handleSubmit}>
            <h1>Create Account</h1>
            <div className="social-container mb-4">
              <Link to="#" className="social hover:bg-black">
                <FaGooglePlusG className="fillwhite" />
              </Link>
              <Link to="#" className="social hover:bg-black">
                <FaFacebook className="fillwhite" />
              </Link>
              <Link to="#" className="social hover:bg-black">
                <FaLinkedinIn className="fillwhite" />
              </Link>
            </div>
            <input
              type="text"
              name="username"
              placeholder="Name"
              value={signUpFormik.values.username}
              onChange={signUpFormik.handleChange}
              onBlur={signUpFormik.handleBlur}
              className="rounded-3xl focusoutline border-gray-300 focus:outline-none"
            />
            {signUpFormik.touched.usernamename && signUpFormik.errors.username ? (
              <div className="error">{signUpFormik.errors.username}</div>
            ) : null}
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={signUpFormik.values.email}
              onChange={signUpFormik.handleChange}
              onBlur={signUpFormik.handleBlur}
              className="rounded-3xl focusoutline border-gray-300 focus:outline-none"
            />
            {signUpFormik.touched.email && signUpFormik.errors.email ? (
              <div className="error">{signUpFormik.errors.email}</div>
            ) : null}
            <input
              type="password"
              name="password"
              placeholder="Password"
              value={signUpFormik.values.password}
              onChange={signUpFormik.handleChange}
              onBlur={signUpFormik.handleBlur}
              className="rounded-3xl focusoutline border-gray-300 focus:outline-none"
            />
            {signUpFormik.touched.password && signUpFormik.errors.password ? (
              <div className="error">{signUpFormik.errors.password}</div>
            ) : null}
            <button type="submit" className="btn-hover my-2">Sign Up</button>
          </form>
        </div>
        <div className="form-container sign-in-container">
          <form onSubmit={signInFormik.handleSubmit}>
            <h1>Sign in</h1>
            <div className="social-container">
              <Link to="#" className="social hover:bg-black">
                <FaFacebook className="fillwhite" />
              </Link>
              <Link to="#" className="social hover:bg-black">
                <FaGooglePlusG className="fillwhite" />
              </Link>
              <Link to="#" className="social hover:bg-black">
                <FaLinkedinIn className="fillwhite" />
              </Link>
            </div>
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={signInFormik.values.email}
              onChange={signInFormik.handleChange}
              onBlur={signInFormik.handleBlur}
              className="rounded-3xl focusoutline border-gray-300 focus:outline-none"
            />
            {signInFormik.touched.email && signInFormik.errors.email ? (
              <div className="error">{signInFormik.errors.email}</div>
            ) : null}
            <input
              type="password"
              name="password"
              placeholder="Password"
              value={signInFormik.values.password}
              onChange={signInFormik.handleChange}
              onBlur={signInFormik.handleBlur}
              className="rounded-3xl focusoutline border-gray-300 focus:outline-none"
            />
            {signInFormik.touched.password && signInFormik.errors.password ? (
              <div className="error">{signInFormik.errors.password}</div>
            ) : null}
            <Link to="#" className="hoverunderline">
              Forgot your password?
            </Link>
            <button type="submit" className="btn-hover">Sign In</button>
          </form>
        </div>
        <div className="overlay-container">
          <div className="overlay">
            <div className="overlay-panel overlay-left">
              <h1>Welcome Back!</h1>
              <p>
                To keep connected with us please login with your personal info
              </p>
              <button className="ghost" id="signIn" onClick={handleSwitchToSignIn}>
                Sign In
              </button>
            </div>
            <div className="overlay-panel overlay-right">
              <h1>Welcome to PreConnect!</h1>
              <p>Sign up now and start journey with us</p>
              <button className="ghost" id="signUp" onClick={handleSwitchToSignUp}>
                Sign Up
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
