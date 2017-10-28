using System;
using System.Collections.Generic;
using System.Data;
using System.Data.Entity;
using System.Linq;
using System.Net;
using System.Web;
using System.Web.Mvc;
using 戀戀台三線網站.Models;

namespace 戀戀台三線網站.Controllers
{
    public class Contact_usController : Controller
    {
        private GuestBookEntitiesweb db = new GuestBookEntitiesweb();

        // GET: Contact_us
        public ActionResult Index()
        {
            var model =(from e in db.Contact_us
                        orderby e.PostTime descending
                        select e).Take(50);
            return View(model.ToList());
        }

        // GET: Contact_us/Details/5
        public ActionResult Details(Guid? id)
        {
            if (id == null)
            {
                return new HttpStatusCodeResult(HttpStatusCode.BadRequest);
            }
            Contact_us contact_us = db.Contact_us.Find(id);
            if (contact_us == null)
            {
                return HttpNotFound();
            }
            return View(contact_us);
        }

        // GET: Contact_us/Create
        public ActionResult Create()
        {
            return View();
        }

        // POST: Contact_us/Create
        // 若要免於過量張貼攻擊，請啟用想要繫結的特定屬性，如需
        // 詳細資訊，請參閱 https://go.microsoft.com/fwlink/?LinkId=317598。
        [HttpPost]
        [ValidateAntiForgeryToken]
        public ActionResult Create(Contact_us contact_us)
        {
            if (ModelState.IsValid)
            {
                contact_us.Id = Guid.NewGuid();
                contact_us.PostTime = DateTime.UtcNow.AddHours(08);
                db.Contact_us.Add(contact_us);
                db.SaveChanges();
                return RedirectToAction("Create");
            }

            return View(contact_us);
        }

        // GET: Contact_us/Edit/5
        public ActionResult Edit(Guid? id)
        {
            if (id == null)
            {
                return new HttpStatusCodeResult(HttpStatusCode.BadRequest);
            }
            Contact_us contact_us = db.Contact_us.Find(id);
            if (contact_us == null)
            {
                return HttpNotFound();
            }
            return View(contact_us);
        }

        // POST: Contact_us/Edit/5
        // 若要免於過量張貼攻擊，請啟用想要繫結的特定屬性，如需
        // 詳細資訊，請參閱 https://go.microsoft.com/fwlink/?LinkId=317598。
        [HttpPost]
        [ValidateAntiForgeryToken]
        public ActionResult Edit([Bind(Include = "Id,Name,Email,Phone,UserComments,PostTime")] Contact_us contact_us)
        {
            if (ModelState.IsValid)
            {
                db.Entry(contact_us).State = EntityState.Modified;
                db.SaveChanges();
                return RedirectToAction("Index");
            }
            return View(contact_us);
        }

        // GET: Contact_us/Delete/5
        public ActionResult Delete(Guid? id)
        {
            if (id == null)
            {
                return new HttpStatusCodeResult(HttpStatusCode.BadRequest);
            }
            Contact_us contact_us = db.Contact_us.Find(id);
            if (contact_us == null)
            {
                return HttpNotFound();
            }
            return View(contact_us);
        }

        // POST: Contact_us/Delete/5
        [HttpPost, ActionName("Delete")]
        [ValidateAntiForgeryToken]
        public ActionResult DeleteConfirmed(Guid id)
        {
            Contact_us contact_us = db.Contact_us.Find(id);
            db.Contact_us.Remove(contact_us);
            db.SaveChanges();
            return RedirectToAction("Index");
        }

        protected override void Dispose(bool disposing)
        {
            if (disposing)
            {
                db.Dispose();
            }
            base.Dispose(disposing);
        }
    }
}
