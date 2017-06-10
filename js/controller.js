angular.module('myApp').controller('myCtrl1',function($scope,mySvc){
  //$scope.myProfile = mySvc.loadMyProfile();
  $scope.loadStudents = function(){
    mySvc.loadStudents().then(function(response){
      $scope.students = response;
    })

  };

  $scope.loadStudents();
// Verify if a new Student OBJECT has been submited and send it to THE SERVICE







  $scope.createProfile = function(student){
    if(!student){
      alert("Error: Please Create a PROFILE, Thanks ")
    }
    mySvc.addStudent(student);
  }
});
