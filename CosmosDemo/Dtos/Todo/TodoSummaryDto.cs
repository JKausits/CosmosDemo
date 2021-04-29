using System;

namespace CosmosDemo.Dtos.Todo
{
    public class TodoSummaryDto
    {
        public Guid Id { get; set; }
        public string Title { get; set; }
        public bool IsCompleted { get; set; }
    }
}
