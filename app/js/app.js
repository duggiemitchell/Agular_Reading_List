(function() {
  'use strict';

  var app = angular.module('readingList', [])

  app.controller('ReadingListCtrl', function() {
    this.book = books;
    this.level = level;
  });


  app.directive('bookLevel', function() {
    return {
      restrict: 'E',
      templateUrl: 'partials/book-level.html',
      scope: {
        level: '='
      }
    }
  });
  app.directive('bookCover', function() {
    return {
      restrict: 'E',
      templateUrl:'partials/book-cover.html',
      replace: true
    };
  });
  app.directive('reviewForm', function() {
    return {
      restrict:'E',
      templateUrl: 'partials/review-form.html',
      replace: true,
      // controller for review-form partial //
      controller: function() {
        this.ShowForm = false;
        //initiate empty book object //
        this.book = {level: {}};

        this.addReview = function(form) {
          books.push(this.book);
          this.book = {level: {}};

          form.$setPrestine();
        }
      },
      controllerAs: 'reviewFormCtrl',
      // allows us to pass in the book levels //
      scope: {
        books: '=',
        level: '='
      }
    };
  });

  var level = [ 'beginner', 'intermediate', 'advanced'];

  var books = [
    {
      title: 'Eloquent Javascript',
      author: ' Marijn Haverbecke',
      isbn: '1593275846',
      review: 'The most inventive and entertaining fantasy saga of our time—warrants one hell of an introduction. I loved this book!',
      rating: 4,
      level: { beginner: true, intermediate: true, advanced: true }
    },
    {
      title: 'HTML for Babies',
      author: 'John C Vanden-Heuvel Sr',
      isbn: '0615487661',
      review: "It's never too early to be standards compliant! I taught my little one mark-up in under one hour!",
      rating: 5,
      level: { beginner: true, intermediate: false, advanced: false }
    },
    {
      title: 'Effective Javascript',
      author: 'David Herman',
      isbn: '0321812182',
      review: 'It’s uncommon to have a programming language wonk who can speak in such comfortable and friendly language as David does. His walk through the syntax and semantics of JavaScript is both charming and hugely insightful; reminders of gotchas complement realistic use cases, paced at a comfortable curve. You’ll find when you finish the book that you’ve gained a strong and comprehensive sense of mastery.',
      rating: 5,
      level: {  beginner: true, intermediate: true, advanced: true }
    },
    {
      title: 'JavaScript: The Definitive Guide: Activate Your Web Pages',
      author: 'David Flanagan ',
      isbn: '0596805527',
      review: 'Since 1996, JavaScript: The Definitive Guide has been the bible for JavaScript programmers—a programmer\'s guide and comprehensive reference to the core language and to the client-side JavaScript APIs defined by web browsers.',
      rating: 4,
      level: { beginner: false, intermediate: true, advanced: true }
    },
    {
      title: 'Learning JavaScript Design Patterns',
      author: 'Addy Osmani',
      isbn: '1449331815',
      review: 'Learn how to write beautiful, structured, and maintainable JavaScript by applying classical and modern design patterns to the language',
      rating: 4,
      level: { beginner: false, intermediate: true, advanced: true }
    },
    {
      title: 'Beginning JavaScript and CSS Development with jQuery ',
      author: 'Richard York',
      isbn: '0470227796',
      review: 'This book covers the jQuery JavaScript framework and the jQuery UI JavaScript framework to get more results more quickly out of JavaScript programming.',
      rating: 4,
      level: { beginner: true, intermediate: false, advanced: false }
    },
    {
      title: 'JavaScript & DHTML Cookbook, 2nd edition',
      author: 'Danny Goodman',
      isbn: '0596514085',
      review: 'This book offers bite-sized solutions to very specific scripting problems that web developers commonly face. Each recipe includes a focused piece of code that you can insert right into your application',
      rating: 4,
      level: { beginner: true, intermediate: false, advanced: false }
    }
  ];



})();
