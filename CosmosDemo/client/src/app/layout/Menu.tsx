import React, { useState } from "react";
import MenuIcon from "@material-ui/icons/Menu";
import { AppBar, IconButton } from "@material-ui/core";
import Drawer from "@material-ui/core/Drawer";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import List from "@material-ui/core/List";
import { makeStyles } from "@material-ui/core/styles";
import { Link as RouterLink } from "react-router-dom";
import Toolbar from "@material-ui/core/Toolbar";
import ListItemIcon from "@material-ui/core/ListItemIcon";

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
  constructor(
    public text: string,
    public to: string,
    public icon?: React.ReactNode,
    public toggle?: () => void
  ) {}
}

const ListItemLink = (props: LinkProps) => {
  const { icon, text, to, toggle } = props;

  const renderLink = React.useMemo(
    () =>
      React.forwardRef(
        (itemProps, ref: React.ForwardedRef<HTMLAnchorElement>) => (
          <RouterLink to={to} ref={ref} {...itemProps} />
        )
      ),
    [to]
  );

  return (
    <li onClick={toggle !== undefined ? toggle : () => {}}>
      <ListItem button component={renderLink}>
        {icon ? <ListItemIcon>{icon}</ListItemIcon> : null}
        <ListItemText primary={text} />
      </ListItem>
    </li>
  );
};

const Menu = () => {
  const classes = useStyles();
  const [isOpen, setOpen] = useState(false);

  const toggle = () => setOpen((isOpen) => !isOpen);

  const links = [
    new LinkProps("Home", "/", undefined, toggle),
    new LinkProps("Notifications", "/notification", undefined, toggle),
  ];

  return (
    <AppBar position="static">
      <Toolbar>
        <IconButton onClick={toggle} edge="start" color="inherit">
          <MenuIcon />
        </IconButton>
        <Drawer open={isOpen} onClose={toggle}>
          <List className={classes.list}>
            {links.map((link) => (
              <ListItemLink {...link} key={link.to} />
            ))}
          </List>
        </Drawer>
      </Toolbar>
    </AppBar>
  );
};

export default Menu;
