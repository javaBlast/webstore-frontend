
webstore.controller('ProductDetailCtrl', [
  '$scope', '$http', '$location', '$routeParams', 'Product',
  function($scope, $http, $location, $routeParams, Product) {
    $scope.productId = $routeParams.productId;

    Product.get({
      productId: $routeParams.productId
    }, function(data) {
      $scope.product = data;
    });
  }
]);