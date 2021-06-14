import PropTypes from 'prop-types';

function LikedAlbumItem({ album, deleteLikedAlbum }) {

    return (
        <tr>
            <td className="uk-width-medium uk-text-small">{album.title}</td>
            <td className="uk-text-right">
                <button
                    className="uk-button uk-button--close"
                    type="button"
                    uk-icon="icon: close;"
                    onClick={()=> deleteLikedAlbum(album.id)}
                ></button>
            </td>
      </tr>
    );
}
  
LikedAlbumItem.propTypes = {
    album: PropTypes.array,
    deleteLikedAlbum: PropTypes.func
}

export default LikedAlbumItem;