//  function getcountry() {
//   const select = document.getElementById("countries").value;
//   // console.log(select);
//   fetch("https://countriesnow.space/api/v0.1/countries")
//     .then((res) => {
//       return res.json();
//     })
//     .then((city) => {
//       var list = "";
//       var y = city.data;
//       var citydrop = document.getElementById("cities");
//       citydrop.innerHTML = " ";
//       for (j = 0; j < y.length; j++) {
//         if (select == y[j].country) {
//           var k = y[j].cities;
//         }
//       }
//       let z = k.length;
//       for (i = 0; i < z; i++) {
//         console.log(k[i]);
//         list += `<option value="${k[i]}">${k[i]}</option>`;
//       }
//       citydrop.innerHTML = list;
//     })
//     .catch((err) => {
//       console.log(err);
//     });
// }ex

var emailreg = "^([a-z0-9_.-]+)@([da-z.-]+).([a-z.]{2,6})$";

function vlaidateemail(email) {
    boolean result = email.matches(emailreg);
      if(result) {
         System.out.println("Given email-id is valid");
      } else {
         System.out.println("Given email-id is not valid");
      }
}
