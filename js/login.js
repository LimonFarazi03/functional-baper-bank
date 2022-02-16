document.getElementById('submit-btn').addEventListener('click', function() {
    // User Email
    const emailField = document.getElementById('user-email');
    const userEmail = emailField.value;
    // User Password
    const passwordField = document.getElementById('user-password');
    const userPassword = passwordField.value;
    // console.log(userPassword)
    // Condition
    if (userEmail == 'abidislamabir@gmail.com' && userPassword == '955685531') {
        document.getElementById("submit-btn").onclick = function() {
            location.href = "banking.html";
        };
    } else if (userEmail == '' && userPassword == '') {
        alert('Please Fill Up Username & Password')
    } else {
        alert('Use Correct Username & Password')
    }
})