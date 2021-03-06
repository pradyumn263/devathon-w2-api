const { validationResult } = require("express-validator");

exports.runValidation = (req, res, next) => {
	const errors = validationResult(req);
	// console.log("Im in runValidation", errors);
	if (!errors.isEmpty()) {
		//422 unprocessable entity
		return res.status(422).json({
			error: errors.array()[0].msg,
		});
	}

	next();
};
