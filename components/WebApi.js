import React, { useState, useEffect } from 'react';

const WebApi = () => {

  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch('https://my-json-server.typicode.com/cemkayaturk/fakelist/db')
      .then((response) => response.json())
      .then((json) => setData(json))
      .catch((error) => console.error(error))
      .finally(() => setLoading(false));
  }, []);
  jsonData = data;
};

export{WebApi};