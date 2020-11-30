class RegisterService {
    register = function(detail) {
        var usersr = JSON.parse(localStorage.getItem("USERS")) || [];
        if (!usersr.some(user => user.email === detail.email)) {
            usersr.push(detail);
            localStorage.setItem("USERS", JSON.stringify(usersr));
            location.reload();
            console.log(detail);
            alert("continue login");
            let result = "success";
            return result;
        } else {
            alert("This mail-id is alredy taken try new mail-id");
        }
    }
}
