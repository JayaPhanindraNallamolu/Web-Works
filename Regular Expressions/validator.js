function validateformsubmit() {
  const name = document.getElementById("firstname").value;
  firstnametext.innerText = " ";
  if (name == "") {
    firstname.style.border = "2px solid red";
    firstnametext.innerText = "Required";
    firstnametext.style.color = "red";
  } else {
    let temp = validatename(name);
    if (!temp) {
      firstname.style.border = "2px solid red";
      firstnametext.innerText = "Invalid Firstname";
      firstnametext.style.color = "red";
    } else {
      firstname.style.border = "2px solid green";
    }
  }
  const phone = document.getElementById("mobile").value;
  mobiletext.innerText = " ";
  if (phone == "") {
    mobile.style.border = "2px solid red";
    mobiletext.innerText = "Required";
    mobiletext.style.color = "red";
  } else {
    if (!validatemobile(phone)) {
      mobile.style.border = "2px solid red";
      mobiletext.innerText = "Invalid Mobile";
      mobiletext.style.color = "red";
    } else {
      mobile.style.border = "2px solid green";
    }
  }

  const gmail = document.getElementById("email").value;
  emailtext.innerText = " ";
  if (gmail == "") {
    email.style.border = "2px solid red";
    emailtext.innerText = "Required";
    emailtext.style.color = "red";
  } else {
    if (!validateemail(gmail)) {
      email.style.border = "2px solid red";
      emailtext.innerText = "Invalid Email";
      emailtext.style.color = "red";
    } else {
      email.style.border = "2px solid green";
    }
  }

  const pass = document.getElementById("password").value;
  passwordtext.innerText = "";
  if (pass == "") {
    password.style.border = "2px solid red";
    passwordtext.innerText = "Required";
    passwordtext.style.color = "red";
  } else {
    if (!validatepassword(pass)) {
      password.style.border = "2px solid red";
      passwordtext.innerText = "Invalid Password";
      passwordtext.style.color = "red";
    } else {
      password.style.border = "2px solid green";
    }
  }

  const addr = document.getElementById("address").value;
  addresstext.innerText = " ";
  if (addr == "") {
    address.style.border = "2px solid red";
    addresstext.innerText = "Required";
    addresstext.style.color = "red";
  } else {
    if (!validateaddress(addr)) {
      address.style.border = "2px solid red";
      addresstext.innerText = "Invalid Address";
      addresstext.style.color = "red";
    } else {
      address.style.border = "2px solid green";
    }
  }

  const post = document.getElementById("postalcode").value;
  postalcodetext.innerText = " ";
  if (post == "") {
    postalcode.style.border = "2px solid red";
    postalcodetext.innerText = "Required";
    postalcodetext.style.color = "red";
  } else {
    if (!validatepostalcode(post)) {
      postalcode.style.border = "2px solid red";
      postalcodetext.innerText = "Invalid Postalcode";
      postalcodetext.style.color = "red";
    } else {
      postalcode.style.border = "2px solid green";
    }
  }

  const web = document.getElementById("website").value;
  websitetext.innerText = " ";
  if (web == "") {
    website.style.border = "2px solid red";
    websitetext.innerText = "Required";
    websitetext.style.color = "red";
  } else {
    if (!validateweburl(web)) {
      website.style.border = "2px solid red";
      websitetext.innerText = "Invalid Website Url";
      websitetext.style.color = "red";
    } else {
      website.style.border = "2px solid green";
    }
  }

  const pan = document.getElementById("pancard").value;
  pancardtext.innerText = " ";
  if (pan == "") {
    pancard.style.border = "2px solid red";
    pancardtext.innerText = "Required";
    pancardtext.style.color = "red";
  } else {
    if (!validatepancard(pan)) {
      pancard.style.border = "2px solid red";
      pancardtext.innerText = "Invalid Pancard";
      pancardtext.style.color = "red";
    } else {
      pancard.style.border = "2px solid green";
    }
  }

  const num = document.getElementById("number").value;
  numbertext.innerText = " ";
  if (num == "") {
    number.style.border = "2px solid red";
    numbertext.innerText = "Required";
    numbertext.style.color = "red";
  } else {
    if (!validatenumber(num)) {
      number.style.border = "2px solid red";
      numbertext.innerText = "Invalid Number";
      numbertext.style.color = "red";
    } else {
      number.style.border = "2px solid green";
    }
  }

  const day = document.getElementById("date").value;
  datetext.innerText = " ";
  if (day == "") {
    date.style.border = "2px solid red";
    datetext.innerText = "Required";
    datetext.style.color = "red";
  } else {
    if (!validatedate(day)) {
      date.style.border = "2px solid red";
      datetext.innerText = "Invalid Date";
      datetext.style.color = "red";
    } else {
      date.style.border = "2px solid green";
    }
  }
}
