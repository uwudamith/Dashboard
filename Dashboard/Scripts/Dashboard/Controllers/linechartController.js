var linechartController = function ($scope, $log, $timeout, $interval, chartdataService) {

    $scope.series = [];
    $scope.dataCollection = 'hiiiiiiiii';
    
    $scope.getChartData = function () {
        $scope.callBackChartData = function (data) {
            $scope.chartConfig.series = data;
        };

        chartdataService.getChartData($scope.callBackChartData);
    };


    //This is not a highcharts object. It just looks a little like one!
    $scope.chartConfig = {
        options: {
            //This is the Main Highcharts chart config. Any Highchart options are valid here.
            //will be overriden by values specified below.
            chart: {
                //type: 'column'
            },
            tooltip: {
                headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
                pointFormat: '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
                    '<td style="padding:0"><b>{point.y:.1f} mm</b></td></tr>',
                footerFormat: '</table>',
                shared: true,
                useHTML: true
            },
        },
        plotOptions: {
            column: {
                pointPadding: 0.2,
                borderWidth: 0
            }
        },
        //The below properties are watched separately for changes.

        //Series object (optional) - a list of series using normal highcharts series options.
        series: $scope.series,
        //Title configuration (optional)
        title: {
            text: 'Monthly Average Rainfall'
        },
        subtitle: {
            text: 'Source: WorldClimate.com'
        },
        //Boolean to control showng loading status on chart (optional)
        //Could be a string if you want to show specific loading text.
        loading: false,
        //Configuration for the xAxis (optional). Currently only one x axis can be dynamically controlled.
        //properties currentMin and currentMax provied 2-way binding to the chart's maximimum and minimum
        xAxis: {
            categories: [
                'Jan',
                'Feb',
                'Mar',
                'Apr',
                'May',
                'Jun',
                'Jul',
                'Aug',
                'Sep',
                'Oct',
                'Nov',
                'Dec'
            ],
            crosshair: true
        },
        yAxis: {
            min: 0,
            title: {
                text: 'Rainfall (mm)'
            }
        },
        //Whether to use HighStocks instead of HighCharts (optional). Defaults to false.
        useHighStocks: false,
        //size (optional) if left out the chart will default to size of the div or something sensible.
        size: {
            height: 300
        },
        //function (optional)
        func: function (chart) {
            $timeout(function () {
                chart.reflow();
            }, 0);
        }
    };

    var mmmm =    $scope.hub = $.connection.MyHub;
    
    $scope.initiateSignalRConnection = function () {
        $.connection.hub.start().then(function () {
            $scope.hub.server.getInitialChartData();
        });
    };

    $scope.initiateSignalRConnection();

    $scope.setSignalRCallbacks = function () {

        $scope.hub.client.getDashboardChartData = function (data) {
            $scope.$apply(function () {
                $scope.chartConfig.series = data;
                $scope.dataCollection = data;
            });
            
        };

        $scope.hub.client.updateNewStockCosts = function (data) {
            $scope.$apply(function () {
                $scope.chartConfig.series = data;
                $scope.dataCollection = data;
            });
        };
    };

    $scope.setSignalRCallbacks();
};