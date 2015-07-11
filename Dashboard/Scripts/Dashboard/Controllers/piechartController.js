var piechartController = function ($scope, $log, $timeout) {

    //This is not a highcharts object. It just looks a little like one!
    $scope.chartConfig = {
        options: {
            //This is the Main Highcharts chart config. Any Highchart options are valid here.
            //will be overriden by values specified below.
            chart: {
                plotBackgroundColor: null,
                plotBorderWidth: null,
                plotShadow: false,
                type: 'pie'
            },
            tooltip: {
                pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
            },
        },
        plotOptions: {
            pie: {
                allowPointSelect: true,
                cursor: 'pointer',
                dataLabels: {
                    enabled: true,
                    format: '<b>{point.name}</b>: {point.percentage:.1f} %',
                    style: {
                        color: (Highcharts.theme && Highcharts.theme.contrastTextColor) || 'black'
                    }
                }
            }
        },
        //The below properties are watched separately for changes.

        //Series object (optional) - a list of series using normal highcharts series options.
        series: [{
            name: "Brands",
            colorByPoint: true,
            data: [{
                    name: "Microsoft Internet Explorer",
                    y: 56.33
                }, {
                    name: "Chrome",
                    y: 24.030000000000005,
                    sliced: true,
                    selected: true
                }, {
                    name: "Firefox",
                    y: 10.38
                }, {
                    name: "Safari",
                    y: 4.77
                }, {
                    name: "Opera",
                    y: 0.9100000000000001
                }, {
                    name: "Proprietary or Undetectable",
                    y: 0.2
                }]
        }],
        //Title configuration (optional)
        title: {
            text: 'Browser market shares January, 2015 to May, 2015'
        },
        subtitle: {
            text: 'Source: WorldClimate.com'
        },
        //Boolean to control showng loading status on chart (optional)
        //Could be a string if you want to show specific loading text.
        loading: false,
        //Configuration for the xAxis (optional). Currently only one x axis can be dynamically controlled.
        //properties currentMin and currentMax provied 2-way binding to the chart's maximimum and minimum
            
        //Whether to use HighStocks instead of HighCharts (optional). Defaults to false.
        useHighStocks: false,
        //size (optional) if left out the chart will default to size of the div or something sensible.
        size: {
            height: 250
        },
        //function (optional)
        func: function(chart) {
            $timeout(function() {
                chart.reflow();
            }, 0);
        }
    };

};