import { Link, useNavigate } from "react-router-dom";
import logo from "../../assets/logo.png";
import { FcGoogle } from "react-icons/fc";
import { useContext } from "react";
import { AuthContext } from "../../provider/AuthProvider";
import toast from "react-hot-toast";

const Login = () => {
  const { loginUser } = useContext(AuthContext);
  const navigate = useNavigate();
//   console.log(loginUser);
  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;

    console.log(email, password);
    loginUser(email, password)
      .then((res) => {
        toast.success("Welcome Back!");
        navigate("/");
      })
      .catch((err) => {
        toast.error("Something Wrong!!!");
        console.log(err)
      });
  };

  return (
    <div>
      <div className="flex items-center justify-center min-h-[calc(100vh-288px)]">
        <div className="w-full max-w-md m-auto bg-gary-500 rounded p-5 bg-amber-50 my-4 shadow-md">
          <header>
            <img className="w-20 mx-auto mb-5" src={logo} />

            <h1 className="text-center text-2xl font-semibold">
              Login Your Account
            </h1>
          </header>
          <form onSubmit={handleSubmit}>
            <div>
              <label className="block mb-2 ">Eamil</label>
              <input
                className="w-full p-2 mb-6 border-b-2 border-amber-500 outline-none focus:bg-amber-100"
                type="email"
                name="email"
                placeholder="email"
                required
              />
            </div>
            <div>
              <label className="block mb-2 ">Password</label>
              <input
                className="w-full p-2 mb-6  border-b-2 border-amber-500 outline-none focus:bg-amber-100"
                type="password"
                name="password"
                placeholder="password"
                required
              />
            </div>
            <div>
              <input
                className="w-full bg-amber-400   font-bold py-2 px-4 mb-4 rounded btn"
                type="submit"
              />
            </div>
          </form>
          <div className="mb-4 text-center">
            <button className="flex items-center justify-center w-full px-4 py-2 text-sm font-medium text-gray-700 bg-white border rounded-lg shadow-md hover:bg-gray-100">
              <FcGoogle className="mr-2 text-lg" />
              Continue with Google
            </button>
          </div>
          <footer>
            <Link
              className="text-amber-800 hover:text-pink-700 text-sm float-left"
              to="/login"
            >
              Forgot Password?
            </Link>
            <Link
              className="text-amber-800 hover:text-pink-700 text-sm float-right"
              to="/register"
            >
              Create Account
            </Link>
          </footer>
        </div>
      </div>
    </div>
  );
};

export default Login;
