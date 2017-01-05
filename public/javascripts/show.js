angular.module("myapp",[])
    .controller("phone",["$scope","$http","$filter",function ($scope,$http,$filter) {
        $http({url:"/ajax"}).then(function (data) {
            var data=data.data;
            console.log(data);
            var arr=[];
            for(var i=0;i<data.length;i++){
                var aa=[];
                for(var j=0;j<data.length;j++){
                    if((data[i].en==data[j].en)&&!data[j].flag){
                        data[j].flag=true;
                        aa.push(data[j]);
                        aa.en=data[j].en;
                    }
                }
                if(aa.length>0){
                    arr.push(aa);
                    var arr=$filter("orderBy")(arr,"en")
                }
            }
            $scope.data=arr;
            $scope.type="";
            $scope.filter=function (en) {
                $scope.type=en;
            }
            $scope.show=function () {
                $scope.type="";
            }
        })
    }])