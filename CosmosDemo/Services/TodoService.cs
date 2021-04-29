using AutoMapper;
using AutoMapper.QueryableExtensions;
using CosmosDemo.Data;
using CosmosDemo.Data.Extensions;
using CosmosDemo.Dtos.Todo;
using CosmosDemo.Entities;
using CosmosDemo.Exceptions;
using CosmosDemo.Interfaces.Services;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace CosmosDemo.Services
{
    public class TodoService : ITodoService
    {
        private readonly ApplicationDbContext _context;
        private readonly IMapper _mapper;

        public TodoService(ApplicationDbContext context, IMapper mapper)
        {
            _context = context;
            _mapper = mapper;
        }

        public async Task CompleteTodoAsync(Guid id)
        {
            var todo = await FindTodoAsync(id);
            if (todo.CompletedDate.HasValue)
                throw new BadRequestException($"Todo with ID '{id}' was already completed");

            todo.CompletedDate = DateTime.UtcNow;
            await _context.SaveChangesAsync();
        }

        public async Task<TodoDto> CreateTodoAsync(TodoFormDto dto)
        {
            var todo = _mapper.Map<Todo>(dto);
            _context.Todos.Add(todo);
            await _context.SaveChangesAsync();
            return _mapper.Map<TodoDto>(todo);
        }

        public async Task DeleteTodoAsync(Guid id)
        {
            var todo = await FindTodoAsync(id);
            _context.Remove(todo);
            await _context.SaveChangesAsync();
        }

        public async Task<IEnumerable<TodoSummaryDto>> GetSummariesAsync(int page, int pageSize)
        {
            return await _context
                .Todos
                .ProjectTo<TodoSummaryDto>(_mapper.ConfigurationProvider)
                .Paginate(page, pageSize)
                .ToListAsync();

        }

        public async Task<TodoDto> GetTodoAsync(Guid id)
        {
            var todo = await FindTodoAsync(id);
            return _mapper.Map<TodoDto>(todo);
        }

        public async Task<TodoDto> UpdateTodoAsync(Guid id, TodoFormDto dto)
        {
            var todo = await FindTodoAsync(id);
            _mapper.Map(dto, todo);
            await _context.SaveChangesAsync();
            return _mapper.Map<TodoDto>(todo);
        }

        #region Private
        private async Task<Todo> FindTodoAsync(Guid id)
        {
            var todo = await _context.Todos.FindAsync(id);
            if (todo == null) throw new NotFoundException(id, "Todo");
            return todo;
        }
        #endregion
    }
}
