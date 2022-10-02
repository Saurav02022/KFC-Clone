let HomePage = () => {
  window.location.href = "index.html";
};

let flag;

let getData = JSON.parse(localStorage.getItem("SignUp_Data")) || [];

let Create_Account = () => {
  const first_name = document.getElementById("First Name").value;

  const last_name = document.getElementById("Last Name").value;

  const email = document.getElementById("Email").value;

  const password = document.getElementById("Password").value;

  let User = {
    first_name,
    last_name,
    email,
    password,
  };

  getData.map((el) => {
    if (el.email == email) {
      flag = true;
    } else {
      flag = false;
    }
  });
  if (flag == true) {
    alert("Your are already user Please Login");
    window.location.href='Login.html'
  } else {
    if (first_name !== "") {
      if (last_name !== "") {
        if (email !== "") {
          if (password.length >= 8) {
            getData.push(User);
            localStorage.setItem("SignUp_Data", JSON.stringify(getData));
            window.location.href = "Login.html";
          } else {
            alert("Password length should be 8 or more than");
          }
        } else {
          alert("Please fill Email address");
        }
      } else {
        alert("Please fill the Last Name");
      }
    } else {
      alert("Please fill the First Name");
    }
  }
};
