import { useState, useEffect } from 'react';
import axios from 'axios';

const useMyHook = (Url) => {
  const [posters, setPosters] = useState([]);

  useEffect(() => {
    const fetchPosters = async () => {
        const response = await axios.get(Url);
        setPosters(response.data.Search);
    };

    fetchPosters();
  }, [Url]);

  return {posters};
};

export default useMyHook;
