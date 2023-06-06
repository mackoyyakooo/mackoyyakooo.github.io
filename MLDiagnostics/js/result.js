function result() {
    var patient = {};

    for (var i = 1; i <= 1000; i++) {
        var id = "ML-" + i.toString().padStart(6, "0");
        patient[id] = {
            link: 'Results/' + id + '.pdf'
        };
    }

    var patientname = document.getElementById('patientname').value;
    var input = patientname.toUpperCase();
    var definition = patient[input];
    var output = document.getElementById("output");

    if (definition == undefined) {
        output.innerHTML = '<hr>There is no information about this patient.<hr>';
    } else {
        output.innerHTML = '<hr><a href="' + definition.link + '">Click here to view result</a><br><br><br>For the password of the file, kindly input your LASTNAME FIRSTNAME and your BIRTHDAY (mmddyyy) Ex. DELACRUZJUAN01011990. Thank you.<hr>'
    };
}