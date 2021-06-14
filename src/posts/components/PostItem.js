
import React, { useState, useEffect, useRef } from 'react';
import { connect } from "react-redux";
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import {addLikedPost, identifyTheSelectedPost, isTimeRequest} from "../../store/actions/index"

function PostItem({
  element,
  pageActiveType,
  likedPosts,
  addLikedPost,
  identifyTheSelectedPost,
  isTimeRequest
}) {

  const { id, body, title } = element;
  const [classButtonHeart, setClassButtonHeart] = useState('');

  const activeLineClass =  pageActiveType ? '' : 'uk-heading-divider';
  const onLoad = useRef();

  useEffect(() => {
    setClassButtonHeart(() => likedPosts.find(post => post.id === id) ? 'uk-text-success' : ''
    )
  }, [id, likedPosts])

  
  useEffect(() => {
    if(onLoad.current) isTimeRequest(false)
  })

  return (
    <div >
      <div
        ref={onLoad}
        className="grid uk-card uk-child-width-expand uk-card-default uk-margin-medium-bottom  uk-grid-collapse uk-margin uk-grid">
        {
          pageActiveType === "grid" &&
          <div className="uk-card-media-left uk-cover-container uk-first-column">
          <img
            src="https://picsum.photos/600/400"
            alt=""
            uk-cover='true'
            className="uk-cover"
          />
          <canvas width="600" height="400"></canvas>
        </div>
        }
        <div>
          <div className="uk-card-body">
            <h3 className={`uk-flex-row-reverse uk-card-title uk-margin-remove-bottom uk-flex uk-flex-middle uk-flex-between uk-height-small uk-text-break ${activeLineClass}`}>
              <button
                className={`uk-width-3-4 uk-icon-link ${classButtonHeart}`}
                uk-icon="heart"
                onClick={() => {
                  addLikedPost(element)
                }}
                ></button>
              {title}
            </h3>
            <p
              className={`uk-text-truncate ${activeLineClass}`} >
              {body}
            </p>
            <Link 
              to={`post/${id}`}
              className="uk-button uk-button-text"
              onClick={() => {
                identifyTheSelectedPost(element)
              }}>
              Read more
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

PostItem.propTypes = {
  element: PropTypes.object,
  likedPosts: PropTypes.array,
  pageActiveType: PropTypes.string,
  addLikedPost: PropTypes.func,
  identifyTheSelectedPost: PropTypes.func,
  isTimeRequest: PropTypes.func,
}

const mapStateToProps = state => {
  return {
    likedPosts: state.postsReducer.likedPosts
  }
};

export default connect(mapStateToProps, {addLikedPost, identifyTheSelectedPost, isTimeRequest})(React.memo(PostItem))