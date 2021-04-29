import React, { useState } from "react";
import MenuIcon from "@material-ui/icons/Menu";
import { AppBar, IconButton } from "@material-ui/core";
import Drawer from "@material-ui/core/Drawer";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import List from "@material-ui/core/List";
import { makeStyles } from "@material-ui/core/styles";
import { Link } from "react-router-dom";
import Toolbar from "@material-ui/core/Toolbar";

const useStyles = makeStyles({
  list: {
    width: 250,
  },
  navContainer: {
    display: "flex",
    justifyContent: "flex-end",
  },
});

class LinkProps {
  constructor(public text: string, public path: string) {}
}

const links = [
  new LinkProps("Home", "/"),
  new LinkProps("Notifications", "/notification"),
];

const Menu = () => {
  const classes = useStyles();
  const [isOpen, setOpen] = useState(false);

  const toggle = () => setOpen((isOpen) => !isOpen);

  const createLink = (props: any, path: string) => (
    <Link {...props} to={path} onClick={toggle} />
  );

  const createNavItem = (props: LinkProps) => {
    return (
      <ListItem
        key={props.path}
        button
        component={(c) => createLink(c, props.path)}
      >
        <ListItemText>{props.text}</ListItemText>
      </ListItem>
    );
  };

  return (
    <AppBar position="static">
      <Toolbar>
        <IconButton onClick={toggle} edge="start" color="inherit">
          <MenuIcon />
        </IconButton>
        <Drawer open={isOpen} onClose={toggle}>
          <List className={classes.list}>{links.map(createNavItem)}</List>
        </Drawer>
      </Toolbar>
    </AppBar>
  );
};

export default Menu;
