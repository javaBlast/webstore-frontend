/* Config */
webstore.config([
  '$routeProvider', '$locationProvider',
  function($routeProvide, $locationProvider) {
    $routeProvide
      .when('/', {
        templateUrl: 'products/template/home.html',
        controller: 'ProductCtrl'
      })
      .when('/products/:productId', {
        templateUrl: 'productDetail/product-detail.html',
        controller: 'ProductDetailCtrl',
      })
      .otherwise({
        redirectTo: '/'
      });
  }
]);