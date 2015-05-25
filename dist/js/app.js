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

app.controller('TaskLoader', [
	'$scope',
	'$log',
	'$firebaseArray',
	function($scope, $log, $firebaseArray) {
		var ref = new Firebase('https://fbtasktesting.firebaseio.com/');

		$scope.fbTaskTesting  = $firebaseArray(ref);

		
		var MILLISECONDS_PER_DAY = 24 * 60 * 60 * 1000;
		var MILLISECONDS_PER_WEEK = 7 * MILLISECONDS_PER_DAY;

		// My attempt at refactoring based on Ryan's example
		var updateObject = function(original, updates) {

		};

		var priorityChoices = [{
			"id": 0, 
			"label": "High"},
			{
			"id": 1,
			"label": "Medium"},
			{
			"id": 2,
			"label": "Low"}];
			
		$scope.priorityChoices = priorityChoices;

		var getPriorityDisplayValue = function(id) {
			return priorityChoices[id];
				};

		$scope.getPriorityDisplayValue = getPriorityDisplayValue;
		
      	$scope.master = {};
		
	
	      $scope.update = function(task) {
			
			var now = (new Date()).getTime();
			var newTask = angular.copy(task);
			var newTaskDefaultDates = {
				created: now,
				destruct: (now+MILLISECONDS_PER_WEEK),
				killtime: ((now+MILLISECONDS_PER_WEEK).toString())
			};
			newTask.created = newTaskDefaultDates.created;
			newTask.destruct = newTaskDefaultDates.destruct;
			newTask.killtime = newTaskDefaultDates.killtime;

			$scope.fbTaskTesting.$add(newTask);
			$scope.reset();

	      };

	      $scope.reset = function() {
	        $scope.task = {};
	      };


		console.log('Task Loader is Initialized');
		
 }]);


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