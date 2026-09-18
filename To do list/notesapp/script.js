const notesContainer = document.querySelector(".notes-container");
const createBtn = document.querySelector(".btn");


// Save notes
function updateStorage() {

    const notes = notesContainer.querySelectorAll(".note");
    const validNotes = [];

    notes.forEach(function(note) {

        const inputBox = note.querySelector(".input-box");

        // Only save notes that contain text
        if (inputBox && inputBox.textContent.trim() !== "") {
            validNotes.push(note.outerHTML);
        }
    });

    localStorage.setItem("notes", validNotes.join(""));
}


// Load saved notes
function showNotes() {

    notesContainer.innerHTML =
        localStorage.getItem("notes") || "";

    // Remove old empty notes
    const notes = notesContainer.querySelectorAll(".note");

    notes.forEach(function(note) {

        const inputBox = note.querySelector(".input-box");

        if (!inputBox || inputBox.textContent.trim() === "") {
            note.remove();
        }
    });

    updateStorage();
}

showNotes();


// Create new note
createBtn.addEventListener("click", function() {

    const note = document.createElement("div");
    const inputBox = document.createElement("p");
    const deleteBtn = document.createElement("button");

    note.className = "note";

    inputBox.className = "input-box";
    inputBox.setAttribute(
        "data-placeholder",
        "Create new note.."
    );

    inputBox.contentEditable = "true";

    deleteBtn.className = "bttn";
    deleteBtn.innerText = "Delete";

    note.appendChild(inputBox);
    note.appendChild(deleteBtn);

    notesContainer.appendChild(note);

    inputBox.focus();

    updateStorage();
});


// Delete note
notesContainer.addEventListener("click", function(e) {

    if (e.target.tagName === "BUTTON") {

        if (confirm("Do you really want to delete this note?")) {

            e.target.parentElement.remove();

            updateStorage();
        }
    }
});


// Save whenever the user edits a note
notesContainer.addEventListener("input", function() {

    updateStorage();
});