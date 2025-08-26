function loadComponent(id, file) {
  fetch(file)
    .then(res => res.text())
    .then(data => {
      document.getElementById(id).innerHTML = data;
    });
}
document.querySelectorAll(".visit-btn").forEach(function(btn){
  btn.addEventListener("click", function(){
    window.location.href = "html/details.html";
  });
});
