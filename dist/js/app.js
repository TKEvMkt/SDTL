(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);throw new Error("Cannot find module '"+o+"'")}var f=n[o]={exports:{}};t[o][0].call(f.exports,function(e){var n=t[o][1][e];return s(n?n:e)},f,f.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
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
				fbTaskTesting.push({
					task: taskString,
					priority: priorityString,
					createdAt: (new Date())
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
},{}]},{},[1]);