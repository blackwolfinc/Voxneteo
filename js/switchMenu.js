const switchMenu = () => {
  const menuIcon = document.getElementById("menu-icon");
  const xIcon = document.getElementById("x-icon");
  const menuMobile = document.getElementById("menu-mobile");

  menuIcon.addEventListener("click", () => {
    menuMobile.style.transform = "translateX(0vw)";
  });

  xIcon.addEventListener("click", () => {
    menuMobile.style.transform = "translateX(-100vh)";
  });
};

switchMenu();
