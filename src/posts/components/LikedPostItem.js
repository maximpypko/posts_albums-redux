import PropTypes from 'prop-types';
import React from 'react';

function LikedPostItem({ post, deleteLikedPost }) {
   
    return (
        <tr>
            <td className="uk-width-medium uk-text-small">{post.title}</td>
            <td className="uk-text-right">
                <button
                    className="uk-button uk-button--close"
                    type="button"
                    uk-icon="icon: close;"
                    onClick={()=>deleteLikedPost(post.id)}
                ></button>
            </td>
      </tr>
    );
}
  
LikedPostItem.propTypes = {
    post: PropTypes.object,
    deleteLikedPost: PropTypes.func,
}

export default React.memo(LikedPostItem);
