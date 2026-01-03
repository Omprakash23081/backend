import joi from "joi";

export const validateNotes = joi
  .object({
    subjectName: joi.string().required(),
    description: joi.string().required(),
    teacherName: joi.string().required(),
    year: joi.string().required(),
    fileUrl: joi.string(),
    type: joi.string(),
    isPremium: joi.boolean().default(false),
    status: joi.string().valid("draft", "published", "archived").default("draft"),
    difficulty: joi.string().valid("easy", "medium", "hard").default("medium"),
  })
  .min(4);

export const UpdatevalidateNotes = joi
  .object({
    subjectName: joi.string(),
    description: joi.string(),
    teacherName: joi.string(),
    year: joi.string(),
    type: joi.string(),
    isPremium: joi.boolean(),
    status: joi.string().valid("draft", "published", "archived"),
    difficulty: joi.string().valid("easy", "medium", "hard"),
  })
  .min(1);
