import { useState } from "react";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import axios from "axios";
import { Url } from "../../../../Url";
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css'; // Import Quill styles
import { useNavigate } from "react-router-dom";

const CreateBlogForm = () => {
    const navigate=useNavigate()
    const [formData, setFormData] = useState({
        title: "",
        content: "",
        imageUrl: "",
        author: "",
        tags: [],
    });

    const handleChange = (e) => {
        if (e.target) {
            // Handle regular form control inputs
            const { name, value } = e.target;
            setFormData({ ...formData, [name]: value });
        } else {
            // Handle the ReactQuill editor content
            setFormData({ ...formData, content: e });
        }
    };
    
    

    const createBlog = async () => {
        try {
            await axios.post(`${Url}api/blog/create`, formData);
        } catch (err) {
            console.log(err);
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        createBlog();
        navigate("/blog")
        setFormData({
            title: "",
            content: "",
            imageUrl: "",
            author: "",
            tags: "",
        });
    };

    return (
        <div className="mb-5">
            <h2>Create a Blog Post</h2>
            <Form onSubmit={handleSubmit}>
                <Form.Group controlId="title">
                    <Form.Label>Title</Form.Label>
                    <Form.Control
                        type="text"
                        name="title"
                        value={formData.title}
                        onChange={handleChange}
                        required
                    />
                </Form.Group>
                <Form.Group controlId="content">
                    <Form.Label>Content</Form.Label>
                    <ReactQuill
      value={formData.content}
      onChange={handleChange}
    />
                </Form.Group>
                <Form.Group controlId="imageUrl">
                    <Form.Label>Image URL</Form.Label>
                    <Form.Control
                        type="text"
                        name="imageUrl"
                        value={formData.imageUrl}
                        onChange={handleChange}
                        required
                    />
                </Form.Group>
                <Form.Group controlId="author">
                    <Form.Label>Author</Form.Label>
                    <Form.Control
                        type="text"
                        name="author"
                        value={formData.author}
                        onChange={handleChange}
                        required
                    />
                </Form.Group>
                <Form.Group controlId="tags">
                    <Form.Label>Tags (comma-separated)</Form.Label>
                    <Form.Control
                        type="text"
                        name="tags"
                        value={formData.tags}
                        onChange={handleChange}
                        required
                    />
                </Form.Group>
                <Button variant="primary" type="submit">
                    Create Blog
                </Button>
            </Form>
        </div>
    );
};

export default CreateBlogForm;
