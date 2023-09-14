document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('registration-form');
  const profilePictureInput = document.getElementById('profile-picture');
  const profilePicturePreview = document.getElementById('profile-picture-preview');
  const passwordInput = document.getElementById('password');

  // Function to handle file input change
  function handleFileInputChange(event) {
    const fileInput = event.target;

    if (fileInput.files && fileInput.files[0]) {
      const reader = new FileReader();

      reader.onload = function (e) {
        // Set the source of the preview image to the selected file
        profilePicturePreview.src = e.target.result;
        // Display the circular frame
        profilePicturePreview.parentElement.style.display = 'block';
      };

      reader.readAsDataURL(fileInput.files[0]);
    } else {
      // If no file is selected, hide the circular frame
      profilePicturePreview.parentElement.style.display = 'none';
    }
  }

  // Function to handle form submission
  function handleFormSubmit(event) {
    event.preventDefault();

    // Get the form data
    const profileName = document.getElementById('profile-name').value;
    const password = passwordInput.value; // Get the password
    const additionalInfo = document.getElementById('additional-info').value;

    // Implement your registration logic here (e.g., send a POST request to the server)

    // For demonstration purposes, log the input values to the console
    console.log(`Profile Name: ${profileName}`);
    console.log(`Password: ${password}`);
    console.log(`Additional Info: ${additionalInfo}`);

    // Assuming the form submission is successful, redirect to the Edit Account page
    redirectToEditAccount();
  }

  // Function to redirect to the Edit Account page
  function redirectToEditAccount() {
    const NextButton = document.getElementById('Next-button');
    NextButton.addEventListener ('click', () => {
    window.location.href = '/edit-account';
  });
  }

  // Listen for file input change event
  profilePictureInput.addEventListener('change', handleFileInputChange);

  // Listen for form submission
  form.addEventListener('submit', handleFormSubmit);
});
