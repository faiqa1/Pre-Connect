import React, { useState, useEffect, useRef } from 'react';
import { FaPencil } from 'react-icons/fa6';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";

const Educationform = () => {
  const [showModal, setShowModal] = useState(false);
  const [formData, setFormData] = useState({
    universityName: '',
    degreeName: '',
    startDate: null,
    endDate: null,
    currentlyStudying: false,
  });
  const [educations, setEducations] = useState([]); // List of all submitted educations
  const [errors, setErrors] = useState({});
  const modalRef = useRef(null); // Create a ref for the modal

  const validateForm = () => {
    let errors = {};
    if (!formData.universityName) {
      errors.universityName = 'University Name is required';
    }
    if (!formData.degreeName) {
      errors.degreeName = 'Degree Name is required';
    }
    if (!formData.startDate) {
      errors.startDate = 'Start Date is required';
    }
    if (!formData.currentlyStudying && !formData.endDate) {
      errors.endDate = 'End Date is required';
    }
    setErrors(errors);
    return Object.keys(errors).length === 0; // Return true if no errors
  };

  const onSubmit = (e) => {
    e.preventDefault();
    const isValid = validateForm();
    if (isValid) {
      // Add the new education to the list of educations
      setEducations([...educations, formData]);
      resetForm();
      setShowModal(false);
    }
  };

  const resetForm = () => {
    setFormData({
      universityName: '',
      degreeName: '',
      startDate: null,
      endDate: null,
      currentlyStudying: false,
    });
    setErrors({});
  };

  const handleOutsideClick = (e) => {
    if (modalRef.current && !modalRef.current.contains(e.target)) {
      setShowModal(false);
    }
  };

  useEffect(() => {
    if (showModal) {
      document.addEventListener('mousedown', handleOutsideClick);
    } else {
      document.removeEventListener('mousedown', handleOutsideClick);
    }
    return () => {
      document.removeEventListener('mousedown', handleOutsideClick);
    };
  }, [showModal]);

  return (
    <div className="form-wrapper flex flex-col mx-auto bg-lightblue h-auto max-h-[70rem] md:max-h-[50rem] lg:max-h-[70rem] w-1/2 rounded-2xl my-4 py-6 px-4">
      <div className="flex items-start">
        <h2 className="font-bold text-center ml-5">Education</h2>
        <button
          className="ml-auto"
          onClick={() => setShowModal(true)}
        >
          <FaPencil className="fill-black" />
        </button>
      </div>

      {educations.map((education, index) => (
        <div className="mt-4" key={index}>
          <p><strong>University Name:</strong> {education.universityName}</p>
          <p><strong>Degree Name:</strong> {education.degreeName}</p>
          <p><strong>Start Date:</strong> {education.startDate.toLocaleDateString()}</p>
          {education.currentlyStudying ? (
            <p><strong>Present</strong></p>
          ) : (
            <p><strong>End Date:</strong> {education.endDate.toLocaleDateString()}</p>
          )}
        </div>
      ))}

      {showModal && (
        <div className="fixed inset-0 z-10 flex items-center justify-center overflow-x-hidden overflow-y-auto outline-none focus:outline-none">
          <div className="relative w-1/2 bg-white rounded-lg shadow-lg" ref={modalRef}>
            <div className="p-8">
              <h2 className="text-lg font-bold mb-4">Add New Education</h2>

              <form onSubmit={onSubmit}>
                <div className="mb-4">
                  <label htmlFor="universityName" className="block font-bold mb-1">University Name</label>
                  <input
                    id="universityName"
                    name="universityName"
                    type="text"
                    className="form-input"
                    value={formData.universityName}
                    onChange={(e) => setFormData({ ...formData, universityName: e.target.value })}
                  />
                  {errors.universityName && <div className="text-red-500">{errors.universityName}</div>}
                </div>

                <div className="mb-4">
                  <label htmlFor="degreeName" className="block font-bold mb-1">Degree Name</label>
                  <input
                    id="degreeName"
                    name="degreeName"
                    type="text"
                    className="form-input"
                    value={formData.degreeName}
                    onChange={(e) => setFormData({ ...formData, degreeName: e.target.value })}
                  />
                  {errors.degreeName && <div className="text-red-500">{errors.degreeName}</div>}
                </div>

                <div className="mb-4">
                  <label htmlFor="startDate" className="block font-bold mb-1">Start Date</label>
                  <DatePicker
                    id="startDate"
                    name="startDate"
                    selected={formData.startDate}
                    onChange={(date) => setFormData({ ...formData, startDate: date })}
                    className="form-input"
                  />
                  {errors.startDate && <div className="text-red-500">{errors.startDate}</div>}
                </div>

                {!formData.currentlyStudying && (
                  <div className="mb-4">
                    <label htmlFor="endDate" className="block font-bold mb-1">End Date</label>
                    <DatePicker
                      id="endDate"
                      name="endDate"
                      selected={formData.endDate}
                      onChange={(date) => setFormData({ ...formData, endDate: date })}
                      className="form-input"
                    />
                    {errors.endDate && <div className="text-red-500">{errors.endDate}</div>}
                  </div>
                )}

                <div className="mb-4">
                  <label className="inline-flex items-center">
                    <input
                      type="checkbox"
                      id="currentlyStudying"
                      name="currentlyStudying"
                      className="form-checkbox"
                      checked={formData.currentlyStudying}
                      onChange={(e) => setFormData({ ...formData, currentlyStudying: e.target.checked })}
                    />
                    <span className="ml-2">Currently Studying</span>
                  </label>
                </div>

                <div className="mt-6">
                  <button
                    type="submit"
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                  >
                    Submit
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Educationform;
