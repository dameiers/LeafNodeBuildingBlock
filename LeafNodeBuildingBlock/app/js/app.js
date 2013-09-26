'use strict';
// Declare app level module which depends on filters, and services
var module = angular.module('myApp', []);
function LeafNodeController ($scope) {
    $scope.leafNodes = {};
    (function () {
        var options = {
        };
        ci.getAllObjectsOfClass("worldstates", "crisma", options).done(function (data, state, xhr) {
            var nodes = data.$collection;
            var leafNodes = [];
            var i, currNode;
            for (i = 0; i < nodes.length; i++) {
                currNode = nodes[i];
                if (currNode.childworldstates.length === 0) {
                    leafNodes.push(currNode);
                }
            }
            $scope.$apply(function () {
                $scope.leafNodes = leafNodes;
            });
        });
    })();
    $scope.getNodeText = function (node) {
        return node.name;
    };
}
;
