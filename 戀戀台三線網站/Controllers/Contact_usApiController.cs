﻿using System;
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

        public IEnumerable<Table> Get()
        {
            var result = from g in db.Tables
                         orderby g.PostTime descending
                         select g;
            return result.ToList();
        }

        // GET api/<controller>/5
        public string Get(int id)
        {
            return "value";
        }

        // POST api/<controller>
        public void Post([FromBody]string value)
        {
        }

        // PUT api/<controller>/5
        public void Put(int id, [FromBody]string value)
        {
        }

        // DELETE api/<controller>/5
        public void Delete(int id)
        {
        }
    }
}