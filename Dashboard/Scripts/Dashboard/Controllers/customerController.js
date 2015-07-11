var customerController = function ($scope, signalRHubProxy) {

    $scope.CustomerInformations = {        
        NewlyRegistered: '...',
        SubscribedCustomers: '...',
        TopRatedCustomers: '...',
        PendingToApprove:'...'
    };

    var clientPushHubProxy = signalRHubProxy(
       signalRHubProxy.defaultServer, 'MyHub',
           { logging: true });

    clientPushHubProxy.on('customerInformations', function (data) {
        $scope.CustomerInformations = data;
        var x = clientPushHubProxy.connection.id;
    });

};