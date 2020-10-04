
//=================================================================   
//====================== JAVA OBJECTS & MORE ======================
//=================================================================

var Person = function (name, yearOfBirth, job) {
    this.name = name;
    this.yearOfBirth = yearOfBirth;
    this.job = job;
}

Person.prototype.calculateAge = function () { return 2018 - this.yearOfBirth };
Person.prototype.yearsToRetire = function () { return 65 - (2018 - this.yearOfBirth) };

Person.prototype.funnyComment = function () {
    if (this.yearOfBirth > 1998) {
        return "You have more years of work ahead than years of life!"
    } else if (this.yearOfBirth > 1964 && this.yearOfBirth < 1998) {
        return "You are on the plateau of your working life!"
    }
    else if (this.yearOfBirth > 1953 && this.yearOfBirth < 1964) {
        return "You are going down the hill of your working life!"
    } else { return "This folk shouldn't be here!" }
};

var elias = new Person('Elias', 1990, 'teacher');
var vanessa = new Person('Vanessa', 1969, 'designer');
var carlos = new Person('Carlos', 1948, 'retired');

//CREATING A DYNAMIC TABLE
function dyTable() {
    txt = "<table border='1'>"
    txt += "<tr>"
    txt += "<th>First Name</th>"
    txt += "<th>Birth Year</th>"
    txt += "<th>Job</th>"
    txt += "<th>Time to Retire</th>"
    txt += "<th>Funny Comment</th>"
    txt += "</tr>"
    txt += "<tr>"
    txt += "<td>" + elias.name + "</td>"
    txt += "<td>" + elias.yearOfBirth + "</td>"
    txt += "<td>" + elias.job + "</td>"
    txt += "<td>" + elias.yearsToRetire() + "</td>"
    txt += "<td>" + elias.funnyComment() + "</td>"
    txt += "</tr>"
    txt += "<tr>"
    txt += "<td>" + vanessa.name + "</td>"
    txt += "<td>" + vanessa.yearOfBirth + "</td>"
    txt += "<td>" + vanessa.job + "</td>"
    txt += "<td>" + vanessa.yearsToRetire() + "</td>"
    txt += "<td>" + vanessa.funnyComment() + "</td>"
    txt += "</tr>"
    txt += "<tr>"
    txt += "<td>" + carlos.name + "</td>"
    txt += "<td>" + carlos.yearOfBirth + "</td>"
    txt += "<td>" + carlos.job + "</td>"
    txt += "<td>" + carlos.yearsToRetire() + "</td>"
    txt += "<td>" + carlos.funnyComment() + "</td>"
    txt += "</tr>"
    var ename = document.getElementById("ename").value;
    var ebirth = document.getElementById("ebirth").value;
    var ejob = document.getElementById("ejob").value;
    console.log(ename, ebirth, ejob);
    var newEmployee = new Person(ename, ebirth, ejob);
    txt += "<tr>"
    txt += "<td>" + newEmployee.name + "</td>"
    txt += "<td>" + newEmployee.yearOfBirth + "</td>"
    txt += "<td>" + newEmployee.job + "</td>"
    txt += "<td>" + newEmployee.yearsToRetire() + "</td>"
    txt += "<td>" + newEmployee.funnyComment() + "</td>"
    txt += "</tr>"
    console.log(newEmployee);

    txt += "</table>";

    document.getElementById("dytable").innerHTML = txt;
}