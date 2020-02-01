var app = angular.module('mainApp', []);
app.controller('mainController', function($scope) {
  
  $scope.showBasicInfo = function(){
    $scope.basicInfo = true;
    $scope.scientificDetails = false;
    $scope.socialLife = false;
    $scope.facts = false;
  }

  $scope.showScientificDetails = function(){
    $scope.basicInfo = false;
    $scope.scientificDetails = true;
    $scope.socialLife = false;
    $scope.facts = false;
  }

  $scope.showSocialLife = function(){
    $scope.basicInfo = false;
    $scope.scientificDetails = false;
    $scope.socialLife = true;
    $scope.facts = false;
  }

  $scope.showFacts = function(){
    $scope.basicInfo = false;
    $scope.scientificDetails = false;
    $scope.socialLife = false;
    $scope.facts = true;
  }

  $scope.showMyInfo = function(){
    $scope.myInfo = true;
    $scope.webDetails = false;
    $scope.techDetails = false;
  }

  $scope.showWebDetails = function(){
    $scope.myInfo = false;
    $scope.webDetails = true;
    $scope.techDetails = false;
  }

  $scope.showTechDetails = function(){
    $scope.myInfo = false;
    $scope.webDetails = false;
    $scope.techDetails = true;
  }

  $scope.showLlama = function(){
    $scope.llama= true;
    $scope.me= false;
    $scope.showBasicInfo();
  }

  $scope.showMe = function(){
    $scope.llama= false;
    $scope.me= true;
    $scope.showMyInfo();
  }

  $scope.showLlama();

});