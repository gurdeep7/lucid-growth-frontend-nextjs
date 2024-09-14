const SubmitButton = ({ onClick, children }) => (
    <button
      onClick={onClick}
      className="bg-blue-500 text-white px-4 py-2 rounded-lg shadow hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-150"
    >
      {children}
    </button>
  );
  
  export default SubmitButton;
  