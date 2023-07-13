const tasksContainer = document.querySelector('.tasks');
const inputTask = document.getElementById('task');
const clearBtn = document.querySelector('.delete-btn')
const error = document.querySelector('.error');


function addTask(text) {
    if (text.value === '') {
        return error.textContent = `Введите задачу`
    } else {
        let taskList = document.createElement('li')
        taskList.textContent = text.value;
        tasksContainer.append(taskList);
        error.textContent = ``;
    }
}

document.querySelector('.add-btn').onclick = addTask(inputTask);