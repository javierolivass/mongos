import angular from "angular";
import angularMeteor from "angular-meteor";
import {Tasks} from "../imports/API/task.js"

angular.module("mongo",[angularMeteor])
.controller("toDoController",function ($scope){
	console.log(Tasks.find({}).fetch());
	$scope.tasks = Tasks.find({}).fetch();
	Tasks.insert({
		text: ' hola de nuevo',
		created_at: new Date()
	});
})
