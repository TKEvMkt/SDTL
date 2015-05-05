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
		
		$scope.newJobs = [
			{task: "test", priority: "test"},
			{task: "test2", priority: "test2"}];

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
	        $scope.newJobs.push(record);    		

		});
		
		console.log($scope.newJobs);
		
	}
]);