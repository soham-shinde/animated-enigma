document.addEventListener('DOMContentLoaded', function () {
    const form = document.querySelector('form');

    form.addEventListener('submit', function (event) {
        event.preventDefault();

        resetErrors();

        const nameInput = document.getElementById('nameInput');
        const emailInput = document.getElementById('emailInput');
        const phoneInput = document.getElementById('phoneInput');
        const passwordInput = document.getElementById('passwordInput');
        const confirmPasswordInput = document.getElementById('confirmPasswordInput');
        const genderInput = document.getElementById('genderInput');
        const birthDateInput = document.getElementById('birthDateInput');
        const addressInput = document.getElementById('addressInput');
        const cityInput = document.getElementById('cityInput');
        const pincodeInput = document.getElementById('pincodeInput');
        

        if (!isValidName(nameInput.value)) {
            showError(nameInput, 'Please enter a valid name.');
        }

        if (!isValidEmail(emailInput.value)) {
            showError(emailInput, 'Please enter a valid email address.');
        }

        if (!isValidPhoneNumber(phoneInput.value)) {
            showError(phoneInput, 'Please enter a valid phone number.');
        }

        if (!isValidPassword(passwordInput.value)) {
            showError(passwordInput, 'Please enter a valid password (at least 8 characters).');
        }

        if (passwordInput.value !== confirmPasswordInput.value) {
            showError(confirmPasswordInput, 'Passwords do not match.');
        }

        if (genderInput.value === 'Select Gender') {
            showError(genderInput, 'Please select a gender.');
        }

        if (!isValidDate(birthDateInput.value)) {
            showError(birthDateInput, 'Please enter a valid date of birth.');
        }

        if (!isValidAddress(addressInput.value)) {
            showError(addressInput, 'Please enter a valid address.');
        }

        if (!isValidCity(cityInput.value)) {
            showError(cityInput, 'Please enter a valid city.');
        }

        if (!isValidPincode(pincodeInput.value)) {
            showError(pincodeInput, 'Please enter a valid pin code.');
        }

        if (form.querySelectorAll('.is-invalid').length === 0) {
            alert('Form submitted successfully!');
            sendDataToServer({
                name : nameInput.value,
                email : emailInput.value,
                phonenumber : phoneInput.value,
                password : passwordInput.value,
                gender : genderInput.value,
                birthdate : birthDateInput.value,
                address : addressInput.value,
                city : cityInput.value,
                pincode : pincodeInput.value
            });
        }
    });

    function resetErrors() {
        const errorElements = document.querySelectorAll('.is-invalid');
        errorElements.forEach(function (element) {
            element.classList.remove('is-invalid');
            const errorContainer = element.parentElement.querySelector('.invalid-feedback');
            if (errorContainer) {
                errorContainer.remove();
            }
        });
    }

    function showError(input, message) {
        input.classList.add('is-invalid');
        const errorContainer = document.createElement('div');
        errorContainer.className = 'invalid-feedback';
        errorContainer.innerText = message;
        input.parentElement.appendChild(errorContainer);
    }

    function isValidName(name) {
        return name.trim() !== '';
    }

    function isValidEmail(email) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }

    function isValidPhoneNumber(phone) {
        const phoneRegex = /^[0-9]{10}$/;
        return phoneRegex.test(phone);
    }

    function isValidPassword(password) {
        return password.length >= 8;
    }

    function isValidDate(date) {
        return date !== '';
    }

    function isValidAddress(address) {
        return address.trim() !== '';
    }

    function isValidCity(city) {
        return city.trim() !== '';
    }

    function isValidPincode(pincode) {
        const pincodeRegex = /^[0-9]{6}$/;
        return pincodeRegex.test(pincode);
    }

    function sendDataToServer(formData) {
        // {
        //     name : nameInput.value,
        //     email : emailInput.value,
        //     phonenumber : phoneInput.value,
        //     password : passwordInput.value,
        //     gender : genderInput.value,
        //     birthdate : birthDateInput.value,
        //     address : addressInput.value,
        //     city : cityInput.value,
        //     pincode : pincodeInput.value
        // }
        var data = 'name=' + formData.name + '&email=' + formData.email + '&phonenumber=' + formData.phonenumber + '&gender=' + formData.gender + 
                    '&birthdate='+ formData.birthdate + '&address=' + formData.address + '&city=' + formData.city + '&pincode=' + formData.pincode;
        
        xhr = new XMLHttpRequest();
        xhr.open('POST', 'output.php', true);
        xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");


        xhr.onload = function () {
            
            document.write(xhr.responseText);
        }
        xhr.send(data);
    }
});

