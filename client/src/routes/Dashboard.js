import React from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { Grid, Container, Segment, Header, Divider, Icon, Button } from "semantic-ui-react";
import { Post, Preview, Util } from "../components";
import { Helpers } from "../util";
import { post } from "../actions";

const Dashboard = props => {
  const { Category, Post } = props;
  const { all, ...categories } = Category || { all: null };
  return (
    <Container text textAlign="left" >
      { Object.entries(categories).map(([category, { posts }]) => {
          posts = posts ? Array.from(posts).slice(0, 3) : [];
          return (
            <div key={category}>
              <Util.Paragraph size="1.25rem" >
                { category.toUpperCase() }
              </Util.Paragraph>
              { posts.length
                  ? posts.map(postId => <Preview key={postId} post={ Post[postId] }/>)
                  : <Util.Paragraph align="center">No Content</Util.Paragraph> }
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
