
function loadComponent(id, file) {
  fetch(file)
    .then(res => res.text())
    .then(data => {
      document.getElementById(id).innerHTML = data;

  
      setActiveNavLink();
    });
}

function setActiveNavLink() {
  const navLinks = document.querySelectorAll('.navbar-nav .nav-link');
  let currentPath = window.location.pathname;

  if (currentPath.startsWith("/Event/")) {
    currentPath = currentPath.replace("/Event/", "");
  } else {
    currentPath = currentPath.replace("/", "");
  }

  navLinks.forEach(link => {
    let linkPath = link.getAttribute('href');

    linkPath = linkPath.split("/").pop();

    if (linkPath === currentPath) {
      link.classList.add("active");
    } else {
      link.classList.remove("active");
    }
  });
}

document.querySelectorAll(".visit-btn").forEach(function(btn){
  btn.addEventListener("click", function(){
    window.location.href = "html/details.html";
  });
});
