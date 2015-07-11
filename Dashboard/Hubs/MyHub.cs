using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using System.Web;
using Dashboard.Utility;
using Microsoft.AspNet.SignalR;
using Microsoft.AspNet.SignalR.Hubs;

namespace Dashboard.Hubs
{
    [HubName("MyHub")]
    public class MyHub : Hub
    {

    }
}