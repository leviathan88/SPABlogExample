angular.module('routerApp', ['routerRoutes'])

// create the controllers
// this will be the controller for the ENTIRE site
.controller('mainController', function () {

  var vm = this;

  // create a bigMessage variable to display in our view
  vm.bigMessage = 'My main controller';
})

// home page specific controller
.controller('documentsController', function () {

  var vm = this;

  vm.message = 'This is the documents page!';
})

// about page controller
.controller('emailsController', function () {

  var vm = this;

  vm.message = 'Look! I am on emails page.';
})

.controller('newsController', function () {

  var vm = this;

  vm.message = 'Look! I am a news page.';
})

// contact page controller
.controller('aboutController', function () {

  var vm = this;

  vm.message = 'about';
});