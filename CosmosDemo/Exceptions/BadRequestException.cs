using System.Net;

namespace CosmosDemo.Exceptions
{
    public class BadRequestException : ApiException
    {
        public BadRequestException(string message = null, string details = null) : base((int) HttpStatusCode.BadRequest, message, details)
        {
        }
    }
}
