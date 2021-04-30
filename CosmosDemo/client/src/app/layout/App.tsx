import Container from "@material-ui/core/Container";
import React from "react";
import TodoList from "../../features/todo/pages/TodoList";
import "./App.css";
import ModalContainer from "./ModalContainer";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import EditTodo from "../../features/todo/pages/EditTodo";
import TodoDetail from "../../features/todo/pages/TodoDetail";
import NotificationContainer from "./NotificationContainer";
import Notification from "../../features/demo/pages/Notification";
import Menu from "./Menu";
import RequestSpinner from "./RequestSpinner";

function App() {
  return (
    <Router>
      <Menu />
      <RequestSpinner />
      <ModalContainer />
      <NotificationContainer />
      <Container style={{ marginTop: "12px" }}>
        <Switch>
          <Route path="/" component={TodoList} exact />
          <Route path="/notification" component={Notification} exact />
          <Route path="/:id/edit" component={EditTodo} />
          <Route path="/:id" component={TodoDetail} />
        </Switch>
      </Container>
    </Router>
  );
}

export default App;
