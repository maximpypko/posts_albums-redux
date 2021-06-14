import React from 'react';
import PropTypes from 'prop-types';
import { connect } from "react-redux";
import { isTimeRequest } from "../../store/actions/index";
import PostItem from "../components/PostItem";
import WarningIfNoText from "../../common/components/WarningIfNoText";

function GridViewWithPictures({ posts, pageActiveType, isTimeRequest }) {

  return (
    <div className="uk-container uk-cover-container">  
      <div className='uk-grid uk-child-width-1-2@s uk-child-width-1-2@m ' >
      
        {
          posts.length ?
            posts.map(element => {
              return <PostItem
                key={element.id}
                element={element}
                pageActiveType={pageActiveType}
              />
            }) :
            <WarningIfNoText isTimeRequest={isTimeRequest}/>
        }
      </div>
    </div>
  );
}

GridViewWithPictures.propTypes = {
  posts: PropTypes.oneOfType([
    PropTypes.array,
    PropTypes.bool
  ])
};

const mapStateToProps = state => {
  return {
    posts: state.postsReducer.posts,
    pageActiveType: state.postsReducer.pageActiveType
  }
};
export default connect(mapStateToProps, { isTimeRequest })(GridViewWithPictures);