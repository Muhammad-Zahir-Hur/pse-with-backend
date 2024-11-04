import express from "express";

const router = express.Router();







const services = {
	"Power-System-Planning": [
		"Power System Planning",
		"We offer a complete range of planning services to ensure the reliability, stability, and cost-efficiency of your power systems to help you plan for future expansions and upgrades.",
		[
			"Load Flow & Contingency Analysis",
			"Short Circuit Analysis",
			"Transient Stability Analysis",
			"Small Signal Stability Analysis",
			"Harmonic Analysis and Power Quality Studies",
		],
	],
	"Grid-Interconnection": [
		"Grid Interconnection",
		"We facilitate the smooth interconnection of renewable energy sources and other generation assets with the grid. From grid impact analysis to compliance with regional grid codes, our team ensures that your projects are approved and integrated seamlessly.",
		[
			"System Impact Studies",
			"Site Specific Model Tuning",
			"Model Quality and Compliance Testing",
			"Plant Control Interaction Studies (SSTI & SSCI)",
		],
	],
	"Protection-and-Control": [
		"Protection and Control",
		"Robust protection and control solutions designed to safeguard your electrical assets and ensure the reliable operation of your power systems. Our specialized services encompass the full spectrum of protection and control engineering, from system design to relay settings, ensuring your power systems operate securely under normal and fault conditions.",
		[
			"Relay Protection Settings & Coordination",
			"Protection Scheme Design",
			"Arc Flash Analysis",
		],
	],
	"Operational-Studies": [
		"Operational Studies",
		"At Power System Experts, we provide comprehensive operational studies that ensure the optimal performance and stability of your power systems under real-world operating conditions. Our operational studies are designed to enhance system reliability, improve efficiency, and prevent operational issues, offering valuable insights into system behavior during normal and emergency conditions.",
		[
			"Interface Maximum Transfer Limits",
			"AC DC Parallel Network Operation Studies",
			"Constraint Analysis and Remedial Actions",
			"Special Protection Schemes",
		],
	],
	"Capacity-Building-and-Training": [
		"Capacity Building and Training",
		"At Power System Experts, we are committed to advancing the skills and expertise of power system engineers. Through our targeted capacity-building programs, we offer hands-on training and advanced workshops designed to enhance technical knowledge in critical areas of power system engineering.",
		[
			"Power System Modeling (RMS and EMT Domains)",
			"Advanced PSSE and PSCAD Trainings",
			"Transmission Planning",
		],
	],

	"Substation-Design": [
		"Substation Design",
		"We facilitate the smooth interconnection of renewable energy sources and other generation assets with the grid. From grid impact analysis to compliance with regional grid codes, our team ensures that your projects are approved and integrated seamlessly.",
		[
			" Insulation Coordination (ToV, SoV, FTO, VFTO)",
			"Switching & lightning Protection Studies",
			"Earth Grid Analysis",
			"Line Energization Studies",
		],
	],
};

router.get("/:name", (req, res) => {
	const availableServices = [
		"Capacity-Building-and-Training",
		"Operational-Studies",
		"Protection-and-Control",
		"Substation-Design",
		"Grid-Interconnection",
		"Power-System-Planning",
	];
	const serviceNameSent = req.params.name;

	let serviceToSend = "";
	for (const service_name in services) {
		if (service_name == serviceNameSent) {
			serviceToSend = services[service_name];
			break;
		}
	}

	if (availableServices.indexOf(serviceNameSent) != -1) {
		return res.render("pages/services", { serviceToSend });
	}
	return res.redirect("/");
});

export default router;
