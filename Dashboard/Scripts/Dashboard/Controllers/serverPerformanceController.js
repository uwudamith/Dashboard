var serverPerformanceController = function ($scope, signalRHubProxy) {

    $scope.RamCpu = {
        RamUsage: '0',
        CpuUsage: '0',
        Total:'0'
    };

    var clientPushHubProxy = signalRHubProxy(
       signalRHubProxy.defaultServer, 'MyHub',
           { logging: true });

    clientPushHubProxy.on('serverPerformanceDetails', function (data) {
        $scope.RamCpu = data;
        var x = clientPushHubProxy.connection.id;
    });
};