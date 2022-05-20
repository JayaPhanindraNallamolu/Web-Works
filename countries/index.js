document.addEventListener("DOMContentLoaded", () => {
  const selectdrop = document.getElementById("countries");
  fetch("https://countriesnow.space/api/v0.1/countries/capital")
    .then((res) => {
      return res.json();
    })
    .then((json) => {
      let x = json.data;
      let output = `<option>Choose Country</option>`;
      for (let i = 0; i < x.length; i++) {
        output += `<option>${x[i].name}</option>`;
      }
      selectdrop.innerHTML = output;
    })
    .catch((err) => {
      console.log(err);
    });
});

const getcountry = () => {
  const select = document.getElementById("countries").value;
  // console.log(select);
  let url = "https://countriesnow.space/api/v0.1/countries/cities";

  var urlencoded = new URLSearchParams();
  var data;
  var list = "";

  urlencoded.append("country", select);

  var citydrop = document.getElementById("cities");
  citydrop.innerHTML = " ";

  fetch(url, {
    method: "post",
    headers: {
      //'Authorization': 'Bearer token',
      "Content-Type": "application/x-www-form-urlencoded",
    },
    body: urlencoded,
  })
    .then((response) => {
      return response.json();
    })
    .then((json) => {
      data = json.data;
      for (let i = 0; i < data.length; i++) {
        list += `<option value="${data[i]}">${data[i]}</option>`;
      }
      citydrop.innerHTML = list;
    })
    .catch((err) => {
      console.log(err);
    });
};
