// import { useState } from "react";
import { Link } from "react-router-dom";
import Button from "../../helpers/Button";
import LOGO from "../../assets/Logo_Img/Dish Discovery-logos_transparent.png";

const NavBar = ({ isAuthenticated }) => {
  // const isAuthenticated = prop.isAuthenticated;
  // const [isDropdownOpen, setDropdownOpen] = useState(false);

  const handleLogout = () => {
    sessionStorage.clear();
    window.location.reload();
  };
  return (
    <div className="w-full h-[4rem]">
      <div className="fixed top-0 w-full h-[4rem] p-2 px-10 flex justify-between items-center bg-white border-b-2 z-10">
        <img
          src={LOGO}
          alt="Logo"
          className=" h-[12rem]"
        />
        <div className="relative flex gap-5 items-center">
          <Link to="/">
            <span className="">Home</span>
          </Link>
          <Link to="/discoveryRecipe">Discover</Link>
          {isAuthenticated ? (
            <>
              <Link to="/myCookbook">My Cookbook</Link>
              <Link to="/createRecipe">Create Recipe</Link>
              <div className="cursor-pointer" onClick={handleLogout}>
                Logout
              </div>
            </>
          ) : (
            <>
              <Link to="/signin">
                <Button
                  className="border-2 border-orange-500"
                  buttonName="Login"
                />
              </Link>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default NavBar;
