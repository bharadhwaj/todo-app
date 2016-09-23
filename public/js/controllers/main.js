angular.module('todoController', [])
    .controller('mainController', function($scope, $http, Todos) {
        $scope.formData = {};

        Todos.get()
            .success(function(data) {
                $scope.todos = data;
            });
            
        $scope.createTodo = function() {
            if (!$.isEmptyObject($scope.formData)) {

                Todos.add($scope.formData)
                    .success(function(data) {
                        $scope.formData = {};
                        $scope.todos = data;
                    });
            }
        };

        $scope.checkTodo = function(id) {
            Todos.check(id)
                .success(function(data) {
                    $scope.todos = data;
                });
        };

        $scope.uncheckTodo = function(id) {
            Todos.uncheck(id)
                .success(function(data) {
                    $scope.todos = data;
                });
        };

        $scope.deleteTodo = function(id) {
            Todos.delete(id)
                .success(function(data) {
                    $scope.todos = data;
                });
        };
    });