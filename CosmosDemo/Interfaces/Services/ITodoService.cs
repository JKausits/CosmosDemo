using CosmosDemo.Dtos.Todo;
using System;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace CosmosDemo.Interfaces.Services
{
    public interface ITodoService
    {
        Task<IEnumerable<TodoSummaryDto>> GetSummariesAsync(int page, int pageSize);
        Task<TodoDto> GetTodoAsync(Guid id);
        Task<TodoDto> CreateTodoAsync(TodoFormDto dto);
        Task<TodoDto> UpdateTodoAsync(Guid id, TodoFormDto dto);
        Task CompleteTodoAsync(Guid id);
        Task DeleteTodoAsync(Guid id);
    }
}
