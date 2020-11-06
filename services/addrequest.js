class AddRequest{
    addrequest = function(listobj){
       var listTemp = JSON.parse(localStorage.getItem("LIST"));
       var lists= listTemp ? listTemp:[];
       lists.push(listobj);
       localStorage.setItem("LIST",JSON.stringify(lists));
       let result="success";
       return result;
        }
}
