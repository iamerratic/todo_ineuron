const todos = [];


const todoForm = document.querySelector('#todoForm');
const btn = document.querySelector('#btn');
const title = document.querySelector('#title');
const description = document.querySelector('#description');

btn.addEventListener('click', function () {

    const form = new FormData(todoForm);
    var formValues = {};

    for (var val of form.keys()) {
        formValues[val] = form.get(val);
    }

    var todo = getTodo(formValues.title, formValues.description);

    title.value = null;
    description.value = null;

    todos.push(todo);
    render(todos);
});


function getTodo(title, description) {

    // Task 1
    // I have to extract the last element and get out its id 
    // And id + 1 will be our new Id

    var id;

    return {
        id,
        title,
        description,
        createdAt: new Date().toString(),
        status: 'active'
    };
}


function render(todos) {

    const todo_list = document.querySelector('.todo_list');

    const items = todos.map(todo => renderATodoItem(todo));

    // I have to clear all the content inside that
    todo_list.innerHTML = null;

    items.forEach(item => {
        todo_list.appendChild(item);
    });
}


function renderATodoItem(todo) {

    const mainRow = document.createElement('div');
    mainRow.className = 'row jumbotron section';

    const titleDiv = document.createElement('div');
    const descriptionDiv = document.createElement('div');
    const statusDiv = document.createElement('div');
    titleDiv.className = 'col-md-2';
    titleDiv.textContent = todo.title;
    descriptionDiv.className = 'col-md-2';
    descriptionDiv.textContent = todo.description;
    statusDiv.className = 'col-md-2';
    statusDiv.textContent = todo.status;

    let markCompletedDiv = document.createElement('div');
    markCompletedDiv.className = 'col-md-2';

    let statusBtn = document.createElement('button');
    statusBtn.className = 'btn btn-info';
    statusBtn.textContent = 'Mark Completed';

    statusBtn.addEventListener('click', () => {
        console.log(todo.id);

        // Task 2
        // You have to find out a todo from that list of todos whose id id todo.id (find function)

        // you need to change the status of that and call the render function again
    });

    markCompletedDiv.appendChild(statusBtn);

    const actionsDiv = document.createElement('div');
    actionsDiv.className = 'col-md-4';

    const row = document.createElement('div');
    row.className = 'row';

    let editDiv = document.createElement('div');
    editDiv.className = 'col-md-3';

    statusBtn = document.createElement('button');
    statusBtn.className = 'btn btn-primary';
    statusBtn.textContent = 'Edit';

    editDiv.appendChild(statusBtn);

    row.appendChild(editDiv);

    let statusAction = document.createElement('div');
    statusAction.className = 'col-md-3';

    statusBtn = document.createElement('button');
    statusBtn.className = 'btn btn-danger';
    statusBtn.textContent = 'Delete';

    statusBtn.addEventListener('click', () => {
        console.log(todo.id);

        // Task 3
        // You have to remove todo from todos whose id is todo.id (filter function)
        // After that you have to call render function again
    });

    statusAction.appendChild(statusBtn);

    row.appendChild(statusAction);

    actionsDiv.appendChild(row);

    mainRow.appendChild(titleDiv);
    mainRow.appendChild(descriptionDiv);
    mainRow.appendChild(statusDiv);
    mainRow.appendChild(markCompletedDiv);
    mainRow.appendChild(actionsDiv);

    return mainRow;
}


render(todos);
