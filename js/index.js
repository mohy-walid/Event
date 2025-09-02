
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
  const currentPath = window.location.pathname.split('/').pop();

  navLinks.forEach(link => {
    const linkPath = link.getAttribute('href').split('/').pop();
    if (linkPath === currentPath) {
      link.classList.add('active');
    } else {
      link.classList.remove('active');
    }
  });
}


loadComponent("navbar", "../html/nav.html");

document.querySelectorAll(".visit-btn").forEach(function(btn){
  btn.addEventListener("click", function(){
    window.location.href = "html/details.html";
  });
});
