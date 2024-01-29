const createBtn = document.getElementById("create");
const noteContainer = document.querySelector(".note-container");
const notes = document.querySelectorAll(".notes");

const deleteNote = (evt) => {
    evt.parentElement.remove();
}

const createNote = () => {
    let newNote = document.createElement("div");
    let note = document.createElement("p");
    let deleteIcon = document.createElement("img");
    newNote.classList.add("notes");
    note.setAttribute("contenteditable", true);
    note.setAttribute("spellcheck", false);
    deleteIcon.src = "images/delete.png";
    deleteIcon.addEventListener('click', (evt) => {
        deleteNote(evt.target);
    })
    noteContainer.appendChild(newNote).appendChild(note);
    noteContainer.appendChild(newNote).appendChild(deleteIcon);
}

createBtn.addEventListener('click', createNote);

const saveData = () => {
    localStorage.setItem("data", noteContainer.innerHTML);
}

const loadData = () => {
    noteContainer.innerHTML = localStorage.getItem("data");
}

window.addEventListener("load", loadData);