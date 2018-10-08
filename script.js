// Your code here
const table = document.getElementById("grid");
const makeRow = () => {
  const row = document.createElement("tr");
  for (let i = 0; i < 4; i++) {
    const col = document.createElement("td");
    row.appendChild(col);
  }
  table.appendChild(row);
};

const button = document.getElementById("add-row");
button.addEventListener("click", makeRow);

const select = document.getElementsByTagName("select")[0];

let color = select.value;

select.addEventListener("change", event => {
  color = event.target.value;
});

const colorize = event => {
  const target = event.target;
  if (target.tagName === "TD") {
    if (!target.className || target.className !== color) {
      target.className = color;
    } else {
      target.className = "";
    }
  }
};

table.addEventListener("click", colorize);
