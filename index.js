let profileA = document.getElementById("pro");
let aboutA = document.getElementById("abo");
let experienceA = document.getElementById("exp");
let projectA = document.getElementById("proj");
let contactA = document.getElementById("con");
let contactbtn = document.getElementById("contact-btn");

let profile = document.getElementById("profile");
let about = document.getElementById("about");
let experience = document.getElementById("experience");
let project = document.getElementById("projects");
let contact = document.getElementById("contact");

profileA.addEventListener("click", function (event) {
  event.preventDefault();
  let name = document.querySelector("#logo");
  name.innerText = "Porfolio";
  profileA.classList.add("hover");
  aboutA.classList.remove("hover");
  experienceA.classList.remove("hover");
  projectA.classList.remove("hover");
  contactA.classList.remove("hover");

  about.classList.add("myabout");
  profile.classList.remove("myprofile");
  experience.classList.add("myexperience");
  project.classList.add("myprojects");
  contact.classList.add("mycontact");
});

aboutA.addEventListener("click", function (event) {
  event.preventDefault();
  let name = document.querySelector("#logo");
  name.innerText = "Jatin";
  profileA.classList.remove("hover");
  aboutA.classList.add("hover");
  experienceA.classList.remove("hover");
  projectA.classList.remove("hover");
  contactA.classList.remove("hover");

  about.classList.remove("myabout");
  profile.classList.add("myprofile");
  experience.classList.add("myexperience");
  project.classList.add("myprojects");
  contact.classList.add("mycontact");
});

experienceA.addEventListener("click", function (event) {
  event.preventDefault();
  let name = document.querySelector("#logo");
  name.innerText = "Jatin";
  profileA.classList.remove("hover");
  aboutA.classList.remove("hover");
  experienceA.classList.add("hover");
  projectA.classList.remove("hover");
  contactA.classList.remove("hover");

  experience.classList.remove("myexperience");
  about.classList.add("myabout");
  profile.classList.add("myprofile");
  project.classList.add("myprojects");
  contact.classList.add("mycontact");
});

projectA.addEventListener("click", function (event) {
  event.preventDefault();
  let name = document.querySelector("#logo");
  name.innerText = "Jatin";
  profileA.classList.remove("hover");
  aboutA.classList.remove("hover");
  experienceA.classList.remove("hover");
  projectA.classList.add("hover");
  contactA.classList.remove("hover");

  project.classList.remove("myprojects");
  experience.classList.add("myexperience");
  about.classList.add("myabout");
  profile.classList.add("myprofile");
  contact.classList.add("mycontact");
  alert("Hover on the image...");
});

contactA.addEventListener("click", function (event) {
  event.preventDefault();
  let name = document.querySelector("#logo");
  name.innerText = "Jatin";
  profileA.classList.remove("hover");
  aboutA.classList.remove("hover");
  experienceA.classList.remove("hover");
  projectA.classList.remove("hover");
  contactA.classList.add("hover");

  project.classList.add("myprojects");
  experience.classList.add("myexperience");
  about.classList.add("myabout");
  profile.classList.add("myprofile");
  contact.classList.remove("mycontact");
});

contactbtn.addEventListener("click", function (event) {
  event.preventDefault();
  project.classList.add("myprojects");
  experience.classList.add("myexperience");
  about.classList.add("myabout");
  profile.classList.add("myprofile");
  contact.classList.remove("mycontact");
});
