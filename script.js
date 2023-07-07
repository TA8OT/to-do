let taskText = "";
let taskDiv = document.getElementById("tasks");
//add task
document.getElementById("addTask").onclick = function () {
    taskText = document.getElementById("task-txt").value;
    document.getElementById("task-txt").value = "";
    console.log(taskText);
    
    if (taskText !== "") {
        //adding data To localStorage
        window.localStorage.setItem(localStorage.length,taskText);

        taskText = `
                <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg"><circle id="Ellipse 1" cx="9" cy="9" r="7.75" stroke="#94ADCF" stroke-width="2.5"/></svg>
                <p>${taskText}</p>
    `;
    //adding element to html
    let newTask = document.createElement("div");
    newTask.className = "box";
    newTask.classList.add('task')
    newTask.innerHTML = taskText;
    newTask.id = localStorage.length - 1;
    taskDiv.appendChild(newTask);    
    }
};
//get all tasks
window.onload = function() {
    for (let i = 0; i < localStorage.length; i++) {
        let data = localStorage.getItem(i);
        let newTask = document.createElement("div");
        newTask.className = "box";
        newTask.classList.add('task')
        newTask.innerHTML = `
        <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg"><circle id="Ellipse 1" cx="9" cy="9" r="7.75" stroke="#94ADCF" stroke-width="2.5"/></svg>
        <p>${data}</p>`;
        newTask.id = i;
        taskDiv.appendChild(newTask); 
    }
};

