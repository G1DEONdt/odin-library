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


function Book(title, author, pageCount, status) {
    this.title = title;
    this.author = author;
    this.pageCount = pageCount;
    this.status = status;

    function removeBook() {
        
    }
}

function addBookToLibrary() {
    const title = document.getElementById("title").value;
    const author = document.getElementById("author").value;
    const pageCount = document.getElementById("pageCount").value;
    const status = document.getElementById("status").value;
    myLibrary.push(new Book(title, author, pageCount, status));
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
            <p>${myLibrary[x].status}</p>
            <div class="card-buttons">
                <button onclick="removeBook(${x})" type="button">x</button>
            </div>
        </div>
        `
        grid.innerHTML+= currentCard;
    }
    
}

redrawGrid();

function removeBook(index) {
    myLibrary.pop(index);
    redrawGrid();
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
