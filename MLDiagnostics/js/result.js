function result() {
    // Patient data
    var patient = {
        "PAMUGASMARKALFRED0703": {
            link: 'Results/PAMUGAS, MARK ALFRED/'
        },
        "DELACRUZJUAN01012001": {
            link: 'Results/Pamugas, Mark Alfred.pdf'
        },
        "ML-000001": {
            link: 'Results/Pamugas, Mark Alfred.pdf'
        },
        "A": {
            link: 'Results/PAMUGAS, MARK ALFRED.rar'
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
