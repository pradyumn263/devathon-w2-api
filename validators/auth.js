const { check } = require("express-validator");

exports.userRegisterValidator = [
	check("name").not().isEmpty().withMessage("Name is required"),

	check("email").isEmail().withMessage("Email is not valid"),

	check("password")
		.isLength({ min: 6 })
		.withMessage("Password must be at least 6 characters long"),

	check("categories")
		.isLength({ min: 6 })
		.withMessage("Pick at least 1 favourite category"),
];

exports.userLoginValidator = [
	check("email").isEmail().withMessage("Email is not valid"),
	check("password")
		.isLength({ min: 6 })
		.withMessage("Password must be at least 6 characters long"),
];

exports.userEmailValidator = [
	check("email").isEmail().withMessage("Email is not valid"),
];

exports.resetPasswordValidator = [
	check("newPassword")
		.isLength({ min: 6 })
		.withMessage("Password must be at least 6 characters long"),
	check("resetPasswordLink").not().isEmpty().withMessage("Token is Required"),
];

exports.userUpdateValidator = [
	check("name").not().isEmpty().withMessage("Name is required"),
];
