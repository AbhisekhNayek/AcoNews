const Button = ({ children, type = "button", className, ...props }) => {
    return (
      <button
        type={type}
        className={`px-5 py-2 bg-blue-500 text-white rounded-md shadow-md hover:bg-blue-600 transition duration-200 ${className}`}
        {...props}
      >
        {children}
      </button>
    );
  };
  
  export default Button;
  