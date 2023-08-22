let todoItemsContainer = document.getElementById("todoItemsContainer");
let addTodoButtonElement = document.getElementById("addTodoButton");

// Create Todos List
let todoList = [
  {
    text: "Learn HTML",
    uniqueNo: 1,
  },
  {
    text: "Learn CSS",
    uniqueNo: 2,
  },
  {
    text: "Learn JavaScript",
    uniqueNo: 3,
  },
];

let todoCount = todoList.length;

// onTodoStatusChange Code
function onTodoStatusChange(checkBoxId, labelid) {
  let checkboxElelment = document.getElementById(checkBoxId);
  let labelElement = document.getElementById(labelid);
  // using classList.toggle()
  labelElement.classList.toggle("checked");

  // if (checkboxElelment.checked === true) {
  //     labelElement.classList.add("checked");
  // } else {
  //     labelElement.classList.remove("checked");
  // }
}

// delete Icon function
function onDeleteTodoItem(todoId) {
  let todoElement = document.getElementById(todoId);

  todoItemsContainer.removeChild(todoElement);
}

function createAndAppendTodo(todo) {
  let todoId = "todo" + todo.uniqueNo;
  let checkBoxId = "checkbox" + todo.uniqueNo;
  let labelid = "label" + todo.uniqueNo;
  // Create List_Container List
  let todoElement = document.createElement("li");
  todoElement.classList.add("todo-item-container", "d-flex", "flex-row");
  todoElement.id = todoId;
  todoItemsContainer.appendChild(todoElement);

  // Create Input Checkbox Eelement
  let inputElement = document.createElement("input");
  inputElement.type = "checkbox";
  inputElement.id = checkBoxId;
  inputElement.onclick = function () {
    onTodoStatusChange(checkBoxId, labelid);
  };
  inputElement.classList.add("checkbox-input");
  todoElement.appendChild(inputElement);

  // Create Label_Container
  let labelContainer = document.createElement("div");
  labelContainer.classList.add("label-container", "d-flex", "flex-row");
  todoElement.appendChild(labelContainer);

  let labelElement = document.createElement("label");
  labelElement.setAttribute("for", checkBoxId);
  labelElement.id = labelid;
  labelElement.classList.add("checkbox-label");
  labelElement.textContent = todo.text;
  labelContainer.appendChild(labelElement);

  // Create delete_Container
  let deleteIconContainer = document.createElement("div");
  deleteIconContainer.classList.add("delete-icon-container");
  labelContainer.appendChild(deleteIconContainer);

  // Create Delete Icon Logo
  let deleteIcon = document.createElement("i");
  deleteIcon.classList.add("far", "fa-trash-alt", "delete-icon");
  deleteIcon.onclick = function () {
    onDeleteTodoItem(todoId);
  };
  deleteIconContainer.appendChild(deleteIcon);
}

// For Lop Function EachTodos Items
for (let todo of todoList) {
  createAndAppendTodo(todo);
}

function onAddTodo() {
  let todoUserInputElement = document.getElementById("todoUserInput");
  let uservalue = todoUserInputElement.value;
  if (uservalue === "") {
    alert("Enter Valid Text");
    return;
  }

  todoCount = todoCount + 1;
  let newTodo = {
    text: uservalue,
    uniqueNo: todoCount,
  };
  createAndAppendTodo(newTodo);
  todoUserInputElement.value = "";
}

addTodoButtonElement.onclick = function () {
  onAddTodo();
};
