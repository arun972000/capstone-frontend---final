/* eslint-disable react/no-unescaped-entities */
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { Url } from '../../../../Url';
import { useEffect, useState } from 'react';
import SearchDesign from './SearchDesign';

const Searchblogs = () => {
    const [post, setPost] = useState([]); // Initialize post as an empty array
    let {name} = useParams();

    const searchvalue = async () => {
        try {
            const res = await axios.get(`${Url}api/blog/search/${name}`)
            
            setPost(res.data);
            
        } catch (err) {
            console.log(err);
        }
    }

    useEffect(() => {
        searchvalue();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [name]); 


    
    return (
        <div className="">
        {/* <div className="text-center mb-3">Result for "{name}"</div> */}
        {post && post.length > 0 ? (
          post.map((item) => (
            <SearchDesign key={item.id} item={item} />
          ))
        ) : (
          <p>No results found.</p>
        )}
      </div>
      
    );
};


export default Searchblogs;
