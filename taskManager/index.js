const tasksContainer = document.querySelector('.tasks');
const inputTask = document.getElementById('task');
const clearBtn = document.querySelector('.delete-btn')
const error = document.querySelector('.error');
const form = document.forms.taskDesk;
const hiddenEl = document.querySelector('.grey')
const myNodelist = document.getElementsByTagName("li");

const toDolist =[];

function addTask() {
    if (inputTask.value === '') {
        return error.textContent = `Введите задачу`
    } else {
        let taskList = document.createElement('li')
        taskList.textContent = inputTask.value;
        tasksContainer.append(taskList);
        error.textContent = ``;
        hiddenEl.classList.add('hidden');
        clearBtn.removeAttribute('disabled')
        localStorage.setItem('tasks', tasksContainer.innerHTML)
        }
        form.reset()
}


function showTask() {
    tasksContainer.innerHTML = localStorage.getItem('tasks');
}
showTask()


function clearTasks(){
    localStorage.removeItem('tasks');
    tasksContainer.textContent = '';
    hiddenEl.classList.remove('hidden');
}

// function clearAll (){
//     if (localStorage.getItem('tasks') != undefined){

//     }
// }
