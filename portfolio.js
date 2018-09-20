 document.getElementById("checkbtn").addEventListener("over", overButton);
document.getElementById("checkbtn").addEventListener("over", btnRise);

function overButton() {
  var picture = document.getElementById('white'); 
  picture.style.filter='blur(10px)';
  picture.style.transitionDuration='0.4s';

}
function btnRise() {
  var exceptBtn =
  document.getElementById('pageElements');
  exceptBtn.style.color='red';
}
function resetBlur() {
    var picture = document.getElementById('white'); 
    picture.style.filter='blur(1px)';
    picture.style.transitionDuration='0.4s';
}
