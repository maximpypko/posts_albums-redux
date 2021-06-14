import PropTypes from 'prop-types';
import LikedPostItem from '../../posts/components/LikedPostItem';
import LikedAlbumItem from '../../albums/components/LikedAlbumItem';
import { connect } from "react-redux";
import { deleteLikedPost, deleteLikedAlbum } from "../../store/actions/index"

function Dropdown({likedPosts, likedAlbums, deleteLikedPost, deleteLikedAlbum}) {

  return (
    <div
      className="dropdown__container" 
      uk-dropdown='mode: click'>
      <div className="dropdown__item">
        <div>
          <table className="uk-table uk-table-divider uk-table-justify">
            <thead>
              <tr>
                <th>Posts title</th>
                <th className="uk-text-right">Delete</th>
              </tr>
            </thead>
            <tbody>
              {
                likedPosts.map((post) => {
                  return (
                    <LikedPostItem
                      key={post.id}
                      post={post}
                      deleteLikedPost={deleteLikedPost}
                    />
                  )
                })
              }
            </tbody>
          </table>
        </div>
      </div>
      <div className="dropdown__item">
        <div>
          <table className="uk-table uk-table-divider uk-table-justify">
            <thead>
              <tr>
                <th>Albums title</th>
                <th className="uk-text-right">Delete</th>
              </tr>
            </thead>
            <tbody>
              {
                likedAlbums.map((album) => {
                  return (
                    <LikedAlbumItem
                      key={album.id}
                      album={album}
                      deleteLikedAlbum={deleteLikedAlbum}
                    />
                  )
                })
              }
            </tbody>
          </table>
        </div>
      </div>
    </div>   
  );
}

Dropdown.propTypes = {
  likedPosts: PropTypes.array,
  likedAlbums: PropTypes.array,
  deleteLikedPost: PropTypes.func,
  deleteLikedAlbum: PropTypes.func
}

const mapStateToProps = state => {
  return {
    likedPosts: state.postsReducer.likedPosts,
    likedAlbums: state.albumsReducer.likedAlbums,
  }
};

export default connect(mapStateToProps, { deleteLikedPost, deleteLikedAlbum })(Dropdown);