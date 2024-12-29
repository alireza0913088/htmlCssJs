const $ = (id) => document.getElementById(id);
const GetClasses = (c) => document.getElementsByClassName(c);
const backCoverBlur = $("backCoverBlur");
const menuBtnOpen = $("menuBtnOpen");
const menuBtnClose = $("menuBtnClose");
const sideBarMobile = $("sideBarMobile");

backCoverBlur.onclick = () => {
  backCoverBlur.style.display = "none";
  sideBarMobile.classList.remove("openedMenu");
  sideBarMobile.classList.add("closedMenu");
};
menuBtnOpen.onclick = () => {
  sideBarMobile.classList.add("openedMenu");
  sideBarMobile.classList.remove("closedMenu");
  backCoverBlur.style.display = "block";
};
menuBtnClose.onclick = () => {
  sideBarMobile.classList.remove("openedMenu");
  sideBarMobile.classList.add("closedMenu");
  backCoverBlur.style.display = "none";
};
const lies = $("ulMobile").getElementsByTagName("a");
console.log(lies);
// can use forEach
for (let i = 0; i < lies.length; i++) {
  lies[i].onclick = () => {
    sideBarMobile.classList.remove("openedMenu");
    sideBarMobile.classList.add("closedMenu");
    backCoverBlur.style.display = "none";
  };
}
// First value--------
$("sliderTextBox").innerHTML =$("slider").firstElementChild.querySelector("p").firstChild.nodeValue ;
// send value when run (event)-----------------
$("slider").addEventListener("transitionend", () => {
  const value = $("slider")
    .querySelector(".swiper-slide-active")
    .querySelector("p").firstChild.nodeValue;
  $("sliderTextBox").innerHTML = value;
});
