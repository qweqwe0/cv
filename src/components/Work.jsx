import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Work = () => {
  const [workData, setWorkData] = useState([]);

  useEffect(() => {
    fetch('https://raw.githubusercontent.com/Ray3en/practical/refs/heads/main/work_data.json')
      .then((response) => response.json())
      .then((data) => setWorkData(data));
  }, []);

  return (
    <div className="work container-work">
      <h1 className=''>Work</h1>
      {workData.length > 0 ? (
        workData.map(work => (
          <div className="work-item" key={work.id}>
            <img width={246} src={work.main_img} alt={work.title} />
            <div className="work-details">
              <Link to={`/work/${work.id}`}><h3>{work.title}</h3></Link>
              <p className="meta"> <span className='work-year'> {work.year} </span>  <span className='work-tags'>{work.tags.join(', ')}</span> </p>
              <p>{work.text}</p>
            </div>
          </div>
        ))
      ) : (
        <p>No work data available.</p>
      )}
    </div>
  );
  
};

export default Work;
