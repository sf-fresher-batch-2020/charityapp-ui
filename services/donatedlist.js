class AddDetail{
    addlist = function(listobj){
       var listTemp = JSON.parse(localStorage.getItem("mydetail"));
       var lists= listTemp ? listTemp:[];
       lists.push(listobj);
       localStorage.setItem("mydetail",JSON.stringify(lists));
       let result="success";
       return result;
        }
}