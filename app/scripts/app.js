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

		// var updateObject = function(original, updates) {

		// };

		// var priorityChoices = {
		// 	0: "High",
		// 	1: "Medium",
		// 	2: "Low",
		// };
		// $scope.priorityChoices = priorityChoices;

		// var getPriorityDisplayValue = function(id) {
		// 	return priorityChoices[id];
		// };

		// $scope.getPriorityDisplayValue = getPriorityDisplayValue;
		
      	// $scope.master = {};

	      $scope.update = function(task) {
			var createdAt = (new Date().getTime());
			var destructAt = (createdAt+MILLISECONDS_PER_WEEK);
			var destructDate = new Date(destructAt);
			var destructEd = (destructDate.toString());

			var now = (new Date()).getTime();
			var newTask = angular.copy(task);
			var newTaskDefaultDates = {
				created: now,
				destruct: destructAt,
				killtime: destructEd
			};
			newTask.created = newTaskDefaultDates.created;
			newTask.destruct = newTaskDefaultDates.destruct;
			newTask.killtime = newTaskDefaultDates.killtime;

			// // newTask.update(newTaskDefaultDates);
			// for (prop in newTaskDefaultDates) {
			// 	if (newTaskDefaultDates.hasOwnProperty(prop)) {
			// 		newTask[prop] = newTaskDefaultDates[prop];
			// 	}
			// }
			// updateObject(newTask, newTaskDefaultDates)


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



