import Agent from "./agent";
import TodoRequests from "./todo-requests";

export default class RequestFactory {
  private static readonly baseUrl = "https://localhost:44348/api/";
  private static readonly agent = new Agent(RequestFactory.baseUrl);

  public static readonly TodoRequests = new TodoRequests(RequestFactory.agent);
}
