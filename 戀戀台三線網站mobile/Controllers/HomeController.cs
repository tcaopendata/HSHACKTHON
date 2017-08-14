using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Data.Entity;
using System.Net;
using System.Web.Mvc;
using 戀戀台三線網站mobile.Models;



namespace 戀戀台三線網站mobile.Controllers
{
    public class HomeController : Controller
    {

        private GuestBookEntities db = new GuestBookEntities();
        //[HttpPost]
        //[ValidateAntiForgeryToken]
        public ActionResult Index(Contact_us contact_us)
        {
            if (ModelState.IsValid && contact_us.Name!= null)
            {
               contact_us.Id = Guid.NewGuid();
               contact_us.PostTime = DateTime.UtcNow.AddHours(08);
               db.Contact_us.Add(contact_us);
               db.SaveChanges();
               return RedirectToAction("Index");   //重新都入，也可以將text-lable中的文字資料清除
            }
            return View();
        }

        public ActionResult About()
        {
            ViewBag.Message = "Your application description page.";

            return View();
        }

        public ActionResult Contact()
        {
            ViewBag.Message = "Your contact page.";

            return View();
        }
    }
}