class RegisterService{
    register = function(detail){
       var usersTemp = JSON.parse(localStorage.getItem("USERS"));
       var users= usersTemp ? usersTemp:[];
       users.push(detail);
       localStorage.setItem("USERS",JSON.stringify(users));
       let result="success";
       return result;
        }
}
