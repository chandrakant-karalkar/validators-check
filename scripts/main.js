window.onload = () => {
    let getElements = () => {
        // First Name
        let firstNameInput = document.getElementById("first-name");
        let firstNameError = document.getElementById("error-first-name");
        // Birth date
        let birthDateInput = document.getElementById("birth-date");
        let birthDateError = document.getElementById("error-birth-date");
        // Submit Button
        let submitButton = document.getElementById("submit");
        return {
            firstName: {
                input: firstNameInput,
                errLable: firstNameError
            },
            birthDate:{
              input: birthDateInput,
              errLable: birthDateError
            },
            submitButton: submitButton
        };
    };

    let elements = getElements();
    elements.submitButton.onclick = () => {
        let firstNameValidator = Object.create(StringRequiredValidator);
        firstNameValidator.init(elements.firstName.input.value);
        elements.firstName.errLable.innerHTML = firstNameValidator.validate() ?
            "" : "* FirstName is Required!";

        let birthDateValidator = Object.create(PastDateRequiredValidator);
        birthDateValidator.init(elements.birthDate.input.value);
        elements.birthDate.errLable.innerHTML = birthDateValidator.validate() ?
            "" : "* Invalid of future Date";
    };
};