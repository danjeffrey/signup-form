const updateError = (isValid) => {
  const pwError = document.getElementById("passwordError");
  if (isValid) {
    pwError.textContent = "";
    pwError.removeAttribute("class");
  } else {
    pwError.textContent = "The passwords did not match.";
  }
};

// validate form on submission
function validateForm(e) {
  e.preventDefault();

  const pw = document.getElementById("password").value.trim();
  const pwc = document.getElementById("passwordConfirm").value.trim();

  if (pw !== pwc) {
    updateError(false);
  } else {
    event.target.submit();
  }
}

const theForm = document.getElementById("theForm");
// theForm.noValidate = true;
theForm.addEventListener("submit", validateForm);

// // validate form on submission
// function validateForm(e) {
//   const form = e.target;
//   if (form.checkValidity()) {
//     // form is valid - make further checks
//      let pw = document.getElementById('password');
//      let pwc = document.getElementById('passwordConfirm');
//     if ( pw === pwc ) {
//         pw.validity = true;
//     }
//   }
//   else {
//     // form is invalid - cancel submit
//     pw.validity = false;
//     e.preventDefault();
//   }

// };

// const theForm = document.getElementById('theForm');
// // theForm.noValidate = true;
// theForm.addEventListener('submit', validateForm);
