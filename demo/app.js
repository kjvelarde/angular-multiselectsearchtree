/*jshint undef: false, unused: false, indent: 2*/
/*global angular: false */

'use strict';

var app = angular.module('KJVelardeDemoApp', ['multiselect-searchtree']);

app.controller('KJVelardeDemoCtrl', function ($scope) {

   var data1 = [];

        for (var i = 0; i < 2; i++) {
            var obj = {
                id: 'a'+i,
                name: 'Node ' + i,
                children: []
            };

            for (var j = 0; j < 3; j++) {
                var obj2 = {
                    id: i+'b'+j,
                    name: 'Nóde ' + i + '.' + j,
                    children: [],
                    selected: true
                };
                obj.children.push(obj2);
            }

            data1.push(obj);
        }

        data1[1].children[0].children.push({
            id: 'c'+j,
            name: 'Node sub_sub 1',
            children: [],
            selected: true
        },
		{
            id: 'c'+j,
            name: 'brújula',
            children: [],
            selected: true
        });

        $scope.data = angular.copy(data1);
        $scope.datas = angular.copy(data1);       


        $scope.CustomCallback = function (item, selectedItems) {
            if (selectedItems !== undefined && selectedItems.length >= 80) {
                return false;
            } else {
                return true;
            }
        };
});