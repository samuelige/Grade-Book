const rep = [
  document.getElementById("assignments"),
  document.getElementById("students"),
  document.getElementById("grades"),
  document.getElementById("assignInput"),
  document.getElementById("assignBtn"),
  document.getElementById("assign-listItem"),
  document.getElementById("studInput"),
  document.getElementById("studBtn"),
  document.getElementById("stud-listItem"),
  document.getElementById("grade-listItems"),
  document.getElementById("result-list"),
  document.getElementById("btnGrades"),
];

const [
  assignments,
  students,
  grades,
  assignInput,
  assignBtn,
  assignListItem,
  studInput,
  studBtn,
  studListItem,
  gradeListItems,
  result,
  btnGrades,
] = rep;

function GenerateData(assignInput) {
  this.assignInput = assignInput;
}

function MultipuleData(assignInput, studInput) {
  this.assignInput = assignInput;
  this.studInput = studInput;
}

function ResultData(assignInput, studInput, gradeInput) {
  this.assignInput = assignInput;
  this.studInput = studInput;
  this.gradeInput = gradeInput;
}

function UI() {}

UI.prototype.addFistData = function (app1) {
  const assignListItem = document.getElementById("assign-listItem");
  const li = document.createElement("li");
  li.innerHTML = `
  <li className='"collection-item"'>${app1.assignInput}</li>
  `;
  assignListItem.appendChild(li);
};
// addFistData();

UI.prototype.addSecondData = (app2) => {
  const studListItem = document.getElementById("stud-listItem");
  const list = document.createElement("li"); //Create li
  list.innerHTML = `
  <li "collection-item">${app2.assignInput}</li>
  <li>${app2.studInput}</li>
  `;
  studListItem.appendChild(list);
};

UI.prototype.addThirdData = (app3) => {
  const gradeListItems = document.getElementById("grade-listItems");
  const simpleList = document.createElement("li");
  simpleList.innerHTML = `
  <li className="collection-item">${app3.assignInput}</li>
  <li className="collection-item">${app3.studInput}
  <input id='gradeInput' type='text' placeholder='Add Grade' />
  <button id='btnGrades'>Submit</button>
  </li>
  `;
  gradeListItems.appendChild(simpleList);

  const btnGrades = document.getElementById("btnGrades");
  btnGrades.addEventListener("click", (e) => {
    e.preventDefault();
    const assignInput = document.querySelector("#assignInput").value;
    const studInput = document.getElementById("studInput").value;
    const gradeInput = document.getElementById("gradeInput").value;

    const forResult = new ResultData(assignInput, studInput, gradeInput);
    const ui = new UI();
    ui.addToTable(forResult);
  });
};

UI.prototype.addToTable = (app4) => {
  const resultList = document.getElementById("result-list");
  const tableCell = document.createElement("tr");
  tableCell.innerHTML = `
  <td>${app4.assignInput}<td>
  <td>${app4.studInput}<td>
  <td>${app4.gradeInput}<td>
  `;
  resultList.appendChild(tableCell);
};

assignBtn.addEventListener("click", (e) => {
  e.preventDefault();
  const assignInput = document.querySelector("#assignInput").value;
  const generate = new GenerateData(assignInput);
  const ui = new UI();
  ui.addFistData(generate);
});

studBtn.addEventListener("click", (e) => {
  e.preventDefault();
  const assignInput = document.querySelector("#assignInput").value;
  const studInput = document.getElementById("studInput").value;

  const generateStud = new MultipuleData(assignInput, studInput);
  const ui = new UI();
  ui.addSecondData(generateStud);
});

grades.addEventListener("click", (e) => {
  e.preventDefault();
  const assignInput = document.querySelector("#assignInput").value;
  const studInput = document.getElementById("studInput").value;

  const generateStud = new MultipuleData(assignInput, studInput);
  const ui = new UI();
  ui.addThirdData(generateStud);
});

console.log(result);
