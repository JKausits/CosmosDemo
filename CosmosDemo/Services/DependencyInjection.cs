using CosmosDemo.Interfaces.Services;
using Microsoft.Extensions.DependencyInjection;

namespace CosmosDemo.Services
{
    public static class DependencyInjection
    {
        public static IServiceCollection AddServices(this IServiceCollection services)
        {
            services.AddTransient<ITodoService, TodoService>();
            return services;
        }
    }
}
