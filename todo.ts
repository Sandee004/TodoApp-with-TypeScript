class Todo {
    title: string;

    constructor(title: string) {
        this.title = title;
    }
}

const todoList: Todo[] = [];
const getTitle = document.querySelector("#title") as HTMLInputElement;
const form = document.querySelector("form") as HTMLFormElement;

form.addEventListener("submit", (e: Event) => {
    e.preventDefault();
    const newEntry = new Todo(getTitle.value);
    todoList.push(newEntry);

    const todoListContainer = document.querySelector(".todo-list")!;
    const todoDiv = document.createElement("div");
    todoDiv.classList.add("todo-item");
    todoDiv.style.border = "1px solid black";
    todoDiv.style.padding = "10px";
    todoDiv.style.width = "80%";
    todoDiv.style.margin = "auto";
    todoDiv.style.marginBottom = "10px";
    todoDiv.style.borderRadius = "5px";
    todoDiv.style.display = "flex";
    todoDiv.style.flexDirection = "row";
    todoDiv.style.justifyContent = 'center'; // Center horizontally
    todoDiv.style.alignItems = 'center'
    todoListContainer.appendChild(todoDiv);

    const flexGrp = document.createElement("div");
    flexGrp.style.width = "60%";
    todoDiv.appendChild(flexGrp);

    const todoTitle = document.createElement("h3");
    todoTitle.textContent = newEntry.title;
    console.log(newEntry.title);
    todoTitle.style.fontSize = "22px";
    todoTitle.style.fontWeight = "bold";
    flexGrp.appendChild(todoTitle);

    //Create trash icon
    const trashContainer = document.createElement("button");
    const trashIcon = document.createElement("i");
    trashIcon.classList.add("fas", "fa-trash");
    trashContainer.style.width = "40%";
    trashIcon.style.color = "red";
    
    trashContainer.appendChild(trashIcon);
    todoDiv.appendChild(trashContainer);

    for (const todo of todoList) {
        console.log("Title:", todo.title);
    }

    trashContainer.addEventListener('click', () => {
        todoList.forEach((todo, index) => {
          if (todo.title === todoTitle.textContent) {
            todoList.splice(index, 1);
          }
        });
        todoListContainer.removeChild(todoDiv);
    })
});
