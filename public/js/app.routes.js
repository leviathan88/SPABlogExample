angular.module('routerRoutes', ['ngRoute'])

// configure our routes
.config(function ($routeProvider, $locationProvider) {
 $routeProvider

 // route for the home page
  .when('/', {
  templateUrl: 'views/pages/home.html',
  controller: 'homeController',
  controllerAs: 'home'
 })

 // route for the about page
 .when('/documents', {
  templateUrl: 'views/pages/documents.html',
  controller: 'documentsController',
  controllerAs: 'documents'
 })

 .when('/news', {
  templateUrl: 'views/pages/news.html',
  controller: 'newsController',
  controllerAs: 'news'
 })

 .when('/about', {
  templateUrl: 'views/pages/about.html',
  controller: 'aboutController',
  controllerAs: 'about'
 })

 // route for the contact page
 .when('/emails', {
  templateUrl: 'views/pages/emails.html',
  controller: 'emailsController',
  controllerAs: 'emails'
 });

 // set our app up to have pretty URLS
 $locationProvider.html5Mode(true);
});