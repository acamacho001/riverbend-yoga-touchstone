const classOptions = [
    {
        name: "Gentle Yoga",
        description: "A slower-paced class focused on mobility, breathing, and comfortable movement."
    },
    {
        name: "Vinyasa Yoga",
        description: "A more active class that connects movement and breathing through flowing yoga poses."
    },
    {
        name: "Restorative Yoga",
        description: "A calming practice that uses supported poses and longer periods of rest."
    }
];

const classPreference = document.getElementById("class-preference");
const classResult = document.getElementById("class-result");

if (classPreference && classResult) {

    function showClassDescription(className) {
        const selectedClass = classOptions.find(function (option) {
            return option.name === className;
        });

        if (selectedClass) {
            classResult.textContent = selectedClass.description;
        } else {
            classResult.textContent = "";
        }
    }

    classPreference.addEventListener("change", function () {
        const selectedValue = classPreference.value;

        showClassDescription(selectedValue);

        localStorage.setItem("preferredClass", selectedValue);
    });

    const savedClass = localStorage.getItem("preferredClass");

    if (savedClass) {
        classPreference.value = savedClass;
        showClassDescription(savedClass);
    }
}


const form = document.querySelector("form");

if (form) {
    form.addEventListener("submit", function (event) {
        event.preventDefault();

        const nameInput = document.getElementById("name");
        const emailInput = document.getElementById("email");

        const nameError = document.getElementById("name-error");
        const emailError = document.getElementById("email-error");

        nameError.textContent = "";
        emailError.textContent = "";

        let formIsValid = true;

        if (nameInput.value.trim().length < 2) {
            nameError.textContent = "Please enter a name with at least 2 characters.";
            formIsValid = false;
        }

        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (!emailPattern.test(emailInput.value.trim())) {
            emailError.textContent = "Please enter a valid email address.";
            formIsValid = false;
        }

        if (formIsValid) {
            alert("Your request has been received.");
        }
    });
}