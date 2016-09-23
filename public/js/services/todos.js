angular.module('todoService', [])
    .factory('Todos', function($http) {
        return {
            get : function() {
                return $http.get('/todo/get-all');
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