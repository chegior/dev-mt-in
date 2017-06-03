angular.module('myApp').service('mySvc',function(){

  var students = [
    {name:"Caleb Hicks",tagline:"Learning this Web Project's REST API like a mad man!",bio:"iOS Instructor at DevMountain",profileUrl:"http://calebhicks.com"},
    {name:"John Stockton",tagline:"Dishing Dimes",bio:"Greatest PG to play the game.",profileUrl:"http://utahjazz.com"},
    {name:"Karl Malone",tagline:"The Mailman",bio:"2 time NBA MVP",profileUrl:"http://utahjazz.com"},
    {name:"Jordan",tagline:"Lame tagline",bio:"Lamebio",profileUrl:"profile.url"}
  ];
  this.loadStudents = function(){
    return students;
  }

  this.addStudent = function(student){

    return students.push(student);

  }
  this.delteStudent = function(student){

  }

  this.modStudent =function(student){

  }

});
