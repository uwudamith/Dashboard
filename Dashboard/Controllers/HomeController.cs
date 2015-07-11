using System;
using System.Linq;
using System.Threading;
using System.Web;
using System.Web.Mvc;
using Dashboard.Hubs;
using Dashboard.Utility;
using Microsoft.AspNet.SignalR;
using Newtonsoft.Json;

namespace Dashboard.Controllers
{
    public class HomeController : Controller
    {
        public ActionResult Index()
        {
            return View();
        }

        public ActionResult Content()
        {
            return View();
        }

        public ActionResult Customer()
        {
            return View();
        }

        public ActionResult ServerPerformance()
        {
            return View();
        }

    }
}