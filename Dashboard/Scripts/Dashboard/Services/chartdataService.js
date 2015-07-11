var chartdataService = function($rootScope, $http) {
    return {
        // use to search employee mybook
        getChartData: function(callBack) {
            $http({
                method: 'POST',
                cache: false,
                url: '../../Home/GetChartData',
            }).success(function(data) {
                // callback 1st parameter will be the response and the 2nd parameter will be the requestId
                callBack(data);
            })
                .error(function(e) {
                }).finally(function() {

                });
        },
    };
};
