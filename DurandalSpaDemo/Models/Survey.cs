using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace SpaDemo.Models
{
    public class SurveySummary
    {
        public string Name { get; set; }
        public int Id { get; set; }
    }

    public class Survey
    {
        public string Name { get; set; }
        public List<Question> Questions { get; set; }
    }

    public class Question
    {
        public string Name { get; set; }
        public List<Answer> Answers { get; set; }
    }

    public class Answer
    {
        public string Name { get; set; }
    }


}