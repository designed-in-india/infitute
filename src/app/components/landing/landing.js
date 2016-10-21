angular
  .module('app')
  .component('landing', {
    templateUrl: 'app/components/landing/landing.html',
    controller: landingComponentController
  });

/** @ngInject */
function landingComponentController($scope) {
    vm = this;

    $scope.dataArray = [
        { src: 'https://www.travelexcellence.com/images/movil/La_Paz_Waterfall.jpg' },
        { src: 'http://images.kuoni.co.uk/73/indonesia-34834203-1451484722-ImageGalleryLightbox.jpg' },
        { src: 'http://www.kimcambodiadriver.com/uploads/images/tours/kim-cambodia-driver-angkor-wat.jpg' },
        { src: 'http://images.kuoni.co.uk/73/malaysia-21747826-1446726337-ImageGalleryLightbox.jpg' }
    ];
}