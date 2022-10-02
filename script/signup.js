let HomePage = () => {
  window.location.href = "index.html";
};

let btn = document.getElementById("sk_btn");
btn.addEventListener("click", () => {
  Create_Account();
});

let flag;

let getData = JSON.parse(localStorage.getItem("SignUp_Data")) || [];

let Data = JSON.parse(localStorage.getItem("SignUp_Data"));

let Create_Account = () => {
  event.preventDefault();

  let first_name = document.getElementById("First_Name").value;

  let last_name = document.getElementById("Last_Name").value;

  let email = document.getElementById("Email").value;

  let password = document.getElementById("Password").value;

  let User = {
    first_name,
    last_name,
    email,
    password,
  };
  
  if (first_name !== "") {
    if (last_name !== "") {
      if (email !== "") {
        if (password.length >= 8) {
          getData.push(User);
          localStorage.setItem("SignUp_Data", JSON.stringify(getData));
          window.location.href = "./Login.html";
        } else {
          alert("Password should be more 8 characters");
        }
      } else {
        alert("Please fill the Email Address");
      }
    } else {
      alert("Please fill the First Name");
    }
  } else {
    alert("Please fill the First Name");
  }
};
