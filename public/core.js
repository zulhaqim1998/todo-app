var todoApp = angular.module('todoApp', []);

function mainController($scope, $http){
  $scope.formData = {};
  $scope.todos = 0;
  //get all todo list
  $http.get('/api/todos')
    .success(function(data){
      $scope.todos = data;
    })
    .error(function(data){
      console.log('Error: ' + data);
    });

    //create new todo
    $scope.createTodo = function(){
      $http.post('/api/todo', $scope.formData)
        .success(function(data){
          $scope.formData = {};
          $scope.todos = data;
          console.log('Post data successful');
        })
        .error(function(data){
          console.log('Error: ' + data);
        });
    };

    //delete todo
    $scope.deleteTodo = function(id){
      $http.delete('/api/todos/' + id)
        .success(function(data){
          $scope.todos = data;
          console.log('Deleted a todo from list');
        })
        .error(function(data){
          console.log('Error: ' + data);
        });
    };

}
