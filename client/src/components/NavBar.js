import React from "react";
import { Link } from "react-router-dom";
import { Container, Menu, Dropdown, Icon } from "semantic-ui-react";
import { Helpers } from "../util";

const Navbar = props => {
  const { history, location } = props;
  const borderLess = {
    borderRadius: "0"
  };
  const top = {
    top: "2rem"
  };
  const options = [
    { key: "time", text: "Time Posted", value: "time", icon: "clock" },
    { key: "popularity", text: "Most Liked", value: "popularity", icon: "like" },
    { key: "category", text: "Categories", value: "category", icon: "unordered list" }
  ];
  return (
    <Menu inverted compact borderless fixed="top" style={borderLess} color="violet">
      <Container>
        <Link to="/" children={
          <Menu.Item link header as="h3" name="MyReads" />} />
        <Menu.Menu position="right">
          <Menu.Item link>
            <Icon name="compose" />
            <Link to={{
              pathname: "/post",
              search: Helpers.stringifyQuery({ pid: "8xf0y6ziyjabvozdd253nd" })
            }}>Add Post</Link>
          </Menu.Item>
          <Menu.Item link>
            <Icon name="filter" />
            <Dropdown text="Filter By">
              <Dropdown.Menu style={{ ...borderLess, ...top }} defaultValue={options[0]}>
                <Dropdown.Header>Sort Content</Dropdown.Header>
                <Dropdown.Divider />
                {options.map(option => <Dropdown.Item {...option}/> )}
              </Dropdown.Menu>
            </Dropdown>
          </Menu.Item>
        </Menu.Menu>
      </Container>
    </Menu>
  );
};

export default Navbar;
