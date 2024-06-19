class Todo {
    title: string;
    desc: string;
    
    constructor(title: string, desc: string,) {
        this.title = title;
        this.desc = desc;
    }
}

const todoList: Todo[] = [];
const getTitle = document.querySelector("#title") as HTMLInputElement;
const getDesc = document.querySelector("#desc") as HTMLTextAreaElement;
const form = document.querySelector("form") as HTMLFormElement;


form.addEventListener("submit", (e: Event) => {
  e.preventDefault();
  const newEntry = new Todo(getTitle.value, getDesc.value);
  todoList.push(newEntry);

  const todoDiv = document.createElement("div");
  todoDiv.classList.add("todo-item");

  const todoTitle = document.createElement("h3");
  todoTitle.textContent = newEntry.title;
  console.log(newEntry.title);
  const todoDesc = document.createElement("p");
  todoDesc.textContent = newEntry.desc;
  console.log(newEntry.desc);

  todoDiv.appendChild(todoTitle);
  todoDiv.appendChild(todoDesc);

  const todoListContainer = document.querySelector(".todo-list")!;
  todoListContainer.appendChild(todoDiv);

  todoTitle.value = "";
  todoDesc.value = "";
  
  for (const todo of todoList) {
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