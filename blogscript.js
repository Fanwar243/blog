//NAVBAR RESPONSIVE DESIGN

function openNav() {
    /*const x = window.matchMedia("screen and (max-device-width: 900px)")
    if (x.matches) {
        document.getElementById("nav").style.width = "100%";
    }*/
    document.getElementById("nav").style.width = "100%";
    document.getElementById("openbtn").style.display = "None";
}

//Collapses navbar and shows navbar expand button
function closeNav() {
    document.getElementById("nav").style.width = "0";
    document.getElementById("openbtn").style.display = "Block";
}

window.onscroll = function() {stickynav()};

const navbar = document.getElementById("nav");
const sticky = navbar.offsetTop;

function stickynav() {
    if (window.pageYOffset >= sticky) {
        navbar.classList.add("sticky");
    } else {
        navbar.classList.remove("sticky");
    }
}

//EXPAND AND COLLAPSE ARTICLE TEXT
function expand() {
    const dots = document.getElementById("dots");
    const moreText = document.getElementById("more");

    dots.style.display = "none";
    moreText.style.display = "inline";
}

function collapse() {
    const dots = document.getElementById("dots");
    const moreText = document.getElementById("more");
    moreText.style.display = "none";
    dots.style.display = "inline";
}

//UPDATE BOOK LIST WITH NEW ITEM

const update = () => {
    const newBook = document.createElement("li");
    const bookInfo = `${document.getElementById("bookTitle").value} by ${document.getElementById("bookAuthor").value}`;

    newBook.appendChild(document.createTextNode(bookInfo));
    document.getElementById("bookList").appendChild(newBook);
    alert(`Updated with: ${document.getElementById("bookTitle").value} by ${document.getElementById("bookAuthor").value}`);
}

//DARK MODE

let inDarkMode = false;

function darkmode() {
    if (!inDarkMode) {
        inDarkMode = true;

        document.getElementById("darkmode").innerHTML = "🌣";
        document.getElementsByTagName("body")[0].style.backgroundColor = "#121212";
        document.getElementsByTagName("body")[0].style.color = "white";
        headings = Array.from(document.getElementsByTagName("h2"));
        headings.forEach((element) => {
            element.style.opacity = "70%";
        });
        text = Array.from(document.getElementsByTagName("p"));
        text.forEach((element) => {
            element.style.opacity = "50%";
        });
        lists = Array.from(document.getElementsByTagName("ul"));
        lists.forEach((element) => {
            element.style.opacity = "50%";
        })
        document.getElementById("links").style.backgroundColor = "#303030"
        document.getElementById("reading").style.backgroundColor = "#424242"
        document.getElementsByTagName("footer")[0].style.backgroundColor = "#303030";
        document.getElementsByTagName("footer")[0].style.color = "white";
    } else {
        inDarkMode = false;

        document.getElementById("darkmode").innerHTML = "☾";
        document.getElementsByTagName("body")[0].style.backgroundColor = "#F4EBD0";
        document.getElementsByTagName("body")[0].style.color = "#122620";
        headings.forEach((heading) => {
            heading.style.opacity = "100%";
        });
        text.forEach((paragraph) => {
            paragraph.style.opacity = "100%";
        });
        lists.forEach((list) => {
            list.style.opacity = "100%";
        })
        document.getElementById("links").style.backgroundColor = "#D6AD60";
        document.getElementById("reading").style.backgroundColor = "tan"
        document.getElementsByTagName("footer")[0].style.backgroundColor = "#D6AD60";
        document.getElementsByTagName("footer")[0].style.color = "#122620";
    }   
}