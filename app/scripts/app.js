var app = angular.module("SDTL", []);

app.controller("ApplicationController", [
	"$scope",
	"$log",
	function($scope, $log) {
		$scope.jumbotronHeading = "Bloc It Off!";
		$log.debug("ApplicationController");
		}
]);

app.controller("TaskLoader", [
	"$scope",
	"$log",
	

	function($scope, $log) {

	// load test data
	$scope.chores = [
			{task: "test", priority: "test"},
			{task: "test2", priority: "test2"}];
			
	var fbTaskTesting = new Firebase("https://fbtasktesting.firebaseio.com/");
	
		
			$('#priorityInput').keypress(function (e) {
			 
			if (e.keyCode === 13) {
				var taskString = $('#taskInput').val ();
				var priorityString = $('#priorityInput').val ();
				fbTaskTesting.push({task: taskString, priority: priorityString});

	      		}
	      	

	    	});

	  

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
	        
	        // load record objects into array of objects
	        $scope.chores.push(record);    		

		});  
	  $log.debug("Task Loader is Initialized");
	  console.log($scope.chores);

	    

  }]);


app.controller("TaskLister", [
	"$scope",
	"$log",
	function($scope, $log) {
		
		

		// var choresArray = sync.$asArray();
		// $scope.chores = choresArray;

	
		
		
		
	}
]);