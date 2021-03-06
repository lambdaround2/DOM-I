const siteContent = {
  nav: {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  cta: {
    h1: "DOM Is Awesome",
    button: "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4": "Features",
    "features-content":
      "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4": "About",
    "about-content":
      "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4": "Services",
    "services-content":
      "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4": "Product",
    "product-content":
      "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4": "Vision",
    "vision-content":
      "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis."
  },
  contact: {
    "contact-h4": "Contact",
    address: "123 Way 456 Street Somewhere, USA",
    phone: "1 (888) 888-8888",
    email: "sales@greatidea.io"
  },
  footer: {
    copyright: "Copyright Great Idea! 2018"
  }
};

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute("src", siteContent["nav"]["img-src"]);

let anchorTags = document.querySelectorAll("a");
anchorTags.forEach((aTag, index) => {
  return (anchorTags[index].textContent =
    siteContent["nav"][`nav-item-${index + 1}`]);
});

anchorTags.forEach(aTag => (aTag.style.color = "green"));

let navBar = document.querySelector("nav");
let newFirstATag = document.createElement("a");
let newLastATag = document.createElement("a");

newFirstATag.textContent = "Buy things!";
newLastATag.textContent = "Delete Everything!";

navBar.prepend(newFirstATag);
navBar.append(newLastATag);

let mainHeading = document.querySelector("h1");
mainHeading.textContent = siteContent["cta"]["h1"];

let button = document.querySelector("button");
button.textContent = siteContent["cta"]["button"];

let headerImg = document.getElementById("cta-img");
headerImg.setAttribute("src", siteContent["cta"]["img-src"]);

let subtitles = document.querySelectorAll("h4");
subtitles[0].textContent = siteContent["main-content"]["features-h4"];
subtitles[1].textContent = siteContent["main-content"]["about-h4"];
subtitles[2].textContent = siteContent["main-content"]["services-h4"];
subtitles[3].textContent = siteContent["main-content"]["product-h4"];
subtitles[4].textContent = siteContent["main-content"]["vision-h4"];
subtitles[5].textContent = siteContent["contact"]["contact-h4"];

let subtext = document.querySelectorAll("p");
subtext[0].textContent = siteContent["main-content"]["features-content"];
subtext[1].textContent = siteContent["main-content"]["about-content"];
subtext[2].textContent = siteContent["main-content"]["services-content"];
subtext[3].textContent = siteContent["main-content"]["product-content"];
subtext[4].textContent = siteContent["main-content"]["vision-content"];
subtext[5].textContent = siteContent["contact"]["address"];
subtext[6].textContent = siteContent["contact"]["phone"];
subtext[7].textContent = siteContent["contact"]["email"];
subtext[8].textContent = siteContent["footer"]["copyright"];

let mainImg = document.getElementById("middle-img");
mainImg.setAttribute("src", siteContent["main-content"]["middle-img-src"]);
