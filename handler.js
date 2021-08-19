document.getElementById('btn-handler').addEventListener('click',function(){
    const emailField=document.getElementById('user-email');
    const useremail=emailField.value;
    // console.log(useremail);
    // get user password 
    
        const passwordField=document.getElementById('user-password');
        const userpassword=passwordField.value;
        // console.log(userpassword);
        // check email and passwprd 
        if(useremail== 'rafi.com' && userpassword== 'secret'){
            // transper anptherr page 
            window.location.href="banking.html";
        }

  
});
 
