const mongoose = require("mongoose");

const userSchema = mongoose.Schema(
  {
    username: {
      type: String,
      required: [true, "Please enter your username"],
    },
    email: {
      type: String,
      required: [true, "Please enter your email address"],
      unique: [true, "Email already exist"],
    },
    password: {
      type: String,
      required: [true, "Please enter your password"],
    },
    headline: {
      type: String,
      default: "",
    },

    profilePic: {
      type: String,
      default: "",
    },

    university: {
      type: String,
      default: "",
    },

    company: {
      type: String,
      default: "",
    },

    education: [{
      universityName: { 
        type: String, 
        required: [true, "Please enter your university name"] 
      },
      degreeName: { 
        type: String, 
        required: [true, "Please enter your degree name"] 
      },
      startDate: { 
        type: Date, 
        required: [true, "Please enter your start date"] 
      },
      endDate: { 
        type: Date 
      },
      currentlyStudying: { 
        type: Boolean, 
        default: false 
      }
    }],

    experience: [{
      companyName: { 
        type: String, 
        required: [true, "Please enter your company name"] 
      },
      position: { 
        type: String, 
        required: [true, "Please enter your position"] 
      },
      startDate: { 
        type: Date, 
        required: [true, "Please enter your start date"] 
      },
      endDate: { 
        type: Date 
      },
      currentlyWorking: { 
        type: Boolean, 
        default: false 
      }
    }]
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("User", userSchema);
