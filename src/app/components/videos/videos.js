angular
  .module('app')
  .component('videos', {
    templateUrl: 'app/components/videos/videos.html',
    controller: videosComponentController
  });

/** @ngInject */
function videosComponentController($scope, _) {
    vm = this;

    $scope.usr = {
        title : 'HI'
    };

    function InnerTreeConstructor(name){
      return {
        label: name,
        value: name.toLowerCase().replace('.','').replace(' ',''),
      }
    }

    function FinalTreeContructor(data) {
      var tempArray = [];
      _.forEach(data,function name(value) {
        var children = [];
        _.forEach(value.info, function (info) {
          children.push(new InnerTreeConstructor(info.course_name));
        });
        var tempObj = new InnerTreeConstructor(value.univ_name);
        tempObj.children = children;
        tempArray.push(tempObj);
      });
      return tempArray;
    }

    var info = [
      {course_name: 'Mechanical', sem : 8},
      {course_name: 'C.S', sem : 8},
      {course_name: 'M.B.A', sem : 6}
    ];

    var university = [{
      univ_name : 'Anna University',
      info : info
    },{
      univ_name : 'Bharathiar University',
      info : info
    },{
      univ_name : 'Bharathidasan University',
      info : info
    },];

    $scope.courseTree = new FinalTreeContructor(university);
    //$scope.courseTree;

}