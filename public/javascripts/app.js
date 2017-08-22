var app = angular.module('mainApp', []);

app.controller('mainController', function($scope, $http) {
    $scope.personal_projects = {};
    $scope.work_projects = {};
    $scope.work_experience = {}

    // when landing on the page, get all todos and show them
    $http.get('/projects')
        .then(function(response) {
            $scope.personal_projects = response.data.personal_projects;
            $scope.work_projects = response.data.work_projects;
            $scope.work_experience = response.data.work_experience;
            console.log(response.data);
        }),
        (function(data) {
            console.log('Error: ' + data);
        });


});
