'use strict';

/* Directives */

angular.module('ngdemo.directives', []).

directive('appVersion', [ 'version', function(version) {
    return function(scope, elm, attrs) {
        elm.text(version);
    };
} ])

/* Directive FileModel */
.directive('fileModel', [ '$parse', function($parse) {
    return {
        restrict : 'A',
        link : function(scope, element, attrs) {
            var model = $parse(attrs.fileModel);
            var modelSetter = model.assign;

            element.bind('change', function() {
                scope.$apply(function() {
                    modelSetter(scope, element[0].files[0]);
                });
            });
        }
    };
} ]);