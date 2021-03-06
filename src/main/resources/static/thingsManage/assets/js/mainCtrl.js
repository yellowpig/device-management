var mainApp = angular.module("mainApp",["ngRoute","ngAnimate","ui.grid","ngResource"]);
mainApp.config(["$routeProvider","$locationProvider",function ($routeProvider,$locationProvider) {
    $locationProvider.hashPrefix("");
    $routeProvider
        .when("/homePage", {
            templateUrl:"homePage.html",
            controller:"mainCtrl"
        })
        .when("/deviceList",{
            templateUrl:"deviceList.html",
            controller:"mainCtrl"
        })
        .when("/deviceGroup",{
            templateUrl:"deviceGroup.html",
            controller:"mainCtrl"
        })
        .when("/service",{
            templateUrl:"service.html",
            controller:"mainCtrl"
        })
        .when("/plugins",{
            templateUrl:"plugins.html",
            controller:"mainCtrl"
        })
        .when("/rules",{
            templateUrl:"rules.html",
            controller:"mainCtrl"
        })
        .when("/evaluate",{
            templateUrl:"evaluate.html",
            controller:"mainCtrl"
        })
        .when("/customer",{
            templateUrl:"customer.html",
            controller:"mainCtrl"
        })
        .when("/tenant",{
            templateUrl:"tenant.html",
            controller:"mainCtrl"
        })
        .otherwise({
            redirectTo:"/homePage"
        });
}]);

mainApp.controller("mainCtrl",["$scope","$location",function ($scope,$location) {
    /*路由跳转*/
    $scope.$location = $location;

    /*退出登录*/
    $scope.logout = function () {
       /* var logoutObj = $resource("/api/user/logout");
        $scope.logoutInfo = logoutObj.get({},function (resp) {
            alert(resp);
        });*/
        $.ajax({
            url:"/api/user/logout",
            contentType: "application/json; charset=utf-8",
            type:"GET",
            success:function(msg) {
                console.log(msg);
                window.location.href="/";
            }
        });
    };

    $("#backIcon").click(function () {
        var href = window.location.search;//取?后的参数
        console.log(href);
        var attr = href.substring(href.indexOf("?")+1);
        console.log(attr);
        var attrs = attr.split("&");
        window.location.href = "/home?"+attrs[0]+"&"+attrs[1];
    });




    /*突出显示效果*/
    $(document).ready(function(){
        $(".homeIconBackground,.side-menu-icon").mouseover(function(){
            $(this).siblings().stop().fadeTo(300, 0.3);//动画速度用数字表示时不需加引号
        });
        $(".homeIconBackground,.side-menu-icon").mouseout(function () {
            $(this).siblings().stop().fadeTo(300, 1);
        });


    });


}]);




