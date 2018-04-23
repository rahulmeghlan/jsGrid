angular.module('sa')
    .directive('saDraggable', function () {
        return {
            restrict: 'A',
            scope: {},
            link: function ($scope, elem, attr) {
                console.log("Initialized");
                elem.on('dragend', (event) => {
                    event.preventDefault();
                });
                elem.on('dragover', (event) => {
                    event.preventDefault();
                });
                elem.on('dragleave', function (event) {
                    event.preventDefault();
                    event.stopPropagation();
                    console.log(event);
                });
                elem.on('drop', function (event) {
                    console.log(event);
                });
            }
        }
    });