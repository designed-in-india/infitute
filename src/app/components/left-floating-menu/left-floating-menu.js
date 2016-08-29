angular
  .module('app')
  .component('leftFloatingMenu', {
    templateUrl: 'app/components/left-floating-menu/left-floating-menu.html',
    controller: LeftFloatingMenuController
  });

/** @ngInject */
function LeftFloatingMenuController($scope) {
  var vm = this;
  
  vm.close = function(){
      $scope.$emit('close-left-floating-panel');
  };
  
}
