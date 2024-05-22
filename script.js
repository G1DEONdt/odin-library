const grid = document.querySelector(".grid-container");
const formContainer = document.querySelector(".form-container");
const form = document.querySelector("#form");
const button = document.querySelector(".add");
const submit = document.querySelector(".submit");
const cancel = document.querySelector(".cancel");
let gridNodeList = document.querySelectorAll(".toggle");
const myLibrary = [{
}];


function Book(id, title, author, pageCount, status) {
    this.id = id;
    this.title = title;
    this.author = author;
    this.pageCount = pageCount;
    this.status = status;

    this.call = function () {
        console.log("HEY");
    }

    this.removeBook = function () {
        myLibrary.splice(this.id, 1);
        redrawGrid();
    }

    this.toggleStatus = function () {
        if (this.status == "read") {
            this.status = "unread"
        } else {
            this.status = "read";
        }
        redrawGrid();
    }
}

function addBookToLibrary() {
    const id = myLibrary.length;
    const title = document.getElementById("title").value;
    const author = document.getElementById("author").value;
    const pageCount = document.getElementById("pageCount").value;
    const status = document.getElementById("status").value;
    myLibrary.push(new Book(id, title, author, pageCount, status));
}

function redrawGrid() {
    grid.innerHTML = "";
    for (x = 1; x < myLibrary.length; x++) {
        let currentCard = `
        <div class="card ${x}">
            <img src="images/Harry_Potter_and_the_Prisoner_of_Azkaban.jpg" alt="cover for harry potter">
            <h2>${myLibrary[x].title}</h2>
            <p>${myLibrary[x].author}</p>
            <p><span>${myLibrary[x].pageCount}</span> pages</p>
            <div class="card-buttons">
                <button onclick="myLibrary[${x}].removeBook()" type="button">x</button>
                <button onclick="myLibrary[${x}].toggleStatus()" type="button" class="toggle ${myLibrary[x].status}">${myLibrary[x].status}</button>
            </div>
        </div>
        `
        grid.innerHTML+= currentCard;
    }
    refreshNodeList();
}

function capitaliseFirstLetter(string){
    return string.charAt(0).toUpperCase() + string.slice(1);
}

function resetForm() {
    form.reset();
}

function closeForm() {
    formContainer.classList.remove("active");
}

function refreshNodeList() {
    gridNodeList = document.querySelectorAll(".toggle");
}


button.addEventListener("click", () => {
    formContainer.classList.add("active");
});

submit.addEventListener("click", () => {
    addBookToLibrary();
    redrawGrid();
    resetForm();
    closeForm();
})

cancel.addEventListener("click", () => {
    resetForm();
    closeForm();
})
