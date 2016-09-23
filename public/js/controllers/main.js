angular.module('todoController', [])
    .controller('mainController', function($scope, $http, Todos) {
        $scope.formData = {};

        Todos.getAll()
            .success(function(data) {
                $scope.todo_all = data;
            });

        Todos.getChecked()
            .success(function(data) {
                $scope.todo_checked = data;
            });

        Todos.getUnchecked()
            .success(function(data) {
                $scope.todo_unchecked = data;
            });

        $scope.createTodo = function() {
            if (!$.isEmptyObject($scope.formData)) {

                Todos.add($scope.formData)
                    .success(function(data) {
                        $scope.formData = {};
                        $scope.todos = data;
                    });
            }
            Todos.getChecked()
                .success(function(data) {
                    $scope.todo_checked = data;
                });

            Todos.getUnchecked()
                .success(function(data) {
                    $scope.todo_unchecked = data;
                });
        };

        $scope.checkTodo = function(id) {
            Todos.check(id)
                .success(function(data) {
                    $scope.todos = data;
                });
            Todos.getChecked()
                .success(function(data) {
                    $scope.todo_checked = data;
                });

            Todos.getUnchecked()
                .success(function(data) {
                    $scope.todo_unchecked = data;
                });
        };

        $scope.uncheckTodo = function(id) {
            Todos.uncheck(id)
                .success(function(data) {
                    $scope.todos = data;
                });
            Todos.getChecked()
                .success(function(data) {
                    $scope.todo_checked = data;
                });

            Todos.getUnchecked()
                .success(function(data) {
                    $scope.todo_unchecked = data;
                });
        };

        $scope.deleteTodo = function(id) {
            Todos.delete(id)
                .success(function(data) {
                    $scope.todos = data;
                });
            Todos.getChecked()
                .success(function(data) {
                    $scope.todo_checked = data;
                });

            Todos.getUnchecked()
                .success(function(data) {
                    $scope.todo_unchecked = data;
                }); 
        };
    });