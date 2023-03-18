function result() {
	//Patient

	var patient= {

		A : {
			link: "https://drive.google.com/file/d/1-RvKSbjHXU7-81Z7nT9UvjV62YdUpgQZ/view?usp=share_link"
		}
	}


	var patientname = document.getElementById('patientname').value;
	var input = patientname.toUpperCase();
	var definition = patient[input];
	var output = document.getElementById("output");

	if (definition==undefined) {
		output.innerHTML='<hr>There is no information about this patient.<hr>';
	} else {
		output.innerHTML='<hr><a href="'+definition.link+'">Link is '+definition.link+'</a><hr>';
	};
};