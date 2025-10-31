function result() {
  var patient = {};

  for (var i = 1; i <= 1000; i++) {
    var id = "ML-" + i.toString().padStart(6, "0");
    patient[id] = {
      link: "Results/" + id + ".pdf",
    };
  }

  var patientname = document.getElementById("patientname").value;
  var input = patientname.trim().toUpperCase();
  var definition = patient[input];
  var output = document.getElementById("output");

  if (!definition) {
    output.innerHTML = "<hr>❌ There is no information about this patient.<hr>";
  } else {
    output.innerHTML =
      '<hr><a href="' +
      definition.link +
      '" download>Click here to download your result (PDF)</a>' +
      "<br><br><br>For the password of the file, kindly input your <strong>LASTNAMEFIRSTNAME</strong> and your <strong>BIRTHDAY (mmddyyyy)</strong> " +
      "<br><i>Example: DELACRUZJUAN01011990</i><hr>";
  }
}
