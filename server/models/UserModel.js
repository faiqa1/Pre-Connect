const mongoose = require("mongoose");

const userSchema = mongoose.Schema(
  {
    username: {
      type: String,
      required: [true, "Please enter username"],
    },
    email: {
      type: String,
      required: [true, "Please enter email address"],
      unique: [true, "Email address already taken"],
    },
    password: {
      type: String,
      required: [true, "Please enter  password"],
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
        required: [true, "Please enter university name"] 
      },
      degreeName: { 
        type: String, 
        required: [true, "Please enter degree name"] 
      },
      startDate: { 
        type: Date, 
        required: [true, "Please enter start date"] 
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
        required: [true, "Please enter company name"] 
      },
      position: { 
        type: String, 
        required: [true, "Please enter position"] 
      },
      startDate: { 
        type: Date, 
        required: [true, "Please enter start date"] 
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
