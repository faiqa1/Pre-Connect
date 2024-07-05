import React, { useState, useEffect, useRef } from 'react';
import { FaPencil } from 'react-icons/fa6';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";

// Replace with your actual company and position data
const companyOptions = ['Company A', 'Company B', 'Company C'];
const positionOptions = ['Position X', 'Position Y', 'Position Z'];

const ExperienceForm = () => {
  const [showModal, setShowModal] = useState(false);
  const [formData, setFormData] = useState({
    companyName: '',
    position: '',
    startDate: null,
    endDate: null,
    currentlyWorking: false,
  });
  const [experiences, setExperiences] = useState([]); // List of all submitted experiences
  const [errors, setErrors] = useState({});
  const modalRef = useRef(null); // Create a ref for the modal

  const validateForm = () => {
    let errors = {};
    if (!formData.companyName) {
      errors.companyName = 'Company Name is required';
    }
    if (!formData.position) {
      errors.position = 'Position is required';
    }
    if (!formData.startDate) {
      errors.startDate = 'Start Date is required';
    }
    if (!formData.currentlyWorking && !formData.endDate) {
      errors.endDate = 'End Date is required';
    }
    setErrors(errors);
    return Object.keys(errors).length === 0; // Return true if no errors
  };

  const onSubmit = (e) => {
    e.preventDefault();
    const isValid = validateForm();
    if (isValid) {
      // Add the new experience to the list of experiences
      setExperiences([...experiences, formData]);
      resetForm();
      setShowModal(false);
    }
  };

  const resetForm = () => {
    setFormData({
      companyName: '',
      position: '',
      startDate: null,
      endDate: null,
      currentlyWorking: false,
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
        <h2 className="font-bold text-center ml-5">Experience</h2>
        <button
          className="ml-auto"
          onClick={() => setShowModal(true)}
        >
          <FaPencil className="fill-black" />
        </button>
      </div>

      {experiences.map((experience, index) => (
        <div className="mt-4" key={index}>
          <p><strong>Company Name:</strong> {experience.companyName}</p>
          <p><strong>Position:</strong> {experience.position}</p>
          <p><strong>Start Date:</strong> {experience.startDate.toLocaleDateString()}</p>
          {experience.currentlyWorking ? (
            <p><strong>Present</strong></p>
          ) : (
            <p><strong>End Date:</strong> {experience.endDate.toLocaleDateString()}</p>
          )}
        </div>
      ))}

      {showModal && (
        <div className="fixed inset-0 z-10 flex items-center justify-center overflow-x-hidden overflow-y-auto outline-none focus:outline-none">
          <div className="relative w-1/2 bg-white rounded-lg shadow-lg" ref={modalRef}>
            <div className="p-8">
              <h2 className="text-lg font-bold mb-4">Add New Experience</h2>

              <form onSubmit={onSubmit}>
                <div className="mb-4">
                  <label htmlFor="companyName" className="block font-bold mb-1">Company Name</label>
                  <select
                    id="companyName"
                    name="companyName"
                    className="form-input"
                    value={formData.companyName}
                    onChange={(e) => setFormData({ ...formData, companyName: e.target.value })}
                  >
                    <option value="">Select Company</option>
                    {companyOptions.map((company) => (
                      <option key={company} value={company}>
                        {company}
                      </option>
                    ))}
                  </select>
                  {errors.companyName && <div className="text-red-500">{errors.companyName}</div>}
                </div>

                <div className="mb-4">
                  <label htmlFor="position" className="block font-bold mb-1">Position</label>
                  <select
                    id="position"
                    name="position"
                    className="form-input"
                    value={formData.position}
                    onChange={(e) => setFormData({ ...formData, position: e.target.value })}
                  >
                    <option value="">Select Position</option>
                    {positionOptions.map((position) => (
                      <option key={position} value={position}>
                        {position}
                      </option>
                    ))}
                  </select>
                  {errors.position && <div className="text-red-500">{errors.position}</div>}
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

                {!formData.currentlyWorking && (
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
                      id="currentlyWorking"
                      name="currentlyWorking"
                      className="form-checkbox"
                      checked={formData.currentlyWorking}
                      onChange={(e) => setFormData({ ...formData, currentlyWorking: e.target.checked })}
                    />
                    <span className="ml-2">Currently Working</span>
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

export default ExperienceForm;
