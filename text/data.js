angular.module("data",[])
.factory("indexData",function ($http) {
    return $http({url:"1.txt"})
})
.factory("listDate",function ($http) {
        return $http({url:"1.txt"})
 })