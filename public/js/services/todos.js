angular.module('todoService', [])
    .factory('Todos', function($http) {
        return {
            getAll : function() {
                return $http.get('/todo/get-all');
            },
            getChecked : function() {
                return $http.get('/todo/get-checked');
            },
            getUnchecked : function() {
                return $http.get('/todo/get-unchecked');
            },
            add : function(todoData) {
                return $http.post('/todo/add', todoData);
            },
            check : function(id) {
                return $http.get('/todo/check/' + id);
            },
            uncheck : function(id) {
                return $http.get('/todo/uncheck/' + id);
            },
            delete : function(id) {
                return $http.delete('/todo/remove/' + id);
            }
        }
    });