const tasksContainer = document.querySelector('.tasks');
const inputTask = document.getElementById('task');
const clearBtn = document.querySelector('.delete-btn')
const error = document.querySelector('.error');
const form = document.forms.taskDesk;
const hiddenEl = document.querySelector('.grey')
const myNodelist = document.getElementsByTagName("li");
const todoView = document.getElementById('todoView')
const checkbox = document.querySelector('.checkbox')
const toDolist =[];

function addTask() {
    if (inputTask.value === '') {
        return error.textContent = `Введите задачу`
    } else {
        hiddenEl.classList.add('hidden');
        error.textContent = ``;
        let taskList = document.createElement('li')
        taskList.textContent = inputTask.value;
        tasksContainer.append(taskList);
        const check = document.createElement("input");
        check.type = "checkbox"
        check.classList.add('checkbox');
        taskList.append(check);
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

function isChecked (){
    if (checkbox.checked){
        return
    }
}

// function clearAll (){
//     if (localStorage.getItem('tasks') != undefined){

//     }
// }

/*document.querySelector('.add-btn').addEventListener('click', function () {
    if (toDolist.filter(t => t.title === inputTask.value).length > 0) {
        return error.textContent = 'Такая задача уже есть'
    } else if (inputTask.value.length === 0) {
        return error.textContent = 'Название не может быть пустым'
    } else {
        const id = toDolist.length + 1
        toDolist.push({
            id,
            title: inputTask.value,
            complete: false
        })

        const li = document.createElement('li')
        const span = document.createElement('span')
        span.innerText = inputTask.value
        span.dataset.inputTask = id

        const checkbox = document.createElement('input')
        checkbox.type = 'checkbox'
        checkbox.inputTask = id

        checkbox.addEventListener('change', function (e) {
            const inputTask = toDolist.forEach(t => {
                if (t.id === e.target.inputTask) {
                    const span = document.querySelector(`span[data-inputTask='${e.target.inputTask}']`)
                    t.complete = !t.complete
                    span && t.complete ? span.style.textDecoration = 'line-through' : span.style.textDecoration = 'none'
                }
            })
        })
        li.appendChild(checkbox)
        li.appendChild(span)
        todoView.appendChild(li)
        inputTask.value = ''
    }

})
*/
