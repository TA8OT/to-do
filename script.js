let taskText = "";
let taskDiv = document.getElementById("tasks");

document.getElementById("addTask").onclick = function () {
    taskText = document.getElementById("task-txt").value;
    console.log(taskText);
    taskText = `
            <div class="task box">
                <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg"><circle id="Ellipse 1" cx="9" cy="9" r="7.75" stroke="#94ADCF" stroke-width="2.5"/></svg>
                <p>${taskText}</p>
            </div>
    `;
    console.log(taskText);
    let newTask = document.createElement("div");
    newTask.innerHTML = taskText;
    taskDiv.appendChild(newTask);
};