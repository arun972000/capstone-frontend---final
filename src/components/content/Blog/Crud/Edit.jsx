import { useEffect, useState } from "react";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import axios from "axios";
import { Url } from "../../../../../Url";
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css'; 
import { useNavigate, useParams } from "react-router-dom";

const EditBlogForm = () => {
    const navigate = useNavigate();
    const { id } = useParams();

    // Set initial state for other fields
    const [formData, setFormData] = useState({
        title: "",
        imageUrl: "",
        author: "",
        tags: "",
    });

    // State for the content field managed by ReactQuill
    const [content, setContent] = useState("");

    const preFilledData = async () => {
        try {
            const res = await axios.get(`${Url}api/blog/${id}`);
            // Update other form data fields
            setFormData({
                ...formData,
                title: res.data.title,
                imageUrl: res.data.imageUrl,
                author: res.data.author,
                tags: res.data.tags,
            });
            // Update the content field managed by ReactQuill
            setContent(res.data.content);
        } catch (err) {
            console.log(err);
        }
    }

    const handleContentChange = (html) => {
        // Update the content field when the ReactQuill editor content changes
        setContent(html);
    };

    const EditBlog = async () => {
        try {
            // Combine other form data fields and content
            const updatedData = {
                ...formData,
                content: content,
            };
            await axios.put(`${Url}api/blog/edit/${id}`, updatedData);
            console.log(updatedData)
        } catch (err) {
            console.log(err);
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        EditBlog();
        console.log(formData,content)
        setFormData({
            title: "",
            imageUrl: "",
            author: "",
            tags: "",
        });
        setContent("");
        navigate("/blog");
    };

    useEffect(() => {
        preFilledData();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <div className="mb-5">
            <h2>Edit Blog Post</h2>
            <Form onSubmit={handleSubmit}>
                <Form.Group controlId="title">
                    <Form.Label>Title</Form.Label>
                    <Form.Control
                        type="text"
                        name="title"
                        value={formData.title}
                        onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                        required
                    />
                </Form.Group>
                <Form.Group controlId="content">
                    <Form.Label>Content</Form.Label>
                    <ReactQuill
                        value={content}
                        onChange={handleContentChange}
                    />
                </Form.Group>
                <Form.Group controlId="imageUrl">
                    <Form.Label>Image URL</Form.Label>
                    <Form.Control
                        type="text"
                        name="imageUrl"
                        value={formData.imageUrl}
                        onChange={(e) => setFormData({ ...formData, imageUrl: e.target.value })}
                        required
                    />
                </Form.Group>
                <Form.Group controlId="author">
                    <Form.Label>Author</Form.Label>
                    <Form.Control
                        type="text"
                        name="author"
                        value={formData.author}
                        onChange={(e) => setFormData({ ...formData, author: e.target.value })}
                        required
                    />
                </Form.Group>
                <Form.Group controlId="tags">
                    <Form.Label>Tags (comma-separated)</Form.Label>
                    <Form.Control
                        type="text"
                        name="tags"
                        value={formData.tags}
                        onChange={(e) => setFormData({ ...formData, tags: e.target.value })}
                        required
                    />
                </Form.Group>
                <Button variant="primary" type="submit">
                    save
                </Button>
            </Form>
        </div>
    );
};

export default EditBlogForm;
