using CosmosDemo.Entities;
using Microsoft.EntityFrameworkCore;

namespace CosmosDemo.Data
{
    public class ApplicationDbContext : DbContext
    {
        public ApplicationDbContext(DbContextOptions options) : base(options)
        {
        }

        public DbSet<Todo> Todos { get; set; }
    }
}
