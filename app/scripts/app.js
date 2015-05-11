var app = angular.module("SDTL", ["firebase"]);

app.controller("ApplicationController", [
	"$scope",
	"$log",
	function($scope, $log) {
		$scope.jumbotronHeading = "Bloc It Off!";
		$log.debug("Application Controller is Initialized");
	}
]);

app.controller("TaskLoader", [
	"$scope",
	"$log",
	function($scope, $log) {
		var fbTaskTesting = new Firebase("https://fbtasktesting.firebaseio.com/");

		$('#priorityInput').keypress(function (e) {
			if (e.keyCode === 13) {
				var taskString = $('#taskInput').val ();
				var priorityString = $('#priorityInput').val ();
				var createdAt = (Firebase.ServerValue.TIMESTAMP);
				fbTaskTesting.push({
					task: taskString,
					priority: priorityString,
					created: createdAt
				});
			}
		});

		console.log("Task Loader is Initialized");
		console.log($scope.chores);

	}
]);  

app.controller("TaskLister", [
	"$scope",
	"$firebaseArray",
	function($scope, $firebaseArray) {
		var ref = new Firebase("https://fbtasktesting.firebaseio.com/");

		$scope.chores = $firebaseArray(ref);
		console.log($scope.chores);
	}
]);



/*app.controller("TaskLister", [
"$scope",
"$firebaseArray",

function($scope, $firebaseArray) {

var fire = new Firebase("https://fbtasktesting.firebaseio.com/");


$scope.chores = $firebaseArray(fire);

console.log($scope.chores);		
}
]);*/