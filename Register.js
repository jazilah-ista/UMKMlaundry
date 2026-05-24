document.getElementById('registerForm').addEventListener('submit', function(e) {
    e.preventDefault();

    const role = document.getElementById('role-select').value;
    const name = document.getElementById('name').value;
    const phone = document.getElementById('phone').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirm_password').value;
    const terms = document.getElementById('terms').checked;

    if (!terms) {
        alert('Anda harus menyetujui syarat dan ketentuan');
        return;
    }

    if (password !== confirmPassword) {
        alert('Password tidak sama');
        return;
    }

    const userData = {
        role: role,
        name: name,
        phone: phone,
        email: email,
        password: password
    };

    localStorage.setItem('laundryku_user', JSON.stringify(userData));

    const btn = this.querySelector('button[type="submit"]');
    const originalContent = btn.innerHTML;

    btn.disabled = true;

    btn.innerHTML = `
        <svg class="animate-spin h-5 w-5 text-white"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24">

            <circle class="opacity-25"
            cx="12"
            cy="12"
            r="10"
            stroke="currentColor"
            stroke-width="4"></circle>

            <path class="opacity-75"
            fill="currentColor"
            d="M4 12a8 8 0 018-8V0C5.373
            0 0 5.373 0 12h4zm2
            5.291A7.962 7.962 0 014
            12H0c0 3.042 1.135 5.824
            3 7.938l3-2.647z"></path>
        </svg>

        <span>Mendaftarkan...</span>
    `;

    setTimeout(() => {

        btn.classList.replace('bg-secondary', 'bg-green-600');

        btn.innerHTML = `
            <span class="material-symbols-outlined">check_circle</span>
            <span>Berhasil Terdaftar!</span>
        `;

        setTimeout(() => {
            window.location.href = "login.html";
        }, 1500);

    }, 1500);
});

const inputs = document.querySelectorAll('input');

inputs.forEach(input => {

    input.addEventListener('focus', () => {
        input.parentElement.parentElement
        .querySelector('label')
        .classList.add('text-secondary');
    });

    input.addEventListener('blur', () => {
        input.parentElement.parentElement
        .querySelector('label')
        .classList.remove('text-secondary');
    });

});
