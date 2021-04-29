using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace CosmosDemo.Data
{
    public static class DependencyInjection
    {
        public static IServiceCollection AddApplicationDbContext(
            this IServiceCollection services,
            IConfiguration configuration)
        {
            services.AddDbContext<ApplicationDbContext>(options =>
            {
                options.UseCosmos(
                    configuration.GetSection("Cosmos").GetSection("accountEndpoint").Value,
                    configuration.GetSection("Cosmos").GetSection("accountKey").Value,
                    databaseName: "TodoDB");
            });
            return services;
        }
    }
}
