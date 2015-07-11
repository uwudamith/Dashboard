using System.Web;
using System.Web.Optimization;

namespace Dashboard
{
    /// <summary>
    /// Contain all the bundles configurations for project
    /// Sample Apply :  @Scripts.Render("~/bundles/jquery")
    /// </summary>
    public class BundleConfig
    {
        // For more information on bundling, visit http://go.microsoft.com/fwlink/?LinkId=301862
        public static void RegisterBundles(BundleCollection bundles)
        {
            bundles.Add(new ScriptBundle("~/bundles/jquery").Include(
                        "~/Scripts/Jquery/jquery-{version}.js"));

            // Use the development version of Modernizr to develop with and learn from. Then, when you're
            // ready for production, use the build tool at http://modernizr.com to pick only the tests you need.
            bundles.Add(new ScriptBundle("~/bundles/modernizr").Include(
                        "~/Scripts/modernizr-*"));

            // Bundling bootstrap
            bundles.Add(new ScriptBundle("~/bundles/bootstrap").Include(
                      "~/Scripts/Bootsrap/bootstrap.js",
                      "~/Scripts/Bootsrap/respond.js"));

            // Bundling bootstrap styles
            bundles.Add(new StyleBundle("~/Content/css").Include(
                      "~/Content/bootstrap.min.css",
                      "~/Content/site.css"));

            // Bootstrap angular directives
            bundles.Add(new ScriptBundle("~/bundles/angular-bootstarp-ui")
                .IncludeDirectory("~/Scripts/Angular-ui", "*.js"));

            // Angular js bundles
            bundles.Add(new ScriptBundle("~/bundles/angulr-js")
                .Include(
                    "~/Scripts/Angular-js/angular.min.js",
                    "~/Scripts/Angular-js/angular-animate.min.js",
                    "~/Scripts/Angular-js/angular-route.min.js",
                    "~/Scripts/Angular-js/angular-touch.min.js"
                ).IncludeDirectory("~/Scripts/dashboard/Controllers", "*.js")
                .IncludeDirectory("~/Scripts/dashboard/Services", "*.js")
                .IncludeDirectory("~/Scripts/dashboard/Factories", "*.js")
                .Include("~/Scripts/Dashboard/app.js")
                );

            // Angular Highchart directives
            bundles.Add(new ScriptBundle("~/bundles/angular-highchart")
             .IncludeDirectory("~/Scripts/Highcharts-ng", "*.js"));

            // Hichart core files
            bundles.Add(new ScriptBundle("~/bundles/hichart-core")
                .Include(
                    "~/Scripts/Highcharts/highcharts.js",
                    "~/Scripts/Highcharts/highcharts-more.js",
                    "~/Scripts/Highcharts/modules/exporting.js",
                    "~/Scripts/Highcharts/modules/solid-gauge.js",
                     "~/Scripts/Highcharts/dark-unica.js"
                ));

            // Jquery ui for Highchart
            bundles.Add(new StyleBundle("~/Content/jquery-ui").Include(
                "~/Content/base/all.css",
                "~/Content/site.css"));

            // Jquery ui for Highchart
            bundles.Add(new ScriptBundle("~/bundles/jquery-ui-js")
                .IncludeDirectory("~/Scripts/Jquery-ui", "*.js"));

            // SignalR files
            bundles.Add(new ScriptBundle("~/bundles/signalr")
            .Include("~/Scripts/jquery.signalR-2.2.0.min.js")
                .Include("~/Scripts/jquery.signalR-2.2.0.js"));
        }
    }
}
