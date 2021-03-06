'use strict';

angular.module('cleanBlogApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('blog.posts', {
        url: '^/blog/posts/:id',
        templateUrl: 'app/blog.posts/blog.posts.html',
        controller: 'BlogPostsCtrl'
      });
  });
