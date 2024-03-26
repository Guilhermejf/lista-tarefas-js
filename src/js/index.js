const input = document.getElementById("inputTask");
const btnadd = document.getElementById("btnadd");
const taskContainer = document.querySelector(".task-container");

function handlebutton() {
  btnadd.addEventListener("click", () => {
    let valor = input.value;
    if (valor === "") {
      alert("Campo tarefa não pode ser vazio");
    } else {
      adicionarTask(valor);
    }
  });
}
function handleCheckBox(checkbox, Ititle) {
  checkbox.addEventListener("click", () => {
    const check = verificaCheckBox(checkbox);
    line(check, Ititle);
  });
}

function adicionarTask(task) {
  const Itask = document.createElement("div");
  const Ititle = document.createElement("h4");
  const Icheckbox = document.createElement("input");

  Ititle.innerText = task;
  Icheckbox.type = "checkbox";
  Icheckbox.classList.add("isChecked");

  Itask.classList.add("task");
  Itask.appendChild(Ititle);
  Itask.appendChild(Icheckbox);

  taskContainer.appendChild(Itask);

  handleCheckBox(Icheckbox, Ititle);
}

function verificaCheckBox(checkbox) {
  return checkbox.checked;
}

function line(check, Ititle) {
  if (check) {
    Ititle.classList.add("line");
  } else {
    Ititle.classList.remove("line");
  }
}

handlebutton();
