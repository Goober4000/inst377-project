document.getElementById('nameForm').onsubmit = function(e) {
    console.log("Form submission triggered");
    e.preventDefault();

    var firstName = document.getElementById('firstName').value;
    var lastName = document.getElementById('lastName').value;

    console.log("First Name:", firstName);
    console.log("Last Name:", lastName);

    modal.style.display = "none"; 

    var formData = {
        firstName: firstName,
        lastName: lastName
    };

    fetch('/customer', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData)
    })
    .then(response => response.json())
    .then(data => {
        console.log('Success:', data);
    })
    .catch((error) => {
        console.error('Error:', error);
    });
};
