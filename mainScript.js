const users = new Array();
const tickets=new Array();
let user;
users.push(new User("admin","pass",1000000));
tickets.push(0);

function User(login, password , points){
    this.login=login;
    this.password=password;
    this.points=points;
}

function addUser() {
    var log = document.getElementById("addLog").value;
    var pass = document.getElementById("setPass").value;

    if (log === "" || pass === "") {
       alert("Obydwa pola muszą być wypełnione");
    }

    else {
    users.push(new User(log,pass,0));
        alert("Uzytkownik "+log+ " został dodany");
        document.getElementById("addLog").value="";
        document.getElementById("setPass").value="";

    }
}

function loginFunction() {
    var log = document.getElementById("login").value;
    var pass = document.getElementById("logPass").value;
    if (log === "" || pass === "") {
        alert("Wszytskie pola muszą być wypełnione");
    } else {

        for (var i = 0; i < users.length; i++) {
            var temp = users[i];
            if (temp.login === log && temp.password === pass) {
                user = users[i];
                document.getElementById("log").style.display = "none";
                document.getElementById("nav").style.display = "none";
                document.getElementById("menu").style.display = "inline";
                break;
            }
            if (temp.login === log && temp.password !== pass) {
                alert("Podałeś błędne hasło");
                document.getElementById("logPass").value = "";
                break;
            }
            if (temp.login !== log && temp.password === pass) {
                alert("Nie właściwy użytkownik lub hasło");
                document.getElementById("logPass").value = "";
                break;
            }
            if (i === users.length - 1 && temp.login !== log && temp.password !== pass) {
                document.getElementById("login").value = "";
                document.getElementById("logPass").value = "";
                alert("Nie właściwy użytkownik lub hasło");
            }


        }
    }
}

function showLoginPanel(){
    document.getElementById("log").style.display = "block";
    document.getElementById("create").style.display = "none";

}
function showCreateUserPanel(){
    document.getElementById("create").style.display = "block";
    document.getElementById("log").style.display = "none";
}

function showAddReceipt(){
    document.getElementById("add").style.display = "block";
    document.getElementById("shop").style.display = "none";
    document.getElementById("account").style.display = "none";
    document.getElementById("about").innerHTML ="";
    document.getElementById("addBalance").innerHTML ="Twój stan konta to: "+user.points;


}

function showShop(){
    document.getElementById("shop").style.display = "block";
    document.getElementById("add").style.display = "none";
    document.getElementById("account").style.display = "none";
    document.getElementById("about").innerHTML ="";
    document.getElementById("chooseBalance").innerHTML ="Twój stan konta to: "+user.points;

}
function showAccount(){
    document.getElementById("account").style.display = "block";
    document.getElementById("add").style.display = "none";
    document.getElementById("shop").style.display = "none";
    document.getElementById("about").innerHTML = "Użytkownik: "+ user.login+ " \n Ilość punktów: "+ user.points;
}
function addPoints() {
    var ticket = document.getElementById("addTicket").value;
    var used=false;
    if (ticket === "") {
        alert("Proszę wprowadzić numer paragonu");
    }

    else {
                for(var i=0;i<tickets.length;i++){
                    if(tickets[i]===ticket){
                        used=true;
                        break;
                    }
                    else{
                        used=false;
                    }
                }


                if (ticket.length !== 10 || parseInt(ticket) % 3 !== 0 || used===true) {
                    alert("Błąd!!! Nieprawidłowy numer paragonu");
                } else {
                    var bonus = parseInt(ticket.slice(7));
                    user.points = user.points + bonus
                    alert("Gratulacje udało Ci się zdobyć  " + bonus + " punktów");
                    document.getElementById("addTicket").value = "";
                    document.getElementById("addBalance").innerHTML = "Twój stan konta to: " + user.points;
                    tickets.push(ticket);
                }


    }


}
function logOut(){
    location.reload();
}

function buyBall() {
    if(user.points<1000){
        alert("Nie masz wystarczającej ilości punktów");
    }
    else{
        user.points=user.points-1000;
        document.getElementById("ballImg").style.display = "none";
        document.getElementById("ballButton").style.display = "none";
        document.getElementById("chooseBalance").innerHTML ="Twój stan konta to: "+user.points;
        alert("Gratulacje kupiłeś piłkę za 1000 punktów, Twój obecny stan punktów to: "+ user.points);
    }

}
function buyBike() {
    if(user.points<5000){
        alert("Nie masz wystarczającej ilości punktów");
    }
    else{
        user.points=user.points-5000;
        document.getElementById("bikeImg").style.display = "none";
        document.getElementById("bikeButton").style.display = "none";
        document.getElementById("chooseBalance").innerHTML ="Twój stan konta to: "+user.points;
        alert("Gratulacje kupiłeś rower za 5000 punktów, Twój obecny stan punktów to: "+ user.points);
    }

}
function buyComputer() {
    if(user.points<10000){
        alert("Nie masz wystarczającej ilości punktów");
    }
    else{
        user.points=user.points-10000;
        document.getElementById("computerImg").style.display = "none";
        document.getElementById("computerButton").style.display = "none";
        document.getElementById("chooseBalance").innerHTML ="Twój stan konta to: "+user.points;
        alert("Gratulacje kupiłeś komputer za 10000 punktów, Twój obecny stan punktów to: "+ user.points);
    }

}