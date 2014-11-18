using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using SpaDemo.Models;

namespace SpaDemo.Controllers
{
    public class SurveyController : ApiController
    {
        static List<Survey> Surveys = new List<Survey>();

        // GET: api/Survey
        public IEnumerable<SurveySummary> Get()
        {
            lock (Surveys)
            {
                return Surveys.Select((s, index) => new SurveySummary()
                {
                    Name = s.Name,
                    Id = index
                });
            }
        }

        // GET: api/Survey/5
        public Survey Get(int id)
        {
            lock (Surveys)
            {
                return Surveys[id];
            }
        }

        // POST: api/Survey
        public void Post([FromBody]Survey survey)
        {
            lock (Surveys)
            {
                Surveys.Add(survey);
            }
        }

        // PUT: api/Survey/5
        public void Put(int id, [FromBody]string value)
        {
        }

        // DELETE: api/Survey/5
        public void Delete(int id)
        {
        }
    }
}
