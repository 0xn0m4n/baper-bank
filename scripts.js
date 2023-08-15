// add click event handler with the submit button 
document.getElementById('btn-submit').addEventListener('click', function(){
    // get the email address inside the email field
    // always remember to use .value to get text from an input field
    const emailField = document.getElementById('user-mail');
    const email = emailField.value;
    // get the password inside the password Field
    // set id on the html element 
    // get the element
    // get the value from the element
    const passField = document.getElementById('pass-field');
    const password = passField.value;
    // Danger : do not verify email password on the client side
    // verify valid user or invalid user 
   if (email === 'nomanshikder@gmail.com' && password === 'noman@2023' ){
    window.location.href = 'bank.html';
   }
   else {
    alert('oi churaiye tiya curi goitto killay aissos');
   }


})
