const express = require("express");
const router = express.Router();
const {
  getUserProfile,
  updateUserProfile,
  addEducation,
  addExperience,
  deleteEducation,
  deleteExperience
} = require("../controllers/ProfileController");
const validateToken = require("../middlewares/validateTokenHandler");

router.get("/me", validateToken, getUserProfile);
router.put("/update", validateToken, updateUserProfile);

// Education routes
router.post("/education", validateToken, addEducation);
router.delete("/education/:id", validateToken, deleteEducation);

// Experience routes
router.post("/experience", validateToken, addExperience);
router.delete("/experience/:id", validateToken, deleteExperience);

module.exports = router;
