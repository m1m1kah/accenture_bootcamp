const taskInput = document.getElementById("taskInput");
const addTaskBtn = document.getElementById("addTaskBtn");
const taskList = document.getElementById("taskList");

addTaskBtn.addEventListener("click", () => {
  const taskText = taskInput.value.trim();
  if (taskText.value === "") return;
  //Create a new item in our taskList
  const li = document.createElement("li");
  li.innerHTML = `<span class="taskText">${taskText} </span> <button class="delete-btn">o</button>`;
  li.addEventListener("click", () => {
    li.classList.toggle("completed");
  });
  //li.querySelector(".delete-btn").addEventListener("click", (event) => {
  // event.stopPropogation();
  // li.remove();
  //});
  taskList.appendChild(li);
  taskInput.value = "";
});
