import { useContext, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import logo from "../../assets/logo.png";
import { AuthContext } from "../../provider/AuthProvider";
import toast from "react-hot-toast";
const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);

  // console.log(user);
  const navLinks = (
    <>
      <NavLink
        className={({ isActive }) =>
          isActive ? "font-bold  bg-amber-300  rounded-sm p-2" : "p-2"
        }
        to="/"
      >
        Home
      </NavLink>
      <NavLink
        className={({ isActive }) =>
          isActive ? "font-bold  bg-amber-300  rounded-sm p-2" : "p-2"
        }
        to="/all-artifacts"
      >
        All Artifacts
      </NavLink>
      <NavLink
        className={({ isActive }) =>
          isActive ? "font-bold  bg-amber-300  rounded-sm p-2" : "p-2"
        }
        to="/add-artifacts"
      >
        Add Artifacts
      </NavLink>
    </>
  );

  // mouse hover or not
  const [isHover, setIsHover] = useState(false);
  //handle logout
  const handleLogout = () => {
    logOut()
      .then((res) => {
        toast.success("Logout Successfull!");
      })
      .catch((err) => {
        toast.error("Logout Failed!");
      });
  };

  return (
    <div className="navbar bg-base-200">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[5] mt-3 w-32 p-2 shadow"
          >
            {navLinks}
          </ul>
        </div>
        <Link
          to="/"
          className=" text-ambe r-500 flex items-center justify-center gap-2"
        >
          <img className="w-10 h-10" src={logo} alt="site-logo" />
          <p className="p-1 md:text-xl font-bold rounded  ">
            Artifact <span className="text-amber-600 ">Atlas</span>
          </p>
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 gap-4 font-medium">
          {navLinks}
        </ul>
      </div>

      {/* nav end */}
      <div className="navbar-end">
        {user ? (
          <div className="flex gap-2 md:gap-4">
            {/* for profile */}
            <div className="dropdown dropdown-end flex items-center justify-center">
              <div className="dropdown">
                <div tabIndex={0} role="button" className="">
                  <button className="btn btn-sm bg-amber-300">
                    My Profile
                  </button>
                </div>
                <ul
                  tabIndex={0}
                  className="dropdown-content menu bg-base-100 rounded-box z-[5] w-40 p-2 shadow font-medium"
                >
                  <li>
                    <Link to="my-artifacts">My Artifacts</Link>
                  </li>
                  <li>
                    <Link to="liked-artifacts">Liked Artifacts</Link>
                  </li>
                </ul>
              </div>
            </div>
            {/* user pic & Logout */}
            <div
              className="relative rounded-full"
              onMouseEnter={() => setIsHover(true)}
              onMouseLeave={() => setIsHover(false)}
            >
              <div className="btn btn-ghost btn-circle avatar">
                <div className="w-10 rounded-full">
                  <img
                    alt="Tailwind CSS Navbar component"
                    src={user?.photoURL}
                  />
                </div>
              </div>

              {/* show username and logout button on hover */}
              <div
                className={` absolute top-11 -left-12 w-24 md:w-28   md:-left-16 rounded-md mr-10 bg-amber-50 p-2 z-10 ${
                  isHover ? "block" : "hidden"
                }`}
              >
                <ul className="flex flex-col items-center gap-0.5">
                  <li>
                    <a className="text-xs md:textlg">{user?.displayName}</a>
                  </li>
                  <li>
                    <button
                      onClick={handleLogout}
                      className="btn btn-xs md:btn-sm bg-amber-300"
                    >
                      Logout
                    </button>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        ) : (
          <div className="space-x-2.5">
            <Link to="/login">
              <button className="btn  bg-amber-300">Login</button>
            </Link>

            <Link to="/register">
              <button className="btn  bg-amber-50">Register</button>
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
