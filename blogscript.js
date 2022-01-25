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