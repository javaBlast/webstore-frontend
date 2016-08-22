webstore.factory('Product', [
  '$resource',
  function($resource) {
    return $resource('http://192.168.0.187:3000/:productId', {
      productId: 'products',
    }, {
      'query': {
        method: 'GET',
        isArray: true
      },
    });

  }
]);