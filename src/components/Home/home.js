import React, { useEffect, useState } from 'react';

function Home() {
  const [posters, setPosters] = useState([]);

  useEffect(() => {
    const fetchPosters = async () => {
      const response = await fetch('http://www.omdbapi.com/?apikey=38c5d5e3&s=batman&type=movie');
      const data = await response.json();
      setPosters(data.Search || []);
    };

    fetchPosters();
  }, []);

  return (
    <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
      {posters.map((movie) => (
        <div key={movie.imdbID} style={{ margin: '10px' }}>
          <img src={movie.Poster} alt={movie.Title} style={{ width: '200px' }} />
        </div>
      ))}
    </div>
  );
}

export default Home;
