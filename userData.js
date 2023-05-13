// *****register* user****
function register(event){
    event.preventDefault();
    var UserName = document.getElementById("name").value;
    var UserEmail = document.getElementById("email").value;
    var UserPassword = document.getElementById("password").value;
    var UserConfirmPassword = document.getElementById("confirmPassword").value; 
    var fKartProducts = [];

    if(UserName && UserEmail && UserPassword && UserConfirmPassword){
        if(UserPassword.length >= 8 && UserConfirmPassword.length >= 8){
            if(UserPassword == UserConfirmPassword){              
              var fKartUsers = {fKartUserName: UserName, fKartUserEmail: UserEmail, fKartUserPassword: UserPassword, fKartUserConfirmPassword: UserConfirmPassword, fKartProducts,};
              var multiUsers = JSON.parse(localStorage.getItem("fKartUsers")) || [];
              var flagForEmail = false;
              
              for(var i = 0; i<multiUsers.length; i++){
                if(multiUsers[i].fKartUserEmail == UserEmail){
                  flagForEmail = true;
                }
              }
              if(!flagForEmail){
                multiUsers.push(fKartUsers);
                localStorage.setItem("fKartUsers", JSON.stringify(multiUsers));
                alert("Registered Successfully.");
                 UserName = document.getElementById("name").value = "";
                 UserEmail = document.getElementById("email").value ="";
                 UserPassword = document.getElementById("password").value ="";
                 UserConfirmPassword = document.getElementById("password").value =""; 
                 
                }else{
                    alert("You're Already Registered with this Email")
                    window.location.href = `./Login.html`;
              }
            }else{
              alert("Passwords doesn't Match.")
            }
          }else{
            alert("Passwords must be more than Eight");
          }
    }else{
        alert("All fields are Mandatory");
    }
}

// *****Login user*****
function login(event) {
    event.preventDefault();
    var UserEmail = document.getElementById("email").value;
    var UserPassword = document.getElementById("password").value;

    var fKartLogin = JSON.parse(localStorage.getItem("fKartUsers"));
    var flagForEmail = false;
    var currentUser;
    for(var i=0; i<fKartLogin.length; i++){
      if(fKartLogin[i].fKartUserEmail == UserEmail && fKartLogin[i].fKartUserPassword == UserPassword){
        flagForEmail = true;
        currentUser = fKartLogin[i];
      }
    }if(flagForEmail == true){  
      localStorage.setItem("fKartActiveUser", JSON.stringify(currentUser));
      window.location.href = `./Homepage.html`;
      alert("Logged in Successflly... ")
    }else{
      alert("Please Register to Login..")
      window.location.href = `./Register.html`;
    }
}