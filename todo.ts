class Todo {
    title: string;
    isComplete: boolean;

    constructor(title: string, isComplete: false) {
        this.title = title;
        this.isComplete = isComplete;
    }
}

const todoList: Todo[] = [];
const getTitle = document.querySelector("#title") as HTMLInputElement;
const form = document.querySelector("form") as HTMLFormElement;

form.addEventListener("submit", (e: Event) => {
    e.preventDefault();
    const newEntry = new Todo(getTitle.value, false);
    todoList.push(newEntry);

    const todoListContainer = document.querySelector(".todo-list")!;
    const todoDiv = document.createElement("div");
    todoDiv.classList.add("todo-item", "justify-center", "items-center", "flex", "flex-row", "mx-auto", "my-4", "rounded-sm", "w-[80%]", "p-[10px]", "border-2", "border-black");
    todoListContainer.appendChild(todoDiv);

    const flexGrp = document.createElement("div");
    flexGrp.classList.add("border-r-2", "border-black", "w-[70%]")
    todoDiv.appendChild(flexGrp);

    const todoTitle = document.createElement("h3");
    todoTitle.textContent = newEntry.title;
    console.log(newEntry.title);
    todoTitle.classList.add("text-xl", "font-bold", "text-center");
    todoTitle.style.maxWidth = "95%";
    todoTitle.style.overflow = "hidden";
    flexGrp.appendChild(todoTitle);

    const todoStatus = document.createElement("p");
    todoStatus.classList.add("text-gray-500", "ml-2");
    flexGrp.appendChild(todoStatus);

    if (newEntry.isComplete) {
        todoStatus.textContent = "Completed";
    }
    else {
        todoStatus.textContent = "Incomplete";
    }

    //Create trash icon
    const iconContainer = document.createElement("div");
    const trashIcon = document.createElement("i");
    const completeIcon = document.createElement("i");
    iconContainer.classList.add("w-[30%]", "flex", "justify-center", "items-center", "flex-row", "text-2xl", "gap-4");
    trashIcon.classList.add("fas", "fa-trash", "text-red-500");
    completeIcon.classList.add("fas", "fa-square-check", "text-green-500");

    iconContainer.appendChild(trashIcon);
    iconContainer.appendChild(completeIcon);
    todoDiv.appendChild(iconContainer);

    form.reset();
    
    for (const todo of todoList) {
        console.log("Title:", todo.title);
    }

    trashIcon.addEventListener("click", () => {
        todoList.forEach((todo, index) => {
            if (todo.title === todoTitle.textContent) {
                todoList.splice(index, 1);
            }
        });
        todoListContainer.removeChild(todoDiv);
    });
    completeIcon.addEventListener("click", () => {
        todoTitle.style.textDecoration = "line-through";
        todoStatus.textContent = "Completed";
    })
});
