﻿using System;

namespace CosmosDemo.Entities
{
    public class Todo
    {
        public Guid Id { get; set; }
        public string Title { get; set; }
        public string Description { get; set; }
        public DateTime? CompletedDate { get; set; }
    }
}
