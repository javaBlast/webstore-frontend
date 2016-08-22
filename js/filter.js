/* Filter */

webstore.controller('ProductCtrl', [
    '$scope', '$http', '$location', 'Product',
    function($scope, $http, $location, Product) {
        Product.query({
            productId: 'products'
        }, function(data) {
            $scope.products = data;
        });
    }
]);