class ListService 
{
    save = function(obj){
        var temp = JSON.parse(localStorage.getItem("LIST"));
        var list = temp ? temp : [];
        list.push(obj);       
        localStorage.setItem("LIST", JSON.stringify(list ) );
    }
    list = function(){
        var temp = JSON.parse(localStorage.getItem("LIST"));
        var list = temp ? temp : [];
        return list;
    }
}