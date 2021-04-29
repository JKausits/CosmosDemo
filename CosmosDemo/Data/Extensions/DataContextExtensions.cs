using System.Linq;

namespace CosmosDemo.Data.Extensions
{
    public static class DataContextExtensions
    {
        public static IQueryable<T> Paginate<T>(this IQueryable<T> query, int? page, int? pageSize)
        {
            if (page.HasValue && pageSize.HasValue)
                return query.Skip(page.Value * pageSize.Value).Take(pageSize.Value);

            return query;
        }
    }
}
