import axios from "axios";
import React, { useEffect, useState } from "react";

const AstronomyPic = () => {
  const [pictureData, setPictureData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios.get(
        `https://api.nasa.gov/planetary/apod?api_key=0Gqsqdk0tb23PARbuMLRYUEnpfG9gZQxmweNFRCM`
      );
      setPictureData(result.data);
    };
    fetchData();
  }, []);

  return (
    <div>
      {pictureData ? (
        <>
          <h3>{pictureData.title}</h3>
          <img src={pictureData.url} alt={pictureData.title} />
          <p>{pictureData.explanation}</p>
        </>
      ) : (
        <h3>loading....</h3>
      )}
    </div>
  );
};
export default AstronomyPic;
