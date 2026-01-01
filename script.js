const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;

const form = document.querySelector("form");
const email = document.querySelector("input");
const submitBtn = document.querySelector("button");

let p = document.createElement("p");

submitBtn.addEventListener("click", (e) => {
    e.preventDefault();

    if (email.value === "") {
        p.textContent = "Email cannot be empty.";
        p.classList.add("error");
        email.insertAdjacentElement("afterend", p);
    } else if (emailRegex.test(email.value)) {
        email.value = "";
        p.textContent =
            "Thanks for subscribing! You'll be the first to know when we launch!";
        p.classList.add("success");
        p.classList.remove("error");
        email.insertAdjacentElement("afterend", p);

        setTimeout(() => {
            p.remove();
            p.classList.remove("success");
            p.classList.remove("error");
        }, 5000);
    } else {
        p.textContent = "Please enter a valid email.";
        p.classList.add("error");
        email.insertAdjacentElement("afterend", p);
    }
});

email.addEventListener("keypress", (event) => {
    if (event.key === "Enter") {
        event.preventDefault();
        submitBtn.click();
    }
});
