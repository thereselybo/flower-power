const burger = document.querySelector(".burger");
const nav = document.querySelector("#mainnav");

burger.addEventListener("click", function () {
    if(nav.style.display === "none") {
        nav.style.display = "block";
    } else {
        nav.style.display = "none";
    }
}
);