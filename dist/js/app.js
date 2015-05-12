(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);throw new Error("Cannot find module '"+o+"'")}var f=n[o]={exports:{}};t[o][0].call(f.exports,function(e){var n=t[o][1][e];return s(n?n:e)},f,f.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
var app = angular.module('SDTL', ['firebase', 'ui.router']);

app.config(['$stateProvider', '$locationProvider', function($stateProvider, $locationProvider){
	$locationProvider.html5Mode(true);

	$stateProvider.state('home', {
		url: '/',
		controller: 'ApplicationController',
		templateUrl: 'templates/home.html'
	});

}]);

app.controller('ApplicationController', [
	'$scope',
	'$log',
	function($scope, $log) {
		$scope.jumbotronHeading = "Bloc It Off!";
		$log.debug("Application Controller is Initialized");
	}
]);

// 1. Use $firebaseArray service
// 2. Fixed add tasks to use $firebaseArray instead of .push
// 3. consider using a form submit rather than detecting a keypress with keyCode 13

app.controller('TaskLoader', [
	'$scope',
	'$log',
	'$firebaseArray',
	function($scope, $log, $firebaseArray) {
		var ref = new Firebase('https://fbtasktesting.firebaseio.com/');

		$scope.fbTaskTesting  = $firebaseArray(ref);

		var MILLISECONDS_PER_DAY = 24 * 60 * 60 * 1000;
		var MILLISECONDS_PER_WEEK = 7 * MILLISECONDS_PER_DAY;

		$('#priorityInput').keypress(function (e) {
			if (e.keyCode === 13) {
				var taskString = $('#taskInput').val ();
				var priorityString = $('#priorityInput').val ();
				var createdAt = (new Date().getTime());
				var destructAt = (createdAt+MILLISECONDS_PER_WEEK);
				var destructDate = new Date(destructAt);
				var destructEd = (destructDate.toString());
				
				var newTask = {
					task: taskString,
					priority: priorityString,
					created: createdAt,
					destruct: destructAt,
					killtime: destructEd
				};
				// fbTaskTesting.push(newTask);

				$scope.fbTaskTesting.$add(newTask);

			}
		});

		console.log('Task Loader is Initialized');
		// console.log($scope.chores);
	}
]);  

app.controller('TaskLister', [
	'$scope',
	'$firebaseArray',
	function($scope, $firebaseArray) {
		var refasdf = new Firebase('https://fbtasktesting.firebaseio.com/');

		$scope.chores = $firebaseArray(refasdf);
		console.log($scope.chores);
	}
]);




},{}]},{},[1]);