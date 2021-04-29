using System;
using System.Net;

namespace CosmosDemo.Exceptions
{
    public class NotFoundException : ApiException
    {
        public NotFoundException(string message = null, string details = null) : base((int)HttpStatusCode.NotFound, message, details)
        {
        }

        public NotFoundException(Guid id, string name, string details = null) : this($"{name} with ID '{id}' not found.", details)
        {

        }
    }
}
