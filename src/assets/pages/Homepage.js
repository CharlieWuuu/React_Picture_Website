import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Search from '../components/Search';
import Picture from '../components/Picture';

const Homepage = () => {
  let [input, setInput] = useState('');
  let [data, setData] = useState(null);
  let [page, setPage] = useState(1);
  let [currentSearch, setCurrentSearch] = useState('');
  const auth = '563492ad6f917000010000017e973bba1a6f4b40bbef32a78f0cb003';
  const initialURL = 'https://api.pexels.com/v1/curated?page=1&per_page=15';
  let searchURL = `https://api.pexels.com/v1/search?query=${input}&page=1&per_page=15`;

  const search = async (url) => {
    let result = await axios.get(url, {
      headers: { Authorization: auth },
    });
    setData(result.data.photos);
    setCurrentSearch(input);
  };

  // Closure
  const morePicture = async () => {
    let newURL;
    setPage(page + 1);
    if (currentSearch === '') {
      newURL = `https://api.pexels.com/v1/curated?page=${page + 1}&per_page=15`;
    } else {
      newURL = `https://api.pexels.com/v1/search?query=${currentSearch}&page=${
        page + 1
      }&per_page=15`;
    }
    let result = await axios.get(newURL, {
      headers: { Authorization: auth },
    });
    setData(data.concat(result.data.photos));
  };

  useEffect(() => {
    search(initialURL);
  }, []);

  return (
    <div>
      <div style={{ minHeight: '100vh' }}>
        <Search
          search={() => {
            if (input == '') {
              search(initialURL);
            } else {
              search(searchURL);
            }
          }}
          setInput={setInput}
        />
        <div className="pictures">
          {data && // 如果 data 是 null，就運算 && 後面的東西
            data.map((d) => {
              return <Picture data={d} key={d.id} />;
            })}
        </div>
        <div className="morePicture">
          <button onClick={morePicture}>更多圖片</button>
        </div>
      </div>
    </div>
  );
};

export default Homepage;
