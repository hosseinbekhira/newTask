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
  console.log("clked toggler");
  AllContentDisplayNone.classList.toggle("show-content");
};

// End Navbar
