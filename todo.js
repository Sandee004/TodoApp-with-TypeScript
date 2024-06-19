var Todo = /** @class */ (function () {
    function Todo(title, desc) {
        this.title = title;
        this.desc = desc;
    }
    return Todo;
}());
var todoList = [];
var getTitle = document.querySelector("#title");
var getDesc = document.querySelector("#desc");
var form = document.querySelector("form");
form.addEventListener("submit", function (e) {
    e.preventDefault();
    var newEntry = new Todo(getTitle.value, getDesc.value);
    todoList.push(newEntry);
    var todoDiv = document.createElement("div");
    todoDiv.classList.add("todo-item");
    var todoTitle = document.createElement("h3");
    todoTitle.textContent = newEntry.title;
    console.log(newEntry.title);
    var todoDesc = document.createElement("p");
    todoDesc.textContent = newEntry.desc;
    console.log(newEntry.desc);
    todoDiv.appendChild(todoTitle);
    todoDiv.appendChild(todoDesc);
    var todoListContainer = document.querySelector(".todo-list");
    todoListContainer.appendChild(todoDiv);
    todoTitle.value = "";
    todoDesc.value = "";
    for (var _i = 0, todoList_1 = todoList; _i < todoList_1.length; _i++) {
        var todo = todoList_1[_i];
        console.log("Title:", todo.title, "Description:", todo.desc);
    }
    //Stylings
    todoDiv.style.border = "1px solid black";
    todoDiv.style.padding = "10px";
    todoDiv.style.width = "80%";
    todoDiv.style.margin = "auto";
    todoDiv.style.marginBottom = "10px";
    todoDiv.style.borderRadius = "5px";
    todoTitle.style.fontSize = "22px";
    todoTitle.style.fontWeight = "bold";
    todoDesc.style.fontSize = "16px";
    todoDesc.style.marginTop = "5px";
});
