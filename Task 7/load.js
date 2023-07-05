function loadValues() {
  const names = JSON.parse(localStorage.getItem("names"));
  const agrs = JSON.parse(localStorage.getItem("aggregates"));

  let text = "";
  for (i = 0; i < names.length; i++) {
    text +=
      `
      <tr>
        <td> ` +
      names[i] +
      `</td>
        <td> ` +
      agrs[i] +
      `</td>
      </tr>
      `;
  }

  document.getElementById("table").innerHTML = text;
}

loadValues();
