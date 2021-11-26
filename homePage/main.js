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

// End Standard Slider Function:
