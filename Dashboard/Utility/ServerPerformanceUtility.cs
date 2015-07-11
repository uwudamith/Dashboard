using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading;
using System.Web;
using Dashboard.Models;
using System.Diagnostics;

namespace Dashboard.Utility
{
    public class ServerPerformanceUtility
    {
         public RamCpu GetServerPerformance()
         {
             var cpuCounter = new PerformanceCounter("Processor", "% Processor Time", "_Total");
             var ramCounter = new PerformanceCounter("Memory", "Available MBytes");
       
            cpuCounter.NextValue();
            Thread.Sleep(1000);
            var value = Math.Round(cpuCounter.NextValue(), 0).ToString();
            return new RamCpu()
            {
                RamUsage = ramCounter.NextValue().ToString(),
                CpuUsage = value
            };
        }
       
    }
}