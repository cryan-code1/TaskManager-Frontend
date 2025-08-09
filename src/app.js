const API_URL = "http://localhost:5156/api/task"; // ajuste a porta conforme sua API

document.addEventListener("DOMContentLoaded", () => {
    loadTasks();
    document.getElementById("formAddTask").addEventListener("submit", async (e) => {
        e.preventDefault();
        await addTask();
    });
});

function showSection(id) {
    document.querySelectorAll(".section").forEach(sec => sec.classList.remove("active"));
    document.getElementById(id).classList.add("active");
}

async function loadTasks() {
    const res = await fetch(API_URL);
    const tasks = await res.json();
    const tbody = document.getElementById("tasksTableBody");
    tbody.innerHTML = "";
    tasks.forEach(t => {
        tbody.innerHTML += `
            <tr>
                <td>${t.id}</td>
                <td>${t.title}</td>
                <td>${t.status === 1 ? "Completed" : "Pending"}</td>
                <td>${new Date(t.creationDate).toLocaleString()}</td>
                <td>${t.conclusionDate ? new Date(t.conclusionDate).toLocaleString() : "-"}</td>
                <td>
                    <button onclick="updateTask(${t.id}, 1)">Concluir</button>
                    <button onclick="deleteTask(${t.id})">Excluir</button>
                </td>
            </tr>
        `;
    });
}

async function addTask() {
    const title = document.getElementById("title").value;
    const description = document.getElementById("description").value;
    const status = parseInt(document.getElementById("status").value);

    await fetch(API_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ title, description, status })
    });

    document.getElementById("formAddTask").reset();
    loadTasks();
}

async function updateTask(id, newStatus) {
    await fetch(`${API_URL}/${id}?newStatus=${newStatus}`, { method: "PUT" });
    loadTasks();
}

async function deleteTask(id) {
    await fetch(`${API_URL}/${id}`, { method: "DELETE" });
    loadTasks();
}

async function getTaskById() {
    const id = document.getElementById("searchId").value;
    const res = await fetch(`${API_URL}/${id}`);
    document.getElementById("taskByIdResult").textContent = res.ok ? JSON.stringify(await res.json(), null, 2) : "Tarefa não encontrada";
}

async function getTasksByStatus() {
    const status = document.getElementById("searchStatus").value;
    const res = await fetch(`${API_URL}/status/${status}`);
    document.getElementById("tasksByStatusResult").textContent = res.ok ? JSON.stringify(await res.json(), null, 2) : "Nenhuma tarefa encontrada";
}

async function getStats() {
    const res = await fetch(`${API_URL}/count`);
    document.getElementById("statsResult").textContent = JSON.stringify(await res.json(), null, 2);
}
