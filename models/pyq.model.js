import mongoose from "mongoose";

const PYQSchem = new mongoose.Schema(
  {
    questionNumber: {
      type: Number,
      required: true,
    },
    subjectName: {
      type: String,
      required: true,
    },
    question: {
      type: String,
      required: true,
    },
    answer: {
      type: String,
      required: true,
    },
    image: {
      type: String,
    },
    tag: {
      type: String,
      required: true,
    },
    years: {
      type: Array,
      required: true,
    },

    // SaaS / CMS Features
    isPremium: {
      type: Boolean,
      default: false,
    },
    status: {
      type: String,
      enum: ["draft", "published", "archived"],
      default: "draft",
    },
    difficulty: {
      type: String,
      enum: ["easy", "medium", "hard"],
      default: "medium",
    },
    views: {
      type: Number,
      default: 0,
    },
    
    // Audit
    createdBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
    updatedBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
    publishedAt: {
      type: Date,
    },
    isArchived: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true }
);

export const PYQ = mongoose.model("PYQ", PYQSchem);
