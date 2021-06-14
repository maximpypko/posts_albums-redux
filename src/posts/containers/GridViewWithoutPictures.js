import React from 'react';
import PropTypes from 'prop-types';
import PostItem from "../components/PostItem";
import WarningIfNoText from "../../common/components/WarningIfNoText";
import { connect } from "react-redux";
import { isTimeRequest } from "../../store/actions/index";

function GridViewWithoutPictures({ posts, isTimeRequest }) {

  return (
    <div className="uk-container uk-cover-container">  
      <div className='uk-grid uk-child-width-1-2@s uk-child-width-1-3@m'>
        {
          posts.length ?
            posts.map(element => {

              return <PostItem
                key={element.id}
                element={element}
              />
            }) :
            <WarningIfNoText isTimeRequest={isTimeRequest}/>
          }
      </div>
    </div>
  );
}

GridViewWithoutPictures.propTypes = {
  posts: PropTypes.oneOfType([
    PropTypes.array,
    PropTypes.bool
  ])
}

const mapStateToProps = state => {
  return {
    posts: state.postsReducer.posts,
  }
};
export default connect(mapStateToProps, { isTimeRequest })(GridViewWithoutPictures);