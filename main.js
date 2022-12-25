var myForm = document.getElementById("myForm");
var result = document.getElementById("result");
function submitForm(event) {
  event.preventDefault();
  myForm.submit();
  result.innerHTML = "<b>The button is pressed and form is submitted.</b>";
}
