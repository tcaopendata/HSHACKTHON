﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace 戀戀台三線網站.Controllers
{
    public class HomeController : Controller
    {
        public ActionResult Index()
        {
            return View();
        }

        public ActionResult Attractions()
        {
            ViewBag.Message = "Your application description page.";

            return View();
        }

        public ActionResult Transportation()
        {
            ViewBag.Message = "Your contact page.";

            return View();
        }
        public ActionResult Contact_us()
        {
            ViewBag.Message = "Your contact page.";

            return View();
        }

        public ActionResult Map()
        {
            ViewBag.Message = "Your contact page.";
            return View();
        }

    }
}