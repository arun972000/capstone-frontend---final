
import './App.css'
import NavbarMain from './components/Header/Navbar'
import AllBlogs from './components/content/Blog/AllBlogs'
import EditBlogForm from './components/content/Blog/Crud/Edit'
import CreateBlogForm from './components/content/Blog/createBlog'
import Searchblogs from './components/content/Blog/searchresult'
import SingleBlog from './components/content/Blog/singleBlog'
import Dashboard from './components/content/Dashboard'
import {Route,Routes} from "react-router-dom"
import Profile from './components/content/Profile'
import RegistrationForm from './components/Register/Register'
import HomePage from './components/content/Home'
import Footer from './components/footer/Footer'
import ProtectRoute from './components/Auth'
import LoginRoute from './components/loginAuth'


function App() {
 

  return (
    <>
     <NavbarMain/>
     <div className="container main">
      <Routes>
        <Route path="/" element={ <HomePage/>}/>
        <Route path="/Dashboard" element={<ProtectRoute element={<Dashboard/>}/>}/>
        <Route path="/blog" element ={<ProtectRoute element={<AllBlogs/>}/>}/>
        <Route path="/blog/create" element={<CreateBlogForm/>}/>
        <Route path="/view/:id" element={<SingleBlog/>}/>
        <Route path="/Edit/:id" element={<EditBlogForm/>}/>
        <Route path="/search/:name" element={<Searchblogs/>}/>
        <Route path="/profile" element={<ProtectRoute element={<Profile/>}/>}/>
        <Route path="/login"  element={<LoginRoute element={<HomePage/>}/>}/>
        <Route path="/register"  element={<RegistrationForm/>}/>
        
      </Routes>
     </div>
     <Footer classNmae="footer"/>
    </>
  )
}

export default App
