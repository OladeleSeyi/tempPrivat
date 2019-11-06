const Validator = require("validator");
const isEmpty = require("is-empty");

module.exports = function updateStateDataInput(data) {
	let errors = {};
	//  Convert empty field
	data.stateId = !isEmpty(data.stateId) ? data.stateId : "";

	data.proportionOfBudget = !isEmpty(data.proportionOfBudget)
		? data.proportionOfBudget
		: null;

	data.ictMinistry = !isEmpty(data.ictMinistry) ? data.ictMinistry : null;

	data.internetAccessRate = !isEmpty(data.internetAccessRate)
		? data.internetAccessRate
		: null;

	data.ictProjects = !isEmpty(data.ictProjects) ? data.ictProjects : null;

	data.skillTypeA = !isEmpty(data.skillTypeA) ? data.skillTypeA : null;

	data.stateWebsite = !isEmpty(data.stateWebsite) ? data.stateWebsite : null;

	data.officialMailUse = !isEmpty(data.officialMailUse)
		? data.officialMailUse
		: null;

	data.ictFund = !isEmpty(data.ictFund) ? data.ictFund : null;

	data.useOfIct = !isEmpty(data.useOfIct) ? data.useOfIct : null;

	data.genAbility = !isEmpty(data.genAbility) ? data.genAbility : null;

	data.genAbility = !isEmpty(data.genAbility) ? data.genAbility : null;

	data.digitalFiling = !isEmpty(data.digitalFiling) ? data.digitalFiling : null;

	data.intranetUse = !isEmpty(data.intranetUse) ? data.intranetUse : null;

	data.ehr = !isEmpty(data.ehr) ? data.ehr : null;
	data.ict4Learning = !isEmpty(data.ict4Learning) ? data.ict4Learning : null;

	data.ict4Judiciary = !isEmpty(data.ict4Judiciary) ? data.ict4Judiciary : null;

	data.techAbility = !isEmpty(data.techAbility) ? data.techAbility : null;

	data.ict4Employment = !isEmpty(data.ict4Employment)
		? data.ict4Employment
		: null;

	data.videoConference = !isEmpty(data.videoConference)
		? data.videoConference
		: null;

	//  Check required fields
	// if (Validator.isEmpty(data.stateId)) {
	// 	errors.stateId = " User Id is required";
	// }
	if (Validator.isEmpty(data.proportionOfBudget)) {
		errors.proportionOfBudget = "Fill in Required Fields";
	} else if (!Validator.isNumeric(data.proportionOfBudget)) {
		errors.proportionOfBudget = "Please fill in a number";
	}
	if (Validator.isEmpty(data.ictMinistry)) {
		errors.ictMinistry = "Fill in Required Fields";
	} else if (!Validator.isNumeric(data.ictMinistry)) {
		errors.ictMinistry = "Please fill in a number ";
	}

	if (Validator.isEmpty(data.internetAccessRate)) {
		errors.internetAccessRate = "Fill in Required Fields";
	} else if (!Validator.isNumeric(data.internetAccessRate)) {
		errors.internetAccessRate = "Please fill in a number ";
	}

	if (Validator.isEmpty(data.ictProjects)) {
		errors.ictProjects = "Fill in Required Fields";
	} else if (!Validator.isNumeric(data.ictProjects)) {
		errors.ictProjects = "Please fill in a number ";
	}

	if (Validator.isEmpty(data.skillTypeA)) {
		errors.skillTypeA = "Fill in Required Fields";
	} else if (!Validator.isNumeric(data.skillTypeA)) {
		errors.skillTypeA = "Please fill in a number ";
	}

	if (Validator.isEmpty(data.stateWebsite)) {
		errors.stateWebsite = "Fill in Required Fields";
	} else if (!Validator.isNumeric(data.stateWebsite)) {
		errors.stateWebsite = "Please fill in a number ";
	}
	if (Validator.isEmpty(data.officialMailUse)) {
		errors.officialMailUse = "Fill in Required Fields";
	} else if (!Validator.isNumeric(data.officialMailUse)) {
		errors.officialMailUse = "Please fill in a number ";
	}
	if (Validator.isEmpty(data.ictFund)) {
		errors.ictFund = "Fill in Required Fields";
	} else if (!Validator.isNumeric(data.ictFund)) {
		errors.ictFund = "Please fill in a number ";
	}
	if (Validator.isEmpty(data.useOfIct)) {
		errors.useOfIct = "Fill in Required Fields";
	} else if (!Validator.isNumeric(data.useOfIct)) {
		errors.useOfIct = "Please fill in a number ";
	}
	if (Validator.isEmpty(data.genAbility)) {
		errors.genAbility = "Fill in Required Fields";
	} else if (!Validator.isNumeric(data.genAbility)) {
		errors.genAbility = "Please fill in a number ";
	}
	if (Validator.isEmpty(data.digitalFiling)) {
		errors.digitalFiling = "Fill in Required Fields";
	} else if (!Validator.isNumeric(data.digitalFiling)) {
		errors.digitalFiling = "Please fill in a number ";
	}
	if (Validator.isEmpty(data.intranetUse)) {
		errors.intranetUse = "Fill in Required Fields";
	} else if (!Validator.isNumeric(data.intranetUse)) {
		errors.intranetUse = "Please fill in a number ";
	}
	if (Validator.isEmpty(data.ehr)) {
		errors.ehr = "Fill in Required Fields";
	} else if (!Validator.isNumeric(data.ehr)) {
		errors.ehr = "Please fill in a number ";
	}
	if (Validator.isEmpty(data.ict4Learning)) {
		errors.ict4Learning = "Fill in Required Fields";
	} else if (!Validator.isNumeric(data.ict4Learning)) {
		errors.ict4Learning = "Please fill in a number ";
	}
	if (Validator.isEmpty(data.ict4Judiciary)) {
		errors.ict4Judiciary = "Fill in Required Fields";
	} else if (!Validator.isNumeric(data.ict4Judiciary)) {
		errors.ict4Judiciary = "Please fill in a number ";
	}
	if (Validator.isEmpty(data.techAbility)) {
		errors.techAbility = "Fill in Required Fields";
	} else if (!Validator.isNumeric(data.techAbility)) {
		errors.techAbility = "Please fill in a number ";
	}
	if (Validator.isEmpty(data.ict4Employment)) {
		errors.ict4Employment = "Fill in Required Fields";
	} else if (!Validator.isNumeric(data.ict4Employment)) {
		errors.ict4Employment = "Please fill in a number ";
	}
	if (Validator.isEmpty(data.videoConference)) {
		errors.videoConference = "Fill in Required Fields";
	} else if (!Validator.isNumeric(data.videoConference)) {
		errors.videoConference = "Please fill in a number ";
	}

	return {
		errors,
		isValid: isEmpty(errors)
	};
};
