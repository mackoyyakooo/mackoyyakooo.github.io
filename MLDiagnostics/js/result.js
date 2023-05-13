function result() {
    // Patient data
    var patient = {
        "ML-000001": {
            link: 'Results/PAMUGAS, MARK ALFRED.zip'
        },
        "A": {
            link: 'Results/PAMUGAS, MARK ALFRED.zip'
        },
        "B": {
            link: 'Results/PAMUGAS, MARK ALFRED.zip'
        },
        "C": {
            link: 'Results/PAMUGAS, MARK ALFRED.zip'
        },
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
};
