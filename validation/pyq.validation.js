import joi from "joi";

export const validatePYQ = joi.object({
  questionNumber: joi.number().required(),
  subjectName: joi.string().required(),
  question: joi.string().required(),
  tag: joi.string().allow('', null), // Changed to allow optional tag
  years: joi.array().items(joi.string()).required(),
  answer: joi.string().required(),
  isPremium: joi.boolean().default(false),
  status: joi.string().valid("draft", "published", "archived").default("draft"),
  difficulty: joi.string().valid("easy", "medium", "hard").default("medium"),
});

export const validatePYQUpdate = joi.object({
  questionNumber: joi.number(),
  subjectName: joi.string(),
  question: joi.string(),
  tag: joi.string().allow('', null),
  years: joi.array().items(joi.string()),
  answer: joi.string(),
  isPremium: joi.boolean(),
  status: joi.string().valid("draft", "published", "archived"),
  difficulty: joi.string().valid("easy", "medium", "hard"),
});
