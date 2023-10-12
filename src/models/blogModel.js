"use strict";
/* -------------------------------------------------------
    EXPRESSJS - BLOG Project with Mongoose
------------------------------------------------------- */

const mongoose = require("mongoose");

// const nameSchema = new mongoose.Schema(
//   {
//     //_id: AUTO CREATED
//     fieldName: {
//       type: String,
//       default: null,
//       trim: true, // trim(data)
//       select: true, //Show/UnShow
//       index: true,
//       unique: false,
//       required: [true, "Error-Message"],
//       enum: [[0, 1, 2, 3], "Error-Message"],
//       validate: [
//         function (data) {
//           return true;
//         },
//         "Error-Message",
//       ],
//       get: function (data) {
//         return true;
//       },
//       set: function (data) {
//         return true;
//       },
//     },
//   },
//   {
//     collection: "collectionName",
//     timestamps: true, //Create and Manage 'createdAt' and 'updatedAt'
//   }
// );

/*------------------------------------------------------------*/

const blogPostSchema = new mongoose.Schema(
  {
    // _id
    title: {
      type: String,
      trim: true,
      require: true,
    },

    content: {
      type: String,
      trim: true,
      require: true,
    },

    published: {
      type: Boolean,
      default: true,
    },

    // createdAt
    // updatedAt
  },
  {
    collection: "blogPosts",
    timestamps: true,
  }
);

// const BlogPostModel = mongoose.model("blogPost", blogPostSchema);

module.exports = {
  // BlogCategory:
  BlogPost: mongoose.model("BlogPost", blogPostSchema),
};
