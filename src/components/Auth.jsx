// eslint-disable-next-line react/prop-types
const ProtectRoute = ({element}) => {

    if(localStorage.getItem("user")){
        return element
    }
    else{
        return (  
            <div className="text-white">please login to access</div>
          )
    }
 
}

export default ProtectRoute