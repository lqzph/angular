angular.module("dirctives",[])
    .directive("meun",function () {
        return{
            restrict:"A",
            templateUrl:"demo.html",
            replace:true,
            scope:[

            ],//解决兼容，每一个指令上面的￥scope是独立的，不会互相影响
            link:function ($scope,b,c) {
                $scope.data=[
                    {
                        name:"111",
                        son:[
                            {name:"1-1"},
                            {name:"1-2"},
                            {name:"1-3"},
                            {name:"1-4"},
                        ]
                    },
                    {
                        name:"222",
                        son:[
                            {name:"2-1"},
                            {name:"2-2"},
                            {name:"2-3"},
                            {name:"2-4"},
                        ]
                    },
                    {
                        name:"333",
                        son:[
                            {name:"3-1"},
                            {name:"3-2"},
                            {name:"3-3"},
                            {name:"3-4"},
                        ]
                    },
                    {
                        name:"444",
                        son:[
                            {name:"4-1"},
                            {name:"4-2"},
                            {name:"4-3"},
                            {name:"4-4"},
                        ]
                    }

                ]
                $scope.a=0;
                $scope.change=function(id){
                    $scope.a=id;
                }

            }
        }
    })