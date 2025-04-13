function result() {
    var patient = {};

    // Loop to create patient IDs
    for (var i = 1; i <= 1000; i++) {
        var id = "ML-" + i.toString().padStart(6, "0");
        patient[id] = {
            link: 'Results/' + id + '/'
        };
    }

    // Get input value and format
    var patientname = document.getElementById('patientname').value.trim(); // .trim() to remove any spaces
    var input = patientname.toUpperCase(); // Convert to uppercase for consistency
    var definition = patient[input];
    var output = document.getElementById("output");

    if (definition == undefined) {
        output.innerHTML = '<hr>There is no information about this patient. Please check your Patient ID.<hr>';
    } else {
        output.innerHTML =
            '<hr><a href="' + definition.link + 'report.pdf" download>Click here to download your result (PDF)</a>' +
            '<br><br><br>For the password of the file, kindly input your <strong>LASTNAME FIRSTNAME</strong> and your <strong>BIRTHDAY (mmddyyyy)</strong> ' +
            '<br><i>Example: DELACRUZJUAN01011990</i><hr>';
    }
}
