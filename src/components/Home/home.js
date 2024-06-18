import React from 'react';
import useMyHook from '../../hook';

function Home() {
  const Url = 'http://www.omdbapi.com/?apikey=38c5d5e3&s=batman';
  const { posters } = useMyHook(Url);

  return (
    <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' , paddingBottom: '9.36rem'}}>
      {posters.map((movie) => (
        <div key={movie.imdbID} style={{ margin: '15px' }}>
          <img src={movie.Poster} alt={movie.Title} style={{ width: '200px' }} />
        </div>
      ))}
    </div>
  );
}

export default Home;
