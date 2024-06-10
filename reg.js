function submitForm(event) {
    event.preventDefault();

    // Get form data
    const formData = new FormData(event.target);
    const name = formData.get('name');
    const email = formData.get('email');
    const course = formData.get('course');

    // Display thank you message
    document.getElementById('registrationForm').reset();
    document.getElementById('registrationForm').classList.add('hidden');
    document.getElementById('thankYouMessage').classList.remove('hidden');
}
