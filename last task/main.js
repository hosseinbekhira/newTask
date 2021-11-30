// Start Navbar

// Start when you clicked on elements
let liItems = document.querySelectorAll(
  "nav .all-content .list-items .items-element .cont-link-and-img"
);

let allDropMenuLists = document.querySelectorAll(
  "nav .all-content .list-items .items-element .drop-menu-list"
);
let arrayLiItems = Array.from(liItems);
let arrayAllDropMenuLists = Array.from(allDropMenuLists);

arrayLiItems.forEach((element) => {
  element.addEventListener("click", (e) => {
    //This case you only want to allow for the display of only one collapsed item at a time!

    // arrayLiItems.forEach((el) => {
    //   if (
    //     el.classList.contains("active") &&
    //     el.childNodes[3].classList.contains("active") &&
    //     el.childNodes[1].classList.contains("active")
    //   ) {
    //     document.querySelector(el.dataset.item).style.maxHeight = 0;
    //     el.classList.toggle("active");
    //     el.childNodes[3].classList.toggle("active");
    //     el.childNodes[1].classList.toggle("active");
    //   }
    // });

    // Start Standard Function Accordion
    e.currentTarget.childNodes[3].classList.toggle("active");
    e.currentTarget.childNodes[1].classList.toggle("active");

    e.currentTarget.classList.toggle("active");

    if (e.currentTarget.classList.contains("active")) {
      document.querySelector(e.currentTarget.dataset.item).style.maxHeight =
        document.querySelector(e.currentTarget.dataset.item).scrollHeight +
        "px";
    } else {
      document.querySelector(e.currentTarget.dataset.item).style.maxHeight = 0;
    }
  });
});

// Start when you clicked on toggler bar
let AllContentDisplayNone = document.querySelector("nav .all-content");
let btnTogglerBar = document.querySelector("nav .toggle-bar");

btnTogglerBar.onclick = () => {
  AllContentDisplayNone.classList.toggle("show-content");
};

// End Navbar

// ===========================================================================
// ===========================================================================

// Start Search Section:
let allTabs = document.querySelectorAll(".header-search .cont-tabs .tab");
let arrayAllTabs = Array.from(allTabs);

let allFormContent = document.querySelectorAll(
  ".section-search .body-search .form"
);
let arrayForms = Array.from(allFormContent);

arrayAllTabs.forEach((tab) => {
  tab.addEventListener("click", (e) => {
    arrayAllTabs.forEach((element) => {
      element.classList.remove("active");
    });

    e.currentTarget.classList.add("active");

    arrayForms.forEach((form) => {
      form.style.display = "none";
    });

    document.querySelector(e.currentTarget.dataset.form).style.display = "flex";
  });
});

// Start Clear Input Placeholder On Focus
let myInput1 = document.getElementById("sectorInput1"),
  myInput2 = document.getElementById("locationInput1"),
  valueAttr1 = myInput1.getAttribute("placeholder"),
  valueAttr2 = myInput2.getAttribute("placeholder");

let myInput3 = document.getElementById("sectorInput2"),
  myInput4 = document.getElementById("locationInput2"),
  valueAttr3 = myInput3.getAttribute("placeholder"),
  valueAttr4 = myInput4.getAttribute("placeholder");

const clearPlaceholder = (myInput, valueAttr) => {
  myInput.onfocus = () => {
    if (myInput.placeholder === valueAttr) {
      myInput.placeholder = "";
    }
  };
  myInput.onblur = () => {
    if (myInput.placeholder === "") {
      myInput.placeholder = valueAttr;
    }
  };
};

// Function Input 01:
clearPlaceholder(myInput1, valueAttr1);
// Function Input 02:
clearPlaceholder(myInput2, valueAttr2);
// Function Input 03:
clearPlaceholder(myInput3, valueAttr3);
// Function Input 04:
clearPlaceholder(myInput4, valueAttr4);

// End Search Section:

// ===========================================================================
// ===========================================================================

// Start Standard Slider Function:

let leftArrow = document.querySelector(
  ".featured-brokers-section .arrow-part .left-arrow"
);
let rightArrow = document.querySelector(
  ".featured-brokers-section .arrow-part .right-arrow"
);
let allElement = document.querySelectorAll(".cont-logos .logo-container");
let countElement = Array.from(allElement).length;
let idName = "lHtmlg";

// Start Block Code of Slider:
function right_mover(product, movePer, maxMove, l, leftArrow, rightArrow) {
  l = parseInt(l) + parseInt(movePer);
  if (product == 1) {
    l = 0;
  }
  for (let i of product) {
    if (l > maxMove) {
      l = l - movePer;
    }
    i.style.left = "-" + l + "%";
    i.setAttribute("data-id", l);
  }
  if (l == maxMove) {
    rightArrow.classList.add("hides");
  }
  if (l > 0) {
    leftArrow.classList.remove("hides");
  }
}

function left_mover(product, movePer, maxMove, l, leftArrow, rightArrow) {
  l = parseInt(l) - parseInt(movePer);
  if (product == 1) {
    l = 0;
  }
  for (let i of product) {
    if (l > maxMove) {
      l = l - movePer;
    }
    i.style.left = "-" + l + "%";
    i.setAttribute("data-id", l);
  }

  if (l < maxMove) {
    rightArrow.classList.remove("hides");
  }
  if (l == 0) {
    leftArrow.classList.add("hides");
  }
}

function move_slider(direction, id, count) {
  let rightArrow = document.querySelector(`.arrow-part .arrowright-${id}`);
  let leftArrow = document.querySelector(`.arrow-part .arrowleft-${id}`);
  let product = document.getElementsByClassName(`l-${id}`);

  // let product_page = count;
  let l = product[0].getAttribute("data-id");
  let movePer = 100;
  let maxMove = movePer * (count - 1);

  if (direction == 1) {
    right_mover(product, movePer, maxMove, l, leftArrow, rightArrow);
    // console.log("Right Clicked");
  }

  if (direction == 0) {
    left_mover(product, movePer, maxMove, l, leftArrow, rightArrow);
    // console.log("left Clicked");
  }
}

let touchstartX = 0;
let touchstartY = 0;
let touchendX = 0;
let touchendY = 0;
addEventListener(
  "touchstart",
  function (event) {
    if (event.changedTouches[0].target.id != "swipe") {
      return false;
    }
    touchstartX = event.changedTouches[0].screenX;
    touchstartY = event.changedTouches[0].screenY;
  },
  false
);

addEventListener(
  "touchend",
  function (event) {
    if (event.changedTouches[0].target.id != "swipe") {
      return false;
    }
    touchendX = event.changedTouches[0].screenX;
    touchendY = event.changedTouches[0].screenY;
    let id = event.changedTouches[0].target.getAttribute("data-id");
    // let count = event.changedTouches[0].target.getAttribute("data-count");

    handleGesture(id, countElement);
  },
  false
);

function handleGesture(id, count) {
  if (touchendX <= touchstartX) {
    move_slider(1, id, count);
    console.log("Swiped left");
  }

  if (touchendX >= touchstartX) {
    move_slider(0, id, count);
    console.log("Swiped right");
  }
}
// End Block Code of Slider:

// When you Click on the Arrow Button
leftArrow.onclick = () => {
  move_slider(0, "lHtmlg", countElement);
};
rightArrow.onclick = () => {
  move_slider(1, "lHtmlg", countElement);
};

// End Standard Slider Function:

// Start Most Popular Section

let allMostPopularTabs = document.querySelectorAll(
  ".cont-box-select .select-part .select-element"
);
let arrayMostPopularTabs = Array.from(allMostPopularTabs);
let mostPopularContent = document.querySelectorAll(
  ".container-of-all-tabs .card-selector"
);
let arrayMostPopularContent = Array.from(mostPopularContent);
console.log(arrayMostPopularContent);

arrayMostPopularTabs.forEach((tab) => {
  tab.addEventListener("click", (e) => {
    arrayMostPopularTabs.forEach((element) => {
      element.classList.remove("active");
    });
    e.currentTarget.classList.add("active");

    //==================================
    arrayMostPopularContent.forEach((content) => {
      content.style.display = "none";
    });

    // console.log(document.querySelector(e.currentTarget.dataset.content));

    document.querySelector(e.currentTarget.dataset.content).style.display =
      "block";
    //==================================
  });
});

// Start <see more less> Function:
let idMoreSectors = "seeMore1";
let idSectors = "listSectros";

let idMoreLocations = "seeMore2";
let idLocations = "listLocations";

const seeMoreLessFunction = (idSelector, idSectors) => {
  let allLiSectors = document.getElementById(idSectors).children;
  let arrayLiSectors = Array.from(allLiSectors);
  document.getElementById(idSelector).addEventListener("click", (e) => {
    // change button:
    e.currentTarget.classList.toggle("active");
    e.currentTarget.childNodes[3].classList.toggle("active");
    if (e.currentTarget.classList.contains("active")) {
      e.currentTarget.childNodes[1].innerHTML = "See Less";
    } else {
      e.currentTarget.childNodes[1].innerHTML = "See More";
    }
    arrayLiSectors.forEach((li) => {
      li.classList.toggle("show");
    });
  });
};

// Function for Sectors
seeMoreLessFunction(idMoreSectors, idSectors);

// Function for Location
seeMoreLessFunction(idMoreLocations, idLocations);

// See Less Sectors
// End Most Popular Section
