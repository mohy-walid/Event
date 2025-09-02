function loadComponent(id, file) {
  fetch(file)
    .then(res => res.text())
    .then(data => {
      document.getElementById(id).innerHTML = data;

      // بعد ما يخلص تحميل nav.html استدعي setActiveNavLink
      setActiveNavLink();
    })
    .catch(err => console.error("Error loading component:", err));
}

function setActiveNavLink() {
  const navLinks = document.querySelectorAll(".navbar-nav .nav-link");
  if (navLinks.length === 0) {
    console.warn("⚠️ No nav links found!");
    return;
  }

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

// مثال: تحميل nav.html جوه div#navbar
document.addEventListener("DOMContentLoaded", () => {
  loadComponent("navbar", "/Event/html/nav.html");
});



document.querySelectorAll(".visit-btn").forEach(function(btn){
  btn.addEventListener("click", function(){
    window.location.href = "html/details.html";
  });
});
