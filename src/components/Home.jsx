import React, { useEffect, useState } from 'react';
import { format } from 'date-fns';


const Home = () => {
  const [blogData, setBlogData] = useState([]);
  const [workData, setWorkData] = useState([]);

  useEffect(() => {
    fetch('https://raw.githubusercontent.com/Ray3en/practical/refs/heads/main/blog_data.json')
      .then((response) => response.json())
      .then((data) => setBlogData(data.slice(0, 2))); // Берем только первые два поста

    fetch('https://raw.githubusercontent.com/Ray3en/practical/refs/heads/main/work_data.json')
      .then((response) => response.json())
      .then((data) => setWorkData(data));
  }, []);



  return (
    <div className="home">
        <header className="header container">
            <div className="profile">
                <div className="profile-left">
                    <h1>Hi, I am John,<br/> Creative Technologist</h1>
                    <p>
                            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
                            sint. Velit officia consequat duis enim velit mollit. Exercitation
                            veniam consequat sunt nostrud amet.
                     </p>
                    <button className="btn">Download Resume</button>
                </div>
                <div className='profile-right'>
                    <img src="https://s3-alpha-sig.figma.com/img/c316/adc4/65a80990af3a0075303343f0d615c92a?Expires=1732492800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=SFru44Kr9duGL3TjRNZ4yXNP3VmIvL3NUJPz~-AUB1V0YIGV~Jfczw4G4f-lKLBFV1CTMng1rWkqP6ez3hCWdMWFv9BsCHRO0xLkeUkRumatDjzxWzlTVT96CzW-V~tsEqzj9HW9qccuGxm6qRkSuEX8OF8Nf~HTbzKIiXcOCz3ReeeOQVvavR6XfddT6lsBbMRR8RdqD2jRCjD0wbxPJGqxgrySwXfOuqp9dYanq6ozYJ6fIjAdb7T6pAHq3jUrfttK-ZhVjcjzVZBIC5vRL17WZ19FefMWLUtCvpSfG7BZHFwxCbrpipgXDpBBr6GBLc5TQno6fsAhiaF0a7OKKg__" alt="Profile" className="profile-img" />
                </div>    
            </div>
        </header>

        <section className="recent-posts">
            <div className='container'>
                    <h2 style={{fontSize:'22px', fontWeight:'400'}}>Recent posts</h2>
                    <div className="posts-cont">
                        {blogData.map((post) => {
                            const formattedDate = format(new Date(post.date), 'dd MMM yyyy');
                            return (
                                <div className="post-card" key={post.id}>
                                    <h3 style={{fontSize:'26px'}}>{post.title}</h3>
                                    <p style={{fontSize:'18px'}} className="meta">
                                        {formattedDate} | {post.tags.join(', ')}
                                    </p>
                                    <p style={{fontSize:'16px'}}>{post.text}</p>
                                </div>
                            );
                        })}
                    </div>
            </div>
        </section>

        <div className='container'>
            <section className="featured-works">
                <h2>Featured works</h2>
                {workData.slice(0, 3).map((work) => (
                    <div className="work-item" key={work.id}>
                        <img width={246} src={work.main_img} alt={work.title} />
                            <div className="work-details">
                                <h3>{work.title}</h3>
                                <p className="meta">
                                    <span className='work-year'> {work.year} </span>  <span className='work-tags'>{work.tags.join(', ')}</span> 
                                </p>
                                <p>{work.text}</p>
                            </div>
                    </div>
                ))}
            </section>
        </div>
    </div>
     
    
  );
};

export default Home;