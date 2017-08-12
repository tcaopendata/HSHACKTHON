using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using 戀戀台三線網站.Models;

namespace 戀戀台三線網站.Controllers
{
    public class Contact_usApiController : ApiController
    {
        // GET api/<controller>
        private GuestBookEntitiesweb db = new GuestBookEntitiesweb();

        public IEnumerable<Contact_us> Get()
        {
            var result = from g in db.Contact_us
                         orderby g.PostTime descending
                         select g;

            return result.ToList();
        }

        // GET api/<controller>/5
        public IEnumerable<Contact_us> Get(string name)
        {
            var result = from x in db.Contact_us
                         orderby x.PostTime descending
                         where x.Name == name
                         select x;
            return result.ToList();
        }

        // POST api/<controller>
        //http://localhost:56098/api/contact_usapi/post?name=邱炯達&email=mentha5681@gmail.com.tw&phonenumber=0919258855&content=1234569
        [HttpGet]
        public string Post(Contact_us contact_us ,string name ,string email,string phonenumber ,string content)
        {
            try
            {
                db.Contact_us.Add(new Contact_us
                {
                    Id = Guid.NewGuid(),
                    Name = name,
                    UserComments = content,
                    Phone = phonenumber,
                    Email = email,
                    PostTime = DateTime.UtcNow.AddHours(08)
                });
                db.SaveChanges();
                return "OK";
            }
            catch (Exception)
            {
                return "資料無法傳入";
            }
        }

        // PUT api/<controller>/5
        public void Put(int id, [FromBody]string value)
        {
        }

        // DELETE api/<controller>/5
        [HttpDelete]
        public string Delete(Contact_us contact_us ,Guid id)
        {
            contact_us = db.Contact_us.Find(id);
            if (contact_us != null)
            {
                db.Contact_us.Remove(contact_us);
                db.SaveChanges();
                return "OK";
            }
            return "找不到要刪除的參數";
        }
    }
}