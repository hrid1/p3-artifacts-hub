import { Helmet } from "react-helmet-async";

const ErrorPage = () => {
  return (
    <div>
      <Helmet>
        <title>Error | Artifact Atlas</title>
      </Helmet>
      <div className="bg-gradient-to-r from-slate-200 to-gray-200 ">
        <div className="flex items-center justify-center min-h-screen px-2">
          <div className="text-center">
            <h1 className="text-9xl font-bold">404</h1>
            <p className="text-2xl font-medium mt-4">Oops! Page not found</p>
            <p className="mt-4 mb-8">
              The page youre looking for doesnot exist or has been moved.
            </p>
            <a
              href="/"
              className="px-6 py-3 bg-white font-bold  rounded-full hover:bg-purple-100 transition duration-300 ease-in-out dark:bg-amber-400 dark:hover:bg-gray-600 dark:text-black"
            >
              Go Back Home
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ErrorPage;
