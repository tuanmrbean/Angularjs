var app = angular.module("mcpApp", []);
app.controller("inputInteract", ["$scope", "$log", "$timeout", function($scope, $log, $timeout) {
	console.log($log);
    $log.debug("I'm Debugging");
    $log.info("Someinformation");
    $log.warn("It's a warm message");
    $log.log("A Normal Log");
    $timeout(function() {
        $log.info("Wait for 3 second already!");
    }, 3000);
}]);

app.controller("mainController", ["$scope", function($scope) {
    console.log($scope);
}]);