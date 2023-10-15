/* eslint-disable react/prop-types */

import { Link } from "react-router-dom"

  
 
   
  
const stripHtmlTags = (html) => {
    const tempDiv = document.createElement('div');
    tempDiv.innerHTML = html;
    return tempDiv.textContent || tempDiv.innerText || '';
  };

const SearchDesign = ({item}) => {
    const sanitizedContent = stripHtmlTags(item.content);
  return (
    <div  className="container" >
      <div className="row">
        <div className="col">
          <div className="d-flex justify-content-center align-items-center" style={{ height: '200px' }}>
            <img src={item.imageUrl} alt="" className="img-fluid" style={{ height: '200px', width: '300px' }} />
          </div>
        </div>
        <div className="col-md-8">
          <h1 className="mb-3">{item.title}</h1>
          <div className="mb-3 d-flex justify-content-between align-items-center text-muted">
            <p>@{item.author}</p>
            <p>{new Date(item.date).toLocaleDateString()}</p>
          </div>
          <p className="mb-4">{sanitizedContent.slice(0, 200)}<Link to={`/view/${item.id}`}> ...Read more</Link></p>


          <div>
            <Link to={`/edit/${item.id}`}>
              <i className="fa-regular fa-pen-to-square"></i>
            </Link>
            
          </div>

        </div>
      </div>
    </div>
  )
}

export default SearchDesign