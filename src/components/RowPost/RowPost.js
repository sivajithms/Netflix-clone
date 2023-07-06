import React, { useEffect, useState } from 'react';
import YouTube from 'react-youtube';
import './RowPost.css';
import { imageUrl, API_KEY } from '../../constants/constants';
import axios from '../../axios';

function RowPost(props) {
  const [movies, setMovies] = useState([]);
  const [urlId, setUrlId] = useState('');

  useEffect(() => {
    axios.get(props.url).then(response => {
      // console.log(response.data);
      setMovies(response.data.results);
    });
  }, []);

  const handleMovie = (id, i) => {
    // console.log(id);
    axios.get(`/movie/${id}/videos?api_key=${API_KEY}&language=en-US`).then(response => {
      // console.log(response.data);
      if (response.data.results.length !== 0) {
        setUrlId({
          url: response.data.results[0].key,
          index: i
        });
      } else {
        console.log('Array is empty');
      }
    });
  };

  const opts = {
    playerVars: {
      autoplay: 1,
    },
  };

  return (
    <div className='row'>
      <h2>{props.title}</h2>
      <div className="posters">
        {movies.map((obj, i) => (
          <React.Fragment key={i}>
            {urlId.index === i ? (
              <YouTube videoId={urlId.url} opts={opts} className={props.isSmall ? 'smallPoster' : 'poster'} />
            ) : (
              <img
                onClick={() => handleMovie(obj.id, i)}
                className={props.isSmall ? 'smallPoster' : 'poster'}
                src={`${imageUrl + obj.backdrop_path}`}
                alt="poster"
              />
            )}
          </React.Fragment>
        ))}
      </div>
    </div>
  );
}

export default RowPost;
