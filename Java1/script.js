function buttonPushed() {
  var getName = document.querySelector('#inputName');
  var firstname = getName.value;

  var getName2 = document.querySelector('#inputName2');
  var lastname = getName2.value;

  alert("Hello " + firstname + " " + lastname);
  document.getElementById("demo").innerHTML = "Welcome " + firstname + " " + lastname + "<br>";
  document.getElementById("demo").innerHTML += firstname + ", " + " We are so happy you arrived.";
}
