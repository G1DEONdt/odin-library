const grid = document.querySelector(".grid-container");
const formContainer = document.querySelector(".form-container");
const form = document.querySelector("#form");
const button = document.querySelector(".add");
const submit = document.querySelector(".submit");
const cancel = document.querySelector(".cancel");
const myLibrary = [{
    title: "Harry Potter",
    author: "JK Rowling",
    pageCount: "182",
    status: "unread"
}];


function Book(id, title, author, pageCount, status) {
    this.id = id;
    this.title = title;
    this.author = author;
    this.pageCount = pageCount;
    this.status = status;

    this.removeBook = function () {
        myLibrary.splice(this.id, 1);
    }

    this.toggleStatus = function () {
        if (this.status == "read") {
            this.status = "unread"
            myLibrary[this.id].classList.remove("read");
        } else {
            this.status = "read";
            myLibrary[this.id].classList.add("read");
        }
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
    for (x = 0; x < myLibrary.length; x++) {
        let currentCard = `
        <div class="card">
            <img src="images/Harry_Potter_and_the_Prisoner_of_Azkaban.jpg" alt="cover for harry potter">
            <h2>${myLibrary[x].title}</h2>
            <p>${myLibrary[x].author}</p>
            <p><span>${myLibrary[x].pageCount}</span> pages</p>
            <div class="card-buttons">
                <button onclick="" type="button">x</button>
                <button onClick="" type="button">Read</button>
            </div>
        </div>
        `
        grid.innerHTML+= currentCard;
    }
    
}


function removeCard() {
    
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
