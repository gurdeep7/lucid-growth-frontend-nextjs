const InputField = ({ value, onChange, placeholder }) => (
    <input
      type="text"
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      className="border border-gray-300 rounded-lg p-3 w-full mb-4 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-150"
    />
  );
  
  export default InputField;
  