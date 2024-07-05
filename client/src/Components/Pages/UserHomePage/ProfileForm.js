import React, { useState } from "react";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import Avatar from "react-avatar";
import AvatarEdit from "react-avatar-edit";
import Modal from "react-modal";
import { FaPencil } from "react-icons/fa6";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ProfileForm = () => {
  Modal.setAppElement("#root");

  const customStyles = {
    content: {
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
    },
  };

  const [profile, setProfile] = useState({
    profilePic: null,
    name: "Name",
    headline: "Headline",
  });
  const [preview, setPreview] = useState(null);
  const [src, setSrc] = useState(null);
  const [modalIsOpen, setIsOpen] = useState(false);
  const [imageModalIsOpen, setImageModalIsOpen] = useState(false);

  const initialValues = {
    profilePic: "",
    name: profile.name,
    headline: profile.headline,
  };

  const validationSchema = Yup.object({
    name: Yup.string().required("Name is required"),
    headline: Yup.string().required("Headline is required"),
  });

  const onClose = () => {
    setPreview(null);
  };

  const onCrop = (view) => {
    setPreview(view);
  };

  const onBeforeFileLoad = (elem) => {
    if (elem.target.files[0].size > 716800) {
      alert("File is too big!");
      elem.target.value = "";
    }
  };

  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  const openImageModal = () => {
    setImageModalIsOpen(true);
  };

  const closeImageModal = () => {
    setImageModalIsOpen(false);
  };

  const handleProfileUpdate = (values) => {
    setProfile({
      profilePic: preview,
      name: values.name,
      headline: values.headline,
    });
    closeModal();
    toast.success("Profile updated successfully");
  };

  return (
    <div
      className=" text-center
    form-wrapper flex mx-auto justify-center items-center
    bg-blue h-[15rem]  max-h-[15rem] md:max-h-[10rem] lg:max-h-[15rem] w-1/2 my-5 rounded-2xl"
    >
      <div className="profile-display">
        {profile.profilePic ? (
          <Avatar src={profile.profilePic} size="100" round />
        ) : (
          <Avatar name="Profile Pic" size="100" round className="circleblue" />
        )}
        <h2 className="text-white py-2 font-bold text-md">{profile.name}</h2>
        <h4 className="text-white py-2 font-bold text-md">
          {profile.headline}
        </h4>
        <button onClick={openModal} className="btn btn-primary ml-2">
          <FaPencil className="fill-white" />
        </button>
      </div>

      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Profile Form Modal"
      >
        <div
          className="form-wrapper flex mx-auto justify-center items-center
    bg-blue h-auto  max-h-[20rem] md:max-h-[15rem] lg:max-h-[20rem] w-full my-5 rounded-2xl px-2 py-4"
        >
          <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={(values) => {
              values.profilePic = preview; // Set the cropped image as the profilePic value
              handleProfileUpdate(values);
            }}
          >
            {({ setFieldValue }) => (
              <Form>
                <div className="form-group">
                  <button
                    type="button"
                    onClick={openImageModal}
                    className="btn btn-secondary ml-2 text-white"
                  >
                    Choose Profile Photo
                  </button>
                  {preview && (
                    <Avatar src={preview} size="100" round className="mx-4" />
                  )}
                </div>
                <div className="form-group">
                  <label htmlFor="name" className="text-white">
                    Name
                  </label>
                  <Field
                    id="name"
                    name="name"
                    placeholder="Name"
                    className="form-control rounded-3xl focus:outline-none border-gray-300 bg-white border-none px-4 py-2 my-2 w-full text-black"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="headline" className="text-white">
                    Headline
                  </label>
                  <Field
                    id="headline"
                    name="headline"
                    placeholder="Headline"
                    className="form-control rounded-3xl focus:outline-none border-gray-300 bg-white border-none px-4 py-2 my-2 w-full text-black"
                  />
                </div>
                <button
                  type="submit"
                  className="btn btn-success mt-2 text-white font-bold text-lg"
                >
                  Update Profile
                </button>
              </Form>
            )}
          </Formik>
        </div>
      </Modal>

      <Modal
        isOpen={imageModalIsOpen}
        onRequestClose={closeImageModal}
        style={customStyles}
        contentLabel="Profile Picture Modal"
      >
        <h2>Choose Profile Photo</h2>
        <AvatarEdit
          width={390}
          height={295}
          onCrop={onCrop}
          onClose={onClose}
          onBeforeFileLoad={onBeforeFileLoad}
          src={src}
        />
        <button
          type="button"
          onClick={closeImageModal}
          className="btn btn-primary mt-2"
        >
          OK
        </button>
      </Modal>
      <ToastContainer />
    </div>
  );
};

export default ProfileForm;
