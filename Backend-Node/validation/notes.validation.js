import joi from "joi";

export const validateNotes = joi.object({
  subjectName: joi.string().required(),
  teacherName: joi.string().required(),
  year: joi.string().required(),
  fileUrl: joi.string(),
  isPremium: joi.boolean().default(false),
  status: joi.string().valid("draft", "approved").default("draft"),
  chapterName: joi.string(),
});

export const UpdatevalidateNotes = joi
  .object({
    subjectName: joi.string(),
    description: joi.string(),
    teacherName: joi.string(),
    year: joi.string(),
    type: joi.string(),
    isPremium: joi.boolean(),
    status: joi.string().valid("draft", "published", "archived", "approved"),
    difficulty: joi.string().valid("easy", "medium", "hard"),
  })
  .min(1);
