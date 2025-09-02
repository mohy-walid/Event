
function loadComponent(id, file) {
  fetch(file)
    .then(res => res.text())
    .then(data => {
      document.getElementById(id).innerHTML = data;
    });
}

document.addEventListener("DOMContentLoaded", function () {
  const navLinks = document.querySelectorAll(".navbar-nav .nav-link");
  let currentPath = window.location.pathname;

 
  currentPath = currentPath.substring(currentPath.lastIndexOf("/") + 1);

 
  if (currentPath === "" || currentPath === "/") {
    currentPath = "index.html";
  }

  navLinks.forEach(link => {
    let linkPath = link.getAttribute("href");

    
    linkPath = linkPath.substring(linkPath.lastIndexOf("/") + 1);

    if (linkPath === currentPath) {
      link.classList.add("active");
    } else {
      link.classList.remove("active");
    }
  });
});


document.querySelectorAll(".visit-btn").forEach(function(btn){
  btn.addEventListener("click", function(){
    window.location.href = "html/details.html";
  });
});
