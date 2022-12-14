import React from "react";
import { useNavigate } from "react-router-dom";


function Header() {
  const history = useNavigate();
  const [logout, setLogout] = React.useState(false);

  React.useEffect(() => {
    if (!localStorage.getItem("auth")) history("/login");
  }, [logout]);

  const logoutHandler = (e) => {
    e.preventDefault();
    localStorage.removeItem("auth");
    setLogout(true);
  };
  return (
    <div className='w-full p-4 bg-gradient-to-br from-cyan-700 to-blue-700 h-fit '>
        <p className='text-left text-5xl tracking-normal'>
            My Contacts
        </p>
        <button 
        className="sm-12 md:w-30 lg:w-48 absolute  top-4 right-10 w-15  py-2 px-7 mx-4 rounded-full cursor-pointer text-xl bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500" 
        type='submit' onClick={logoutHandler}> LogOut </button>
    </div> 
  )
}

export default Header