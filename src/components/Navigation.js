import React from "react";
import { List, ListItem, Divider } from "react95";
import { useNavigate } from "react-router-dom";

const Navigation = () => {
  const navigate = useNavigate();

  const handleNavClick = (path) => {
    navigate(path);
  };

  return (
    <List horizontalAlign="left" verticalAlign="top" open>
      <ListItem onClick={() => handleNavClick("/")}>Home</ListItem>
      <Divider />
      <ListItem onClick={() => handleNavClick("/projects")}>Projects</ListItem>
      <Divider />
      <ListItem onClick={() => handleNavClick("/resume")}>Resume</ListItem>
      <Divider />
      <ListItem onClick={() => handleNavClick("/contact")}>Contact</ListItem>
    </List>
  );
};

export default Navigation;
