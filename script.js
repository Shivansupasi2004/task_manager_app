document.getElementById('taskForm').addEventListener('submit', function(e) {
    e.preventDefault();
    var taskInput = document.getElementById('taskInput');
    var taskText = taskInput.value;
    if (taskText.trim() !== '') {
        addTask(taskText);
        taskInput.value = '';
    } else {
        alert('Please enter a task!');
    }
});

function addTask(taskText) {
    var taskList = document.getElementById('taskList');
    var li = document.createElement('li');
    li.innerHTML = `
        <span>${taskText}</span>
        <button class="delete-btn">Delete</button>
    `;
    taskList.appendChild(li);

    li.querySelector('.delete-btn').addEventListener('click', function() {
        li.remove();
    });
}
