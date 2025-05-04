const asyncHandler = require("express-async-handler");
const User = require("../models/UserModel");

// @desc    Get current user profile
// @route   GET /api/profile/me
// @access  Private
const getUserProfile = asyncHandler(async (req, res) => {
  try {
    const user = await User.findById(req.user.id).select("-password");

    if (!user) {
      res.status(404);
      throw new Error("User not found");
    }

    res.status(200).json({
      success: true,
      data: user
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message
    });
  }
});

// @desc    Update user profile
// @route   PUT /api/profile/update
// @access  Private
const updateUserProfile = asyncHandler(async (req, res) => {
  try {
    const user = await User.findById(req.user.id);

    if (!user) {
      res.status(404);
      throw new Error("User not found");
    }

    const { name, headline, profilePic, university, company } = req.body;

    if (name) user.username = name;
    if (headline) user.headline = headline;
    if (profilePic) user.profilePic = profilePic;
    if (university) user.university = university;
    if (company) user.company = company;

    const updatedUser = await user.save();
    
    res.status(200).json({
      success: true,
      data: {
        _id: updatedUser._id,
        username: updatedUser.username,
        email: updatedUser.email,
        headline: updatedUser.headline,
        profilePic: updatedUser.profilePic,
        university: updatedUser.university,
        company: updatedUser.company,
      }
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message
    });
  }
});

// @desc    Add education
// @route   POST /api/profile/education
// @access  Private
const addEducation = asyncHandler(async (req, res) => {
  try {
    const user = await User.findById(req.user.id);

    if (!user) {
      res.status(404);
      throw new Error("User not found");
    }

    const { universityName, degreeName, startDate, endDate, currentlyStudying } = req.body;

    // Validate required fields
    if (!universityName || !degreeName || !startDate) {
      res.status(400);
      throw new Error("Please provide all required fields");
    }

    // Add new education
    user.education.push({
      universityName,
      degreeName,
      startDate,
      endDate,
      currentlyStudying
    });

    const updatedUser = await user.save();
    res.status(200).json({
      success: true,
      data: updatedUser
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message
    });
  }
});

// @desc    Add experience
// @route   POST /api/profile/experience
// @access  Private
const addExperience = asyncHandler(async (req, res) => {
  try {
    const user = await User.findById(req.user.id);

    if (!user) {
      res.status(404);
      throw new Error("User not found");
    }

    const { companyName, position, startDate, endDate, currentlyWorking } = req.body;

    // Validate required fields
    if (!companyName || !position || !startDate) {
      res.status(400);
      throw new Error("Please provide all required fields");
    }

    // Add new experience
    user.experience.push({
      companyName,
      position,
      startDate,
      endDate,
      currentlyWorking
    });

    const updatedUser = await user.save();
    res.status(200).json({
      success: true,
      data: updatedUser
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message
    });
  }
});

// @desc    Delete education
// @route   DELETE /api/profile/education/:id
// @access  Private
const deleteEducation = asyncHandler(async (req, res) => {
  try {
    const user = await User.findById(req.user.id);

    if (!user) {
      res.status(404);
      throw new Error("User not found");
    }

    user.education = user.education.filter(
      edu => edu._id.toString() !== req.params.id
    );

    const updatedUser = await user.save();
    res.status(200).json({
      success: true,
      data: updatedUser
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message
    });
  }
});

// @desc    Delete experience
// @route   DELETE /api/profile/experience/:id
// @access  Private
const deleteExperience = asyncHandler(async (req, res) => {
  try {
    const user = await User.findById(req.user.id);

    if (!user) {
      res.status(404);
      throw new Error("User not found");
    }

    user.experience = user.experience.filter(
      exp => exp._id.toString() !== req.params.id
    );

    const updatedUser = await user.save();
    res.status(200).json({
      success: true,
      data: updatedUser
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message
    });
  }
});

module.exports = {
  getUserProfile,
  updateUserProfile,
  addEducation,
  addExperience,
  deleteEducation,
  deleteExperience
};
