import React, { useEffect, useState } from 'react';
import axios from 'axios';

function Home() {
  const [posters, setPosters] = useState([]);

  useEffect(() => {
    const fetchPosters = async () => {
      const response = await axios.get('http://www.omdbapi.com/?apikey=38c5d5e3&s=batman');
      setPosters(response.data.Search);
    };

    fetchPosters();
  }, []);

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
