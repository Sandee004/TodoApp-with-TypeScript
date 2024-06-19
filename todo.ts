class Todo {
    title: string;
    //desc: string;

    constructor(title: string) {
        this.title = title;
        //this.desc = desc;
    }
}

const todoList: Todo[] = [];
const getTitle = document.querySelector("#title") as HTMLInputElement;
//const getDesc = document.querySelector("#desc") as HTMLTextAreaElement;
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

    const todoDesc = document.createElement("p");
    todoDesc.textContent = newEntry.desc;
    console.log(newEntry.desc);
    todoDesc.style.fontSize = "16px";
    todoDesc.style.background = "green";
    todoDesc.style.marginTop = "5px";
    flexGrp.appendChild(todoDesc);

    //Create trash icon
    const trashContainer = document.createElement("div");
    const trashIcon = document.createElement("i");
    trashIcon.classList.add("fas", "fa-trash");
    trashContainer.style.width = "40%";
    trashIcon.style.color = "red";
    
    trashContainer.appendChild(trashIcon);
    todoDiv.appendChild(trashContainer);

    for (const todo of todoList) {
        console.log("Title:", todo.title, "Description:", todo.desc);
    }
});
