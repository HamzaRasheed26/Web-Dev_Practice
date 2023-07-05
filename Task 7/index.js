let agr = [];
let stdNames = [];

function calculate() {
  //preventDefault();

  const name = document.getElementById("name").value;
  const matric = parseInt(document.getElementById("matric").value);
  const fsc = parseInt(document.getElementById("fsc").value);
  const entry = parseInt(document.getElementById("entry").value);

  // Calculate the aggregate
  var aggregate =
    0.2 * ((matric / 1100) * 100) +
    0.3 * ((fsc / 1100) * 100) +
    0.5 * ((entry / 400) * 100);

  document.getElementById("std").innerText = "Name:" + name;
  document.getElementById("agr").innerText = "Aggregate:" + aggregate;

  // Check eligibility
  if (aggregate > 60) {
    window.alert("You are eligible for admission.");
  } else {
    window.alert("You are not eligible for admission.");
  }

  // storing in local storage
  stdNames.push(name);
  agr.push(aggregate);
  localStorage.setItem("names", JSON.stringify(stdNames));
  localStorage.setItem("aggregates", JSON.stringify(agr));
}
