import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const WorkDetail = () => {
  const { id } = useParams();
  const [work, setWork] = useState(null);

  useEffect(() => {
    fetch('https://raw.githubusercontent.com/Ray3en/practical/refs/heads/main/work_data.json')
      .then((response) => response.json())
      .then((data) => {
        const foundWork = data.find((item) => item.id === parseInt(id));
        setWork(foundWork);
      });
  }, [id]);

  if (!work) {
    return <p>Loading...</p>;
  }

  return (
    <div className="work-detail work-detail-container">
      <h1>{work.full_title}</h1>
      <p className="meta"> <span className='work-year'> {work.year} </span>  <span className='work-tags'>{work.tags.join(', ')}</span> </p>
      <p className='wd-text'>{work.text}</p>
      <img  className="content-image" src={work.main_img} alt={work.full_title} />
  
      {work.content.map((item, index) => {
        const [type, content] = item; 
        switch (type) {
          case "h1":
            return <h2 key={index}>{content}</h2>;
          case "h2":
            return <h3 key={index}>{content}</h3>;
          case "img":
            return <img className="content-image" alt=''  key={index} src={content}  />;
          case "text":
            return <p className='wd-text' key={index}>{content}</p>;
          default:
            return null;
        }
      })}
    </div>
  );
  
  
};

export default WorkDetail;