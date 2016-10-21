function videosComponentController(n,e){function t(n){return{label:n,value:n.toLowerCase().replace(".","").replace(" ","")}}function o(n){var o=[];return e.forEach(n,function(n){var a=[];e.forEach(n.info,function(n){a.push(new t(n.course_name))});var i=new t(n.univ_name);i.children=a,o.push(i)}),o}vm=this,n.usr={title:"HI"};var a=[{course_name:"Mechanical",sem:8},{course_name:"C.S",sem:8},{course_name:"M.B.A",sem:6}],i=[{univ_name:"Anna University",info:a},{univ_name:"Bharathiar University",info:a},{univ_name:"Bharathidasan University",info:a}];n.courseTree=new o(i)}function loginComponentController(n){vm=this,n.user={title:"",email:""}}function LeftFloatingMenuController(n){var e=this;e.close=function(){n.$emit("close-left-floating-panel")}}function landingComponentController(n){vm=this,n.dataArray=[{src:"https://www.travelexcellence.com/images/movil/La_Paz_Waterfall.jpg"},{src:"http://images.kuoni.co.uk/73/indonesia-34834203-1451484722-ImageGalleryLightbox.jpg"},{src:"http://www.kimcambodiadriver.com/uploads/images/tours/kim-cambodia-driver-angkor-wat.jpg"},{src:"http://images.kuoni.co.uk/73/malaysia-21747826-1446726337-ImageGalleryLightbox.jpg"}]}function AppController(n,e,t,o){function a(t,o,a){var i;return function(){var a=n,l=Array.prototype.slice.call(arguments);e.cancel(i),i=e(function(){i=void 0,t.apply(a,l)},o||10)}}function i(n){return a(function(){t(n).toggle().then(function(){o.debug("toggle "+n+" is done")})},200)}n.toggleLeft=i("left"),n.$on("close-left-floating-panel",function(n,e){t("left").close().then(function(){o.debug("close LEFT is done")})})}function routesConfig(n,e,t){t.html5Mode(!0).hashPrefix("!"),e.otherwise("/"),n.state("app",{url:"/",component:"app"}).state("app.login",{url:"login",component:"login"}).state("app.landing",{url:"landing",component:"landing"}).state("app.videos",{url:"videos",component:"videos"})}videosComponentController.$inject=["$scope","_"],loginComponentController.$inject=["$scope"],LeftFloatingMenuController.$inject=["$scope"],landingComponentController.$inject=["$scope"],routesConfig.$inject=["$stateProvider","$urlRouterProvider","$locationProvider"],AppController.$inject=["$scope","$timeout","$mdSidenav","$log"],angular.module("app",["ui.router","ngMaterial","jkAngularCarousel","ivh.treeview","underscore"]).config(["ivhTreeviewOptionsProvider",function(n){n.set({})}]),angular.module("app").component("videos",{templateUrl:"app/components/videos/videos.html",controller:videosComponentController}),angular.module("app").component("login",{templateUrl:"app/components/login/login.html",controller:loginComponentController}),angular.module("app").component("leftFloatingMenu",{templateUrl:"app/components/left-floating-menu/left-floating-menu.html",controller:LeftFloatingMenuController}),angular.module("app").component("landing",{templateUrl:"app/components/landing/landing.html",controller:landingComponentController}),angular.module("app").component("fountainHeader",{templateUrl:"app/components/header/header.html"}),angular.module("app").component("fountainFooter",{templateUrl:"app/components/footer/footer.html"}),angular.module("app").component("app",{templateUrl:"app/main.html",controller:AppController}),angular.module("app").run(["$templateCache",function(n){n.put("app/main.html",'<div class="main-container">\n  <section layout="row" flex>\n    <left-floating-menu></left-floating-menu>\n    <md-content flex layout-padding>\n      <md-nav-bar md-selected-nav-item="currentNavItem" nav-bar-aria-label="navigation links">\n        <!--\n          <md-button ng-click="toggleLeft()"\n            class="md-primary" hide-gt-md>\n            INFITUTE\n          </md-button>\n         -->\n        <li flex="70">\n          <md-nav-item md-nav-sref="app.landing">INFITUTE</md-nav-item>\n        </li>\n\n        <md-nav-item md-nav-sref="app.videos">Video</md-nav-item>\n        <md-nav-item md-nav-sref="app.videos">About Us</md-nav-item>\n        <md-nav-item md-nav-sref="app.login">Login</md-nav-item>\n        <!-- <md-nav-item md-nav-href="#page5" name="page5">Page Five</md-nav-item> -->\n        \n      </md-nav-bar>\n      <!-- <div class="ext-content">\n        External content for `<span>{{currentNavItem}}</span>`\n      </div> -->\n      <ui-view></ui-view>\n    </md-content>\n  </section>\n  <!--<fountain-header></fountain-header>\n  <main class="main">\n    <fountain-title></fountain-title>\n    <fountain-techs></fountain-techs>\n  </main>\n  <fountain-footer></fountain-footer>-->\n</div>\n'),n.put("app/components/footer/footer.html",'<footer class="footer">\n  Build with ♥ by the dev team\n</footer>\n'),n.put("app/components/header/header.html",'<header class="header">\n  <p class="header-title">\n    <a href="https://github.com/FountainJS/generator-fountain-webapp" target="_blank">\n      Fountain Generator\n    </a>\n  </p>\n  <p class="header-date">\n    Generated with FountainJS v0.7.1 on Mon Aug 29 2016 12:05:39 GMT+0530 (IST)\n  </p>\n</header>\n'),n.put("app/components/landing/item-template.html",'<div>\n  <img ng-src="{{slideItem.src}}">\n</div>'),n.put("app/components/landing/landing.html",'<md-content style="width:80%; margin:0 auto" ng-cloak>\n    <md-card layout="column" layout-align="center center" style="padding-bottom: 10px">\n        <h3>AutoSlide Carousel</h3>\n        <jk-carousel data="dataArray" item-template-url="\'app/components/landing/item-template.html\'" max-width="800" max-height="500" auto-slide="true" auto-slide-time="2000">\n        </jk-carousel>\n    </md-card>\n</md-content>'),n.put("app/components/left-floating-menu/left-floating-menu.html",'     <md-sidenav class="md-sidenav-left" md-component-id="left" md-is-locked-open="$mdMedia(\'gt-md\')" md-whiteframe="4">\n      <md-toolbar class="md-theme-indigo">\n        <h1 class="md-toolbar-tools">Sidenav Left</h1>\n      </md-toolbar>\n      <md-content layout-padding>\n        <md-button ng-click="$ctrl.close()" class="md-primary" hide-gt-md>\n          Close Sidenav Left\n        </md-button>\n        <p hide show-gt-md>\n          This sidenav is locked open on your device. To go back to the default behavior,\n          narrow your display.\n        </p>\n      </md-content>\n    </md-sidenav>\n'),n.put("app/components/login/login.html",'<md-content style="width:35%; margin:0 auto" ng-cloak>\n    <md-card>\n        <div style="margin: 0 20px">\n            <md-input-container class="md-block">\n                <md-icon class="icon-person" aria-label="Home"></md-icon>\n                <input ng-model="user.title" placeholder="Name (required)" ng-required="true">\n            </md-input-container>\n            <md-input-container class="md-block">\n                <md-icon class="icon-email" aria-label="Home"></md-icon>\n                <input ng-model="user.email" type="email" placeholder="Email (required)" ng-required="true">\n            </md-input-container>\n        </div>\n        <div style="margin-bottom:10px">\n            <md-card-actions layout="row" layout-align="center center" layout-wrap>\n                <md-button class="md-raised md-primary">Log in</md-button>\n            </md-card-actions>\n        </div>\n        \n    </md-card>\n</md-content>'),n.put("app/components/videos/videos.html",'<!--<md-content style="width:70%; margin:0 auto;">\n    <md-card>\n        <div>\n            <md-input-container>\n                <label>VIDEO</label>\n                <input ng-model="usr.title">\n            </md-input-container>\n        </div>\n        <div>\n            <div\n                ivh-treeview="courseTree"\n                ivh-treeview-expand-to-depth="0"\n                ivh-treeview-use-checkboxes="false">\n            </div>\n        </div>\n    </md-card>\n</md-content> -->\n<div>\n  <div layout="row" style="height:100vh">\n    <div flex="20" style="height:100%; border-right: 1px solid rgba(0,0,0,0.12)">\n        <div ivh-treeview="courseTree" ivh-treeview-expand-to-depth="0" ivh-treeview-use-checkboxes="false">\n        </div>\n    </div>\n    <div flex>\n        <div style="width:80%; margin:0 auto">\n            <iframe id="ytplayer" type="text/html" width="100%" height="390" src="https://www.youtube.com/embed/M7lc1UVf-VE?autoplay=1&origin=http://github.com" frameborder="0"></iframe>\n        </div>\n        \n    </div>\n  </div>\n</div>')}]),angular.module("app").config(routesConfig);
//# sourceMappingURL=../maps/scripts/app-7d88e375c1.js.map