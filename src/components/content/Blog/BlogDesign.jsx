/* eslint-disable react/prop-types */

import { Link } from 'react-router-dom';


// Function to remove HTML tags from a string
const stripHtmlTags = (html) => {
  const tempDiv = document.createElement('div');
  tempDiv.innerHTML = html;
  return tempDiv.textContent || tempDiv.innerText || '';
};

const HomePosts = ({ post, onDelete }) => {
  const sanitizedContent = stripHtmlTags(post.content);


  return (
    <div className="container mb-4">
      <div className="row shadow p-3 mb-5 bg-white rounded">
        <div className="col ">
          <div className="d-flex justify-content-center align-items-center" style={{ height: '200px' }}>
            <img src={post.imageUrl} alt="" className="img-fluid" style={{ height: '200px', width: '300px' }} />
          </div>
        </div>
        <div className="col-md-8 mt-3">
          <h1 className="mb-3">{post.title}</h1>
          <div className="mb-3 d-flex justify-content-between align-items-center text-muted">
            <p>@{post.author}</p>
            <p>{new Date(post.date).toLocaleDateString()}</p>
          </div>
          <p className="mb-4">{sanitizedContent.slice(0, 200)}<Link to={`/view/${post.id}`}> ...Read more</Link></p>


          <div>
            <Link to={`/edit/${post.id}`}>
              <i className="fa-regular fa-pen-to-square"></i>
            </Link>
            <i className="fa-solid fa-trash" style={{ marginLeft: 20 }} onClick={onDelete}></i>
          </div>

        </div>
      </div>
    </div>
  );
};

export default HomePosts;

