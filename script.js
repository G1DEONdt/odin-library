const grid = document.querySelector(".grid-container");
const formContainer = document.querySelector(".form-container");
const form = document.querySelector("#form");
const button = document.querySelector(".add");
const submit = document.querySelector(".submit");
const cancel = document.querySelector(".cancel");

class Library {
    constructor () {
        this.bookcase = [];
        this.gridNodeList = document.querySelectorAll(".toggle");
    } 
    addBook() {
        const id = this.bookcase.length;
        const title = document.getElementById("title").value;
        const author = document.getElementById("author").value;
        const pageCount = document.getElementById("pageCount").value;
        const status = document.getElementById("status").value;
        this.bookcase.push(new Book(id, title, author, pageCount, status));
    }
    removeBook(id) {
        this.bookcase.splice(id, 1);
        this.render();
    }
    toggleStatus(id) {
        if (this.bookcase[id].status == "read") {
            this.bookcase[id].status = "unread"
        } else {
            this.bookcase[id].status = "read";
        }
        this.render();
    }
    capitaliseFirstLetter(string){
        return string.charAt(0).toUpperCase() + string.slice(1);
    }
    refreshNodeList() {
        this.gridNodeList = document.querySelectorAll(".toggle");
    }
    render() {
        grid.innerHTML = "";
        for (let x = 0; x < library.bookcase.length; x++) {
            let currentCard = `
            <div class="card ${x}">
                <img src="images/Harry_Potter_and_the_Prisoner_of_Azkaban.jpg" alt="cover for harry potter">
                <h2>${library.bookcase[x].title}</h2>
                <p>${library.bookcase[x].author}</p>
                <p><span>${library.bookcase[x].pageCount}</span> pages</p>
                <div class="card-buttons">
                    <button onclick="library.removeBook(${x})" type="button">Delete</button>
                    <button onclick="library.toggleStatus(${x})" type="button" class="toggle ${library.bookcase[x].status}">${this.capitaliseFirstLetter(library.bookcase[x].status)}</button>
                </div>
            </div>
            `
            grid.innerHTML+= currentCard;
        }
        this.refreshNodeList();
    }
}

class Book {
    constructor (id, title, author, pageCount, status) {
        this.id = id;
        this.title = title;
        this.author = author;
        this.pageCount = pageCount;
        this.status = status;
    }
}

const library = new Library();

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
    library.addBook();
    library.render();
    resetForm();
    closeForm();
})

cancel.addEventListener("click", () => {
    resetForm();
    closeForm();
})
