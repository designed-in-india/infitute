angular
  .module('app')
  .component('login', {
    templateUrl: 'app/components/login/login.html',
    controller: loginComponentController
  });

/** @ngInject */
function loginComponentController($scope) {
    vm = this;

    $scope.user = {
        title : '',
        email : ''
    };

}