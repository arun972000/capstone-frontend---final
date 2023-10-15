import axios from "axios"
import { Url } from "../../../../Url"
import { useEffect, useState } from "react"
import Button from 'react-bootstrap/Button';

import { Link } from "react-router-dom";
import HomePosts from "./BlogDesign";


const AllBlogs = () => {
    const [searchData,setSearchData] =useState("")
    const [data, setData] = useState([])
    const blogs = async () => {
        try {
            const res = await axios.get(`${Url}api/blog`)
            setData(res.data)
        } catch (err) {
            console.log(err)
        }
    }

    
    const deleteBlog = async (id) => {
        try {
            await axios.delete(`${Url}api/blog/delete/${id}`)
            blogs()
        } catch (err) {
            console.log(err)
        }

    }
    useEffect(() => {
        blogs()
    }, [])

    return (
        <div className=" mb-5">
            <Link to="/blog/create"><Button variant="info" className="mb-4">Write</Button></Link>
            <div className="col-md-6 offset-md-3">
                <form>
                    <div className="input-group mb-3">
                        <input
                            type="text"
                            className="form-control"
                            placeholder="Search..."
                            aria-label="Search"
                            aria-describedby="search-button"
                            value={searchData}
                            onChange={(e)=>setSearchData(e.target.value)}
                        />
                        <Link to={`/search/${searchData}`}><button className="btn btn-primary" type="button" id="search-button">
                            Search
                        </button></Link>
                    </div>
                </form>
            </div>
            <div className="row">

                {data.map((post) => (
                    // eslint-disable-next-line no-undef
                    <HomePosts key={post.id} post={post} onDelete={() => deleteBlog(post.id)} />
                ))}
            </div>
        </div>

    )
}

export default AllBlogs