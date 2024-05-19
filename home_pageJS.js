document.getElementById("nameForm").onsubmit = function(e) {
    e.preventDefault();
    var firstName = document.getElementById("firstName").value;
    var lastName = document.getElementById("lastName").value;
    console.log("First Name:", firstName);
    console.log("Last Name:", lastName);
    modal.style.display = "none"; 
}
