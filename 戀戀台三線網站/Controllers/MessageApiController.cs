using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using 戀戀台三線網站.Models;

namespace 戀戀台三線網站.Controllers
{
    public class MessageApiController : ApiController
    {

        private GuestBookEntitiesweb db = new GuestBookEntitiesweb();

        // GET api/<controller>
        [HttpGet]
        public IEnumerable<Table> Get()
        {
            var result = from g in db.Tables
                         orderby g.PostTime descending
                         select g;
            return result.ToList();
        }

        // GET api/<controller>/5
        public IEnumerable<Table> Get(string title)
        {
            var result = from g in db.Tables
                         orderby g.PostTime descending
                         where g.Title == title
                         select g;

            return result.ToList();
        }

        // POST api/<controller>
        //用GET的好處在於，可以使用遊覽器進行資料傳出
        [HttpGet]
        public string Post(Table table , string tital , string content)
        {

            try
            {
            db.Tables.Add(new Table
            {
                Id = Guid.NewGuid(),
                PostTime = DateTime.UtcNow.AddHours(08),
                Title = tital,
                Content = content
            });
            db.SaveChanges();
            return "OK";
            }
            catch (Exception e)
            {
                return "無資料傳入";
            }

        }

        // PUT api/<controller>/5
        public void Put(int id, [FromBody]string value)
        {
        }

        // DELETE api/<controller>/5
        [HttpDelete]
        public string Delete(Table table, Guid id)
        {
            table = db.Tables.Find(id);
            if (table != null)
            {
               db.Tables.Remove(table);
               db.SaveChanges();
               return "OK";
            }
            return "找不到要刪除的參數";
        }
    }
}