using AutoMapper;
using CosmosDemo.Dtos.Todo;
using CosmosDemo.Entities;

namespace CosmosDemo
{
    public class MappingProfile : Profile
    {
        public MappingProfile()
        {
            MapTodo();
        }

        private void MapTodo()
        {
            CreateMap<Todo, TodoSummaryDto>().ForMember(x => x.IsCompleted, 
                opt => opt.MapFrom(src => src.CompletedDate.HasValue));
            CreateMap<TodoFormDto, Todo>();
            CreateMap<Todo, TodoDto>();
        }
    }
}
