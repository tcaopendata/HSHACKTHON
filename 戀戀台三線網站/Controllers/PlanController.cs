using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace 戀戀台三線網站.Controllers
{
    public class PlanController : Controller
    {
        // GET: Plan
        public ActionResult Index()
        {
            return View();
        }

        public ActionResult plan1()
        {
            ViewBag.Message = "Your contact page.";

            return View();
        }
        public ActionResult plan2()
        {
            ViewBag.Message = "your contact page.";
            return View();
        }
        public ActionResult plan3()
        {
            ViewBag.Message = "your contact page.";
            return View();
        }
    }
}