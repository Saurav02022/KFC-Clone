let HomePage = () => {
  window.location.href = "index.html";
};

let getData = JSON.parse(localStorage.getItem("SignUp_Data"));

let flag;

let Login = () => {
  let email = document.getElementById("email").value;

  let password = document.getElementById("password").value;

  getData.forEach((el) => {
    if (email == el.email) {
      if (password == el.password) {
        flag = true;
      }
    } else {
      flag = false;
    }
  });

  if (flag == true) {
    window.location.href = "index.html";
  } else {
    alert("Please fill correct Details");
  }
};
