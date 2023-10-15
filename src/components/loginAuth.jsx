import LoginForm from "./Login/Login"
// eslint-disable-next-line react/prop-types
const LoginRoute = ({element}) => {

    if(localStorage.getItem("user")){
        return element
    }
    else{
        return (  
            <LoginForm/>
          )
    }
 
}

export default LoginRoute