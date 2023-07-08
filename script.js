let taskText = "";
let taskDiv = document.getElementById("tasks");
let compDiv = document.getElementById("comp");
//add task
document.getElementById("addTask").onclick = function () {
    taskText = document.getElementById("task-txt").value;
    document.getElementById("task-txt").value = "";
    console.log(taskText);
    if (taskText !== "") {
        //creating an json obj
        let obj = JSON.stringify({
            text: taskText,
            isComplete: false
        });
        console.log(obj);
        //adding data To localStorage
        localStorage.setItem(localStorage.length,obj);
        //element
        taskText = `
                <svg id="${localStorage.length - 1}" onclick="changeCompStatus(${localStorage.length - 1})" width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg"><circle id="Ellipse 1" cx="9" cy="9" r="7.75" stroke="#94ADCF" stroke-width="2.5"/></svg>
                <p>${taskText}</p>
    `;
    //adding element to html
    let newTask = document.createElement("div");
    newTask.className = "box";
    newTask.classList.add('task')
    newTask.innerHTML = taskText;
    newTask.id = localStorage.length - 1;
    taskDiv.appendChild(newTask);    
    };
};
//get all tasks
window.onload = function() {
    for (let i = 0; i < localStorage.length; i++) {
        let data = JSON.parse(localStorage.getItem(i));
        let newTask = document.createElement("div");
        newTask.className = "box";
        newTask.classList.add('task');
        if (data.isComplete === false) {
            //not completed
            newTask.innerHTML = `
            <svg id="${i}" onclick="changeCompStatus(${i})" width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg"><circle id="Ellipse 1" cx="9" cy="9" r="7.75" stroke="#94ADCF" stroke-width="2.5"/></svg>
            <p>${data.text}</p>`;
            newTask.id = i;
            taskDiv.appendChild(newTask);
        } else {
            //completed
            newTask.innerHTML = `
            <svg id="${i}" onclick="changeCompStatus(${i})" width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg"><circle id="Ellipse 4" cx="9" cy="9" r="9" fill="#94ADCF"/></svg>
            <p>${data.text}</p>`;
            newTask.id = i;
            compDiv.appendChild(newTask);
        }
    }
};
//make task complated
function changeCompStatus(id) {
    let oldTask = JSON.parse(localStorage.getItem(id));
    localStorage.removeItem(id);
    oldTask.isComplete = !oldTask.isComplete;
    document.getElementById(id).remove();
    let task = JSON.stringify(oldTask);
    console.log(task);
    localStorage.setItem(id,task);
    //create element
    let newTask = document.createElement("div");
        newTask.className = "box";
        newTask.classList.add('task');
        let emp = JSON.parse(task);
    if (oldTask.isComplete === false) {
        //not completed
        newTask.innerHTML = `
            <svg id="${id}" onclick="changeCompStatus(${id})" width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg"><circle id="Ellipse 1" cx="9" cy="9" r="7.75" stroke="#94ADCF" stroke-width="2.5"/></svg>
            <p>${emp.text}</p>`;
        newTask.id = id;
        taskDiv.appendChild(newTask);
    }else {
        //completed
        newTask.innerHTML = `
            <svg id="${id}" onclick="changeCompStatus(${id})" width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg"><circle id="Ellipse 4" cx="9" cy="9" r="9" fill="#94ADCF"/></svg>
            <p>${emp.text}</p>`;
        newTask.id = id;
        compDiv.appendChild(newTask);
    }
};
