
//var firstName = "james";
//var age = 32;

//console.log(firstName);

//var awsomeThoughts ="I am prateek and I am awesome";
//console.log(awsomeThoughts);
//var funThoughts = awsomeThoughts.replace("awesome","FUN");
//console.log(funThoughts);
//$("#main").append(funThoughts);


/*
This is empty on purpose! Your code to build the resume will go here.
 */

var formattedName = HTMLheaderName.replace("%data%","Prateek Singh");
var formattedRole = HTMLheaderRole.replace("%data%","Web Developer");
$("#header").append(formattedName);
$("#header").append(formattedRole);