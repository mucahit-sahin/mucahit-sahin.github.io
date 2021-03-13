//panel open - close
const panels = document.querySelectorAll(".panel");

panels.forEach((panel) => {
  panel.addEventListener("click", () => {
    panelClose();
    panel.classList.add("active");
  });
});

function panelClose() {
  panels.forEach((panel) => {
    panel.classList.remove("active");
  });
}
// list projects
const projects = document.querySelector(".projects ul");
const projectsData = [
  {
    img: "./img/twitter.png",
    name: "Twitter Clone - React",
    link: "https://twitter-web-clone.netlify.app/",
  },
  {
    img:
      "https://github.com/mucahit-sahin/netflix-clone-react/raw/master/img/netflix-clone.gif",
    name: "Netflix Home Page - React",
    link: "https://react-netflix-clone-9dfa3.web.app/",
  },
  {
    img:
      "https://github.com/mucahit-sahin/trendyolNavbar-vanillaJS/raw/master/img/image.png",
    name: "Trendyol Navbar",
    link: "https://trendyolnavbar.netlify.app/",
  },
  {
    img:
      "https://github.com/mucahit-sahin/imagegallery-vanillajs/raw/master/img/image2.png",
    name: "Image Gallery Vanilla JS",
    link: "https://imagegallery1.netlify.app/",
  },
  {
    img:
      "https://github.com/mucahit-sahin/clock-vanillajs/raw/master/img/image.png",
    name: "Wall Clock Vanilla JS",
    link: "https://wallclock1.netlify.app/",
  },
];

var list = document.createElement("ul");
projectsData.map((project) => {
  var item = document.createElement("li");
  var link = document.createElement("a");
  var name = document.createTextNode(project.name);
  link.href = project.link;
  link.appendChild(name);
  item.appendChild(link);
  list.appendChild(item);
});

projects.appendChild(list);

//home write text animation

var homespan = document.querySelector(".biospan");
var hometext =
  "Merhabalar ben Mücahit. Siteme Hoşgeldin. Lisede tanıştığım yazılım alanıma olan tutkum Bilgisayar Mühendisliğini kazanmamla devam etti. Şuan da son sınıftayım. Mobil ve Web Programlama ile ilgilenmekte ve projeler geliştirmekteyim.";
var homeindex = 0;
var currentText = [];

function writeHomespan() {
  console.log(homeindex);
  currentText.push(hometext[homeindex]);
  homespan.innerHTML = currentText.join("");
  homeindex++;
  if (hometext.length == homeindex) return;
  setTimeout(writeHomespan, 50);
}
writeHomespan();
