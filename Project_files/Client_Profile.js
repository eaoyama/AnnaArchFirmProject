
window.onload = function () {
// First Name validity on Client profile page
    const f_name = document.getElementById("f_name");

    f_name.addEventListener("blur", (event) => {
        if (f_name.value.trim() === "") {
            f_name.setCustomValidity("First name is required.");
        } else {
            f_name.setCustomValidity("");
        }
        f_name.reportValidity();
    });

// Email Validity on Sign in and Client profile pages
    const email = document.getElementById("email");

    email.addEventListener("blur", (event) => {
        if (email.validity.typeMismatch) {
            email.setCustomValidity("Please enter a valid email address.");
        } else {
            email.setCustomValidity("");
        }
        email.reportValidity();
    });

}


