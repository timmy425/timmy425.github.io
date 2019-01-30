var user = prompt("剪刀，石頭，布?");
function f(computer){
    if(computer<=0.33){
        return("剪刀");    
    }
    else if(computer<=0.67){
        return("石頭");
    }
    else{
        return("布");
    }
}
var computer = Math.random();
alert("電腦出"+f(computer));
function g(user,computer){
    if(user == "剪刀"){
        if(computer == "石頭"){
            return("computer win");
        }
        else if(computer == "布"){
            return("user win");    
        }
        else{
            return("平手");
        }
    }
    else if(user == "石頭"){
        if(computer == "布"){
            return("computer win");
        }
        else if(computer == "剪刀"){
            return("user win");    
        }
        else{
            return("平手");
        }
    }
    else{
        if(computer == "剪刀"){
            return("computer win");
        }
        else if(computer == "石頭"){
            return("user win");    
        }
        else{
            return("平手");
        }
    }
}
alert(g(user,f(computer)));