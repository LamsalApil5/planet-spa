const NotFound = () => {
    return (
      <div className="text-center mt-20">
        <h1 className="text-4xl font-bold text-red-600">404 - Page Not Found</h1>
        <p className="text-gray-600 mt-4">Oops! The page you are looking for does not exist.</p>
        <a href="/" className="text-blue-500 hover:underline mt-4 inline-block">
          Go Back Home
        </a>
      </div>
    );
  };
  
  export default NotFound;
  