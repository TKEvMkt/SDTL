(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);throw new Error("Cannot find module '"+o+"'")}var f=n[o]={exports:{}};t[o][0].call(f.exports,function(e){var n=t[o][1][e];return s(n?n:e)},f,f.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
var app = angular.module("SDTL", []);

app.controller("ApplicationController", [
	"$scope",
	"$log",
	function($scope, $log) {
		$scope.jumbotronHeading = "Bloc It Off!";
		$log.debug("ApplicationController");
	}
]);

app.controller("TaskLister", [
	"$scope",
	"$log",
	function($scope, $log) {
		
		$scope.buckets = [{task: "test", priority: "test"}];

		fbTaskTesting.on('child_added', function(dataSnapshot) {


			
			// These next four lines are just learning more about firebase tools.
			var x = dataSnapshot.exists();
			console.log(x);
			var y = dataSnapshot.numChildren();
			console.log(y);

			// create a new variable with all the record info for each child
	        var record = dataSnapshot.val();

	        //verify that records are created correctly
	        console.log("Task: " + record.task + "\n" + "Priority: " + record.priority);
	        
	        // load records into buckets array of objects
	        $scope.buckets.push(record);    		

		});
		
		console.log($scope.buckets);
		
	}
]);
},{}]},{},[1]);