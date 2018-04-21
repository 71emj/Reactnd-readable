import React from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { Grid, Container, Segment, Header, Divider, Icon, Button } from "semantic-ui-react";
import { Post, Preview, Util } from "../components";
import { post } from "../actions";



const Dashboard = props => {
  const { Category, Post: post_ } = props;
  const { all, ...categories } = Category || { all: null };
  return (
    <Container text textAlign="left">
      <Util.Gap size="10rem"/>{
        Object.entries(categories).map(([category, { posts }]) => {
          posts = posts ? Array.from(posts).slice(0, 3) : [];
          return (
            <div key={category}>
              <Preview />
              {/* <Segment.Group>
                <Segment inverted color="violet">
                  <Header>
                    {category.toUpperCase()}
                    <Header.Content style={{ fontSize: "14px", float: "right" }}>
                      read more
                      <Util.Gap inline horizontal size="0.25rem"/>
                      <Icon size="small" name="right arrow"/>
                    </Header.Content>
                  </Header>
                </Segment>
                <Segment>
                  {posts.map(key => (
                    <Post key={key}
                      author={post_[key].author}
                      title={post_[key].title}
                      body={trimText(post_[key].body)}
                      timestamp={post_[key].timestamp}
                    />
                  ))}
                  <Util.Gap size="1rem"/>
                </Segment>
              </Segment.Group> */}
              <Util.Gap size="3rem"/>
            </div>
          )
      })}
    </Container>
  );
}

const mapStateToProps = state => ({ ...state.models });
const mapDispatchToProps = ({ createPost, putPost, delPost }) =>
  dispatch => ({
    create: bindActionCreators(createPost, dispatch),
    update: bindActionCreators(putPost, dispatch),
    delete: bindActionCreators(delPost, dispatch)
  });

export default connect(mapStateToProps, mapDispatchToProps(post))(Dashboard);
