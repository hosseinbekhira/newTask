// Start Navbar

// Start when you clicked on elements
let liItems = document.querySelectorAll(
  "nav .all-content .list-items .items-element .cont-link-and-img"
);
let arrowImg = document.querySelectorAll(
  "nav .all-content .list-items .items-element .cont-link-and-img img"
);
let allDropMenuLists = document.querySelectorAll(
  "nav .all-content .list-items .items-element .drop-menu-list"
);
let arrayLiItems = Array.from(liItems);
let arrayAllDropMenuLists = Array.from(allDropMenuLists);

arrayLiItems.forEach((element) => {
  element.addEventListener("click", (e) => {
    arrayAllDropMenuLists.forEach((item) => {
      if (item.classList.contains("show")) {
        item.classList.remove("show");
        console.log("yes");
      }
    });

    document.querySelector(e.currentTarget.dataset.item).classList.add("show");
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
