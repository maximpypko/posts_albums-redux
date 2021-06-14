import React, { useState, useEffect, useRef } from 'react';
import PropTypes from 'prop-types';

function AlbumItem({
  album,
  likedAlbums,
  addLikedAlbum,
  isTimeRequest
}) {
  const { id, title } = album;
  const [classButtonHeart, setClassButtonHeart] = useState('');
  
  useEffect(() => {
    setClassButtonHeart(() => likedAlbums.find(album => album.id === id) ? 'uk-text-success' : ''
    )
  }, [id, likedAlbums])

  const onLoad = useRef();
  
  useEffect(() => {
    if(onLoad.current) isTimeRequest(false)
  })

  return (
    <div> 
      <div ref={onLoad} className="uk-card uk-card-default uk-margin-medium-bottom uk-light">
        <img src="https://picsum.photos/600/400" alt="" uk-cover='uk-cover'/>
        <canvas width="600" height="400"></canvas>
        <div className="uk-overlay-primary uk-position-cover"></div>
        <div className="uk-overlay uk-overlay-primary uk-position-bottom">
          <p>{title}</p>
        </div>         
        <div className="uk-position-top-right uk-overlay">
          <button
            className = {`${classButtonHeart}`}
            uk-icon="icon: heart; ratio: 2"
            onClick={() => {addLikedAlbum(album)}}        
          ></button>
        </div>                        
      </div>                
    </div> 
  )
}

AlbumItem.propTypes = {
  album: PropTypes.object,
  likedAlbums: PropTypes.array,
  addLikedAlbum: PropTypes.func,
  isTimeRequest: PropTypes.func

}

export default React.memo(AlbumItem);