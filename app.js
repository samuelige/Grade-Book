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
] = rep;

function GenerateData(assignInput) {
  this.assignInput = assignInput;
}

function GenerateData(assignInput, studInput) {
  this.assignInput = assignInput;
  this.studInput = studInput;
}

function UI() {}

UI.prototype.addFistData = function (app1) {
  const assignListItem = document.getElementById("assign-listItem");
  const li = document.createElement("li");
  li.innerHTML = `
  <li>Assignments</li>
  <li>${app1.assignInput}</li>
  `;
  assignListItem.appendChild(li);
};
// addFistData();

// UI.prototype.addSecondData = (app2) => {
//   const studListItem = document.getElementById("stud-listItem");
//   const list = document.createElement("li"); //Create li
//   list.className = "collection-item";
//   list.appendChild(document.createTextNode(`${app1.assignInput}`));
//   list.appendChild(document.createTextNode(`${app2.studInput}`));
//   studListItem.appendChild(list);
// };

// UI.prototype.addThirdData = () => {
//   const gradeListItems = document.getElementById("grade-listItems");
//   const simpleList = document.createElement("li");
//   simpleList.className = "collection-item";
//   simpleList.appendChild(document.createTextNode(`${app1.assignInput}`));
//   simpleList.appendChild(document.createTextNode(`${app2.studInput}`));
//   const inputInList = document.createElement("INPUT"); //create Input
//   inputInList.className = "inputValue";
//   inputInList.setAttribute("type", "text");
//   simpleList.appendChild(inputInList);
//   gradeListItems.appendChild(simpleList);
// };

assignBtn.addEventListener("click", (e) => {
  e.preventDefault();
  const assignInput = document.querySelector("#assignInput").value;
  const generate = new GenerateData(assignInput);
  const ui = new UI();
  ui.addFistData(generate);
});
