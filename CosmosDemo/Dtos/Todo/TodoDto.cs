using System;

namespace CosmosDemo.Dtos.Todo
{
    public class TodoDto
    {
        public Guid Id { get; set; }
        public string Title { get; set; }
        public string Description { get; set; }
        public DateTime? CompletedDate { get; set; }
    }
}
