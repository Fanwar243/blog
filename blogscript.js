function openNav() {
    const x = window.matchMedia("screen and (max-device-width: 900px)")
    if (x.matches) {
        document.getElementById("nav").style.width = "50%";
        document.getElementById("nav").style.height = "60%";
    } else {
        document.getElementById("nav").style.width = "20%";
    }
    document.getElementById("openbtn").style.display = "None";
}

function closeNav() {
    document.getElementById("nav").style.width = "0";
    document.getElementById("openbtn").style.display = "Block";
}

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

const update = () => {
    const newBook = document.createElement("li");
    const bookInfo = `${document.getElementById("bookTitle").value} by ${document.getElementById("bookAuthor").value}`;

    newBook.appendChild(document.createTextNode(bookInfo));
    document.getElementById("bookList").appendChild(newBook);
    alert(`Updated with: ${document.getElementById("bookTitle").value} by ${document.getElementById("bookAuthor").value}`);
}