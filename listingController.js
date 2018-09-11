angular.module('listings').controller('ListingsController', ['$scope', 'Listings',
  function($scope, Listings) {
    $scope.listings = Listings;
    $scope.items = Listings;
    $scope.detailedInfo = undefined;
    $scope.itemIndex = {value: -1};
    $scope.itemCode = {value: ""};
    $scope.itemCoordinateX;
    $scope.itemCoordinateY;
    $scope.test = {value: "empty"};
    $scope.address_;
    /*
      Implement these functions in the controller to make your application function
      as described in the assignment spec.
     */
    $scope.addListing = function(code_, name_, latitude_,longitude_,address_) {
      var obj = {
        "code": code_,
        "name": name_,
        "coordinates": {
          "latitude": latitude_,
          "longitude": longitude_,
        },
        "address": address_
      };
      $scope.listings.push(obj);
    };
    $scope.deleteListing = function(index) {
      index = $scope.findItemIndex()
      console.log("works", index);
      $scope.listings.splice(index,1);
    };
    $scope.showDetails = function(index) {
    };
    //Returns item to print it's details in HTML
    $scope.findItemIndex = function(){
      for(let i = 0; i < $scope.listings.length; i++){
          if($scope.listings[i].code == $scope.itemCode.value){
            return i;
          }
      }
    };
    $scope.findItem = function(){
      for(let i = 0; i < $scope.listings.length; i++){
          if($scope.listings[i].code == $scope.itemCode.value){
            return $scope.listings[i];
          }
      }
    };
  }
]);
