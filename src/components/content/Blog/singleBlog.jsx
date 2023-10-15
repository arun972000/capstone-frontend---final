import  { useEffect, useState } from "react";
import { useParams } from "react-router-dom"; 
import axios from "axios";
import { Url } from "../../../../Url";

const SingleBlog = () => {
  const { id } = useParams(); 
  const [blogData, setBlogData] = useState(null);

  useEffect(() => {
    
    const fetchBlogPost = async () => {
      try {
        const response = await axios.get(`${Url}api/blog/${id}`);
        setBlogData(response.data);
      } catch (error) {
        console.error("Error fetching blog post:", error);
      }
    };

    fetchBlogPost();
  }, [id]);

  return (
    <div className="container" >
      {blogData ? (
        <div>
          <h1 className="mb-3">{blogData.title}</h1>
          <p className="text-muted">
            Author: {blogData.author} | Date: {new Date(blogData.date).toLocaleDateString()}
          </p>
          <img src={blogData.imageUrl} alt={blogData.title} className="img-fluid mb-4" />
          <div dangerouslySetInnerHTML={{ __html: blogData.content }} />
          <div className="mt-4">
            Tags: {blogData.tags.join(", ")}
          </div>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default SingleBlog;
