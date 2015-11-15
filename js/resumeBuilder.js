
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



var bio = {
	"name" : "Prateek Singh",
	"role" : "Web Developer",
	"contacts" : {
		"mobile" : "9819463435",
		"email"  : "prateek@gmail.com",
		"twitter": "@prateek",
		"github" : "prateek",
		"location": "Mumbai"
	} ,
	"welcome_message" : "fuck off!",
	"skills" : ["shitty","poopy","rusty","icky"],
	"biopic" : "images/fry.jpg"
}

var work = { 
	"jobs" : [
		{ 
			"employer" : "C-DAC",
			"title" : "PE-1",
			"dates" : "sept 2012 - Future",
			"experience": "3",
			"city" : "Mumbai",
			"description" : "How the hell am I going to get " +
							"out of here ???"
		},
		{
			"employer" : "aliens",
			"title" : "Space-Cowboy",
			"dates" : "Unknown Future",
			"experience": "0",
			"city" : "chunar",
			"description" : "How the hell am I supposed to be " +
							"the one ???"
		}
	]
}
var education = {
	"schools" : [
		{
			"name" : "C-DAC ACTS",
			"location" : "Bangalore",
			"degree" : "Masters",
			"majors" : "SCADA",
			"dates" : 2012,
			"url" : "http://acts.cdac.in"
		},
		{
			"name" : "CERT",
			"location" : "Meerut",
			"degree" : "UG",
			"majors" : "B.TECH",
			"dates" : 2010,
			"url" : "http://cert.in"	
		}
	],
	"onlineCourses" : [
		{
			"name" : "javaScript Creash Course",
			"location" : "Mumbai",
			"school": "udacity",
			"dates" : 2012,
			"url" : "http://udacity.in"
		}
	]
}

var projects = {
	"projects" : [
		{
			"title" : "SCADA",
			"dates" : 2012,
			"description" : "nothing to do",
			"images" : [ "images/scada.jpg" ],
			"location": "Mumbai"
		},
		{
			"title" : "UTM",
			"dates" : 2013,
			"description" : "again nothing to do",
			"images" : [ "images/utm.jpg" ],
			"location": "Mumbai"
		},
		{
			"title" : "CLOUD",
			"dates" : 2015,
			"description" : "learned openstack",
			"images" : [ "images/cloud.jpg" ],
			"location": "Mumbai"
		}
	]
}
/*
var formattedWorkTitle = HTMLworkTitle.replace("%data%",work["position"]);
var formattedschoolName = HTMLschoolName.replace("%data%",education.name);
$("#education").append(HTMLschoolStart);
$("#workExperience").append(HTMLworkStart);
$("#workExperience").append(formattedWorkTitle);
$("#education").append(formattedschoolName);
*/
//var formattedSkillTitle;


var formattedName = HTMLheaderName.replace("%data%",bio.name);
var formattedRole = HTMLheaderRole.replace("%data%",bio.role);

var formattedImage = HTMLbioPic.replace("%data%",bio.biopic)
var formattedMsg   = HTMLwelcomeMsg.replace("%data%",bio.welcome_message);



$("#header").prepend(formattedRole);
$("#header").prepend(formattedName);
$("#header").append(formattedImage);
$("#header").append(formattedMsg);



function displayWork () {

	if(bio.skills.length) {
		$("#header").append(HTMLskillsStart);
		formattedSkillTitle	= HTMLskills.replace("%data%",bio.skills[0]);
		$("#skills").append(formattedSkillTitle);
		formattedSkillTitle	= HTMLskills.replace("%data%",bio.skills[1]);
		$("#skills").append(formattedSkillTitle);
		formattedSkillTitle	= HTMLskills.replace("%data%",bio.skills[2]);
		$("#skills").append(formattedSkillTitle);
		formattedSkillTitle	= HTMLskills.replace("%data%",bio.skills[3]);
		$("#skills").append(formattedSkillTitle);
	}
	//var item;

	for(item in work.jobs) {
		$("#workExperience").append(HTMLworkStart);
		var formattedWorkEmployer = HTMLworkEmployer.replace("%data%",work.jobs[item].employer);
		var formattedWorkTitle = HTMLworkTitle.replace("%data%",work.jobs[item].title);
		console.log(work.jobs[item].title);
		var formattedWorkEmployerTitle = formattedWorkEmployer + formattedWorkTitle;
	//	$("#workExperience").append(formattedWorkEmployerTitle);
		$(".work-entry:last").append(formattedWorkEmployerTitle);


		var formattedWorkDates = HTMLworkDates.replace("%data%",work.jobs[item].dates);
		$(".work-entry:last").append(formattedWorkDates);

		var formattedWorkDescription = HTMLworkDescription.replace("%data%",work.jobs[item].description);
		$(".work-entry:last").append(formattedWorkDescription);	
	
	}

}


displayWork();



//$("#main").append(internationalizeButton);
function inName (name) {
	name = name.trim().split(" ");
	console.log(name);
	name[1] = name[1].toUpperCase();
	name[0] = name[0].slice(0,1).toUpperCase() +
			name[0].slice(1).toLowerCase();
	return name[0] + " " +name[1];
}

$('#main').append(internationalizeButton);

projects.display = function() {
	for(project in projects.projects) {
		 $("#projects").append(HTMLprojectStart);
		 console.log(projects.projects[project].title);
		 $(".project-entry:last").append(HTMLprojectTitle.replace("%data%",projects.projects[project].title));
		 $(".project-entry:last").append(HTMLprojectDates.replace("%data%",projects.projects[project].dates));
		 $(".project-entry:last").append(HTMLprojectDescription.replace("%data%",projects.projects[project].description));
		 $(".project-entry:last").append(HTMLprojectImage.replace("%data%",projects.projects[project].images));
	}
}

projects.display();

$("#mapDiv").append(googleMap);