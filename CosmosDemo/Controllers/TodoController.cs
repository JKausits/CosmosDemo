using CosmosDemo.Dtos.Todo;
using CosmosDemo.Interfaces.Services;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Threading.Tasks;

namespace CosmosDemo.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class TodoController : ControllerBase
    {
        private readonly ITodoService _todoService;

        public TodoController(ITodoService todoService)
        {
            _todoService = todoService;
        }

        [HttpGet]
        public async Task<IActionResult> GetTodos(
            [FromQuery] int page = 0,
            [FromQuery] int pageSize = 10)
        {
            var todos = await _todoService.GetSummariesAsync(page, pageSize);
            return Ok(todos);
        }

        [HttpGet("{id}")]
        public async Task<IActionResult> GetTodo(Guid id)
        {
            var todo = await _todoService.GetTodoAsync(id);
            return Ok(todo);
        }

        [HttpPost]
        public async Task<IActionResult> CreateTodo(TodoFormDto dto)
        {
            var todo = await _todoService.CreateTodoAsync(dto);
            return CreatedAtAction(nameof(GetTodo), new { todo.Id }, todo);
        }

        [HttpPut("{id}")]
        public async Task<IActionResult> UpdateTodo(Guid id, TodoFormDto dto)
        {
            var todo = await _todoService.UpdateTodoAsync(id, dto);
            return Ok(todo);
        }

        [HttpPatch("{id}/complete")]
        public async Task<IActionResult> CompleteTodo(Guid id)
        {
            await _todoService.CompleteTodoAsync(id);
            return Ok();
        }

        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteTodo(Guid id)
        {
            await _todoService.DeleteTodoAsync(id);
            return NoContent();
        }
    }
}
