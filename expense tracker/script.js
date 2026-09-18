const newExpense = document.getElementById("eexpense");
const newAmount = document.getElementById("eamount");
const expenseList = document.getElementById("expense-list");
const total = document.getElementById("total");

let totalAmount = 0;

function updateStorage() {
    localStorage.setItem("expenses", expenseList.innerHTML);
}

function showExpenses() {
    expenseList.innerHTML = localStorage.getItem("expenses") || "";

    totalAmount = 0;

    document.querySelectorAll(".expense").forEach((expense) => {
        const spans = expense.querySelectorAll("span");
        const amount = Number(spans[1].innerText.replace("Rs.", ""));
        totalAmount += amount;
    });

    total.innerText = `Total: Rs. ${totalAmount}`;
}

showExpenses();

function add() {

    if (newExpense.value === "" || newAmount.value === "") {
        alert("Please fill all the fields");
        return;
    }

    let expense = document.createElement("li");
    expense.className = "expense";

    expense.innerHTML = `
        <span>${newExpense.value}</span>
        <span>Rs.${newAmount.value}</span>
        <button class="delete">Delete</button>
    `;

    expenseList.appendChild(expense);

    totalAmount += Number(newAmount.value);
    total.innerText = `Total: Rs. ${totalAmount}`;

    newExpense.value = "";
    newAmount.value = "";

    updateStorage();
}


expenseList.addEventListener("click", (e) => {

    if (!e.target.classList.contains("delete")) {
        return;
    }

    const answer = confirm("Are you sure?");

    if (!answer) {
        return;
    }

    e.target.parentElement.remove();

    updateStorage();

    showExpenses();
});