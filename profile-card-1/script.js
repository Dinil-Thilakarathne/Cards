const icons = document.querySelectorAll(".icon-group");
const iconsTxt = document.querySelectorAll(".icon-txt");
const shareBtn = document.getElementById("share-btn");
const iconGroup = document.querySelectorAll(".icon-group");
const iconBg = document.querySelectorAll(".icon-bg");


icons.forEach((icon, index) => {
    icon.addEventListener("mouseenter", function() {
      iconsTxt[index].classList.remove("hidden");
      iconsTxt[index].classList.add("show");
      iconGroup[index].style.color= "#fff";
      iconBg[index].style.clipPath = "circle(150% at 0 50%)";
      iconBg[index].style.transition = "all 0.5s ease-in-out";
    });
    
    icon.addEventListener("mouseleave", function() {
      iconsTxt[index].classList.remove("show");
      iconsTxt[index].classList.add("hidden");
      iconGroup[index].style.color= "var(--btnTxtColor)";
      iconBg[index].style.clipPath = "circle(50% at -100% 50%)";
    });
});
  




