document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('registrationForm');
    
    form.addEventListener('submit', (event) => {
        event.preventDefault();
        validateForm();
    });

    const country = document.getElementById('country');
    const state = document.getElementById('state');
    const address = document.getElementById('address');
    const sameAddressCheckbox = document.getElementById('sameAddress');
    const correspondenceAddressContainer = document.getElementById('correspondenceAddressContainer');

    country.addEventListener('change', handleCountryChange);
    sameAddressCheckbox.addEventListener('change', handleSameAddressChange);

    function handleCountryChange() {
        if (country.value === 'Polska') {
            state.disabled = false;
            state.innerHTML = `
                <option value="">Wybierz</option>
                <option value="dolnoslaskie">Dolnośląskie</option>
                <option value="kujawsko-pomorskie">Kujawsko-Pomorskie</option>
                <option value="dolnoslaskie">Podkarpackie</option>
                <option value="dolnoslaskie">Małopolskie</option>
                <option value="dolnoslaskie">Wielkopolskie</option>
            `;
        } else {
            state.disabled = true;
            state.innerHTML = '';
            state.type = 'text';
        }
        address.disabled = country.value === '';
    }

    function handleSameAddressChange() {
        correspondenceAddressContainer.style.display = sameAddressCheckbox.checked ? 'none' : 'block';
    }

    function validateForm() {
        let isValid = true;

        // Example of how you can use setCustomValidity to show custom error messages
        const firstName = document.getElementById('firstName');
        const lastName = document.getElementById('lastName');
        const email = document.getElementById('email');
        const password = document.getElementById('password');
        const repeatPassword = document.getElementById('repeatPassword');
        const phone = document.getElementById('phone');
        const birthdate = document.getElementById('birthdate');

        // Clear previous errors
        document.querySelectorAll('.error').forEach(error => error.textContent = '');

        // First name validation
        if (!firstName.value) {
            isValid = false;
            firstName.nextElementSibling.textContent = 'Imię jest wymagane';
        }

        // Last name validation
        if (!lastName.value) {
            isValid = false;
            lastName.nextElementSibling.textContent = 'Nazwisko jest wymagane';
        }

        // Email validation
        if (!validateEmail(email.value)) {
            isValid = false;
            email.nextElementSibling.textContent = 'Niepoprawny email';
        }

        // Password validation
        if (password.value.length < 8) {
            isValid = false;
            password.nextElementSibling.textContent = 'Hasło musi mieć co najmniej 8 znaków';
        }

        // Repeat password validation
        if (password.value !== repeatPassword.value) {
            isValid = false;
            repeatPassword.nextElementSibling.textContent = 'Hasła nie są takie same';
        }

        // Phone validation
        if (!validatePhone(phone.value)) {
            isValid = false;
            phone.nextElementSibling.textContent = 'Numer telefonu musi zawierać tylko cyfry';
        }

        // Birthdate validation
        if (!validateBirthdate(birthdate.value)) {
            isValid = false;
            birthdate.nextElementSibling.textContent = 'Musisz być pełnoletni';
        }

        if (isValid) {
            alert('Formularz został poprawnie wypełniony!');
        }
    }

    function validateEmail(email) {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(email);
    }

    function validatePhone(phone) {
        const re = /^[0-9]+$/;
        return re.test(phone);
    }

    function validateBirthdate(birthdate) {
        const birthDate = new Date(birthdate);
        const today = new Date();
        const age = today.getFullYear() - birthDate.getFullYear();
        const monthDiff = today.getMonth() - birthDate.getMonth();
        if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDate.getDate())) {
            age--;
        }
        return age >= 18;
    }
});
