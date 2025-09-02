function loadComponent(id, file) {
  fetch(file)
    .then(res => res.text())
    .then(data => {
      document.getElementById(id).innerHTML = data;

      // استدعي تحديد اللينك النشط بعد تحميل النافبار
      setActiveNavLink();
    });
}

function setActiveNavLink() {
  const navLinks = document.querySelectorAll(".navbar-nav .nav-link");
  let currentPath = window.location.pathname;

  // هات آخر جزء من الرابط (اسم الملف)
  currentPath = currentPath.substring(currentPath.lastIndexOf("/") + 1);

  // لو الصفحة الرئيسية
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
}



document.querySelectorAll(".visit-btn").forEach(function(btn){
  btn.addEventListener("click", function(){
    window.location.href = "html/details.html";
  });
});
