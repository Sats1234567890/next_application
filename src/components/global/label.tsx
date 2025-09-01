export const FormLabel=({ children, required })=> {
  return (
    <label className="block mb-1 font-medium text-gray-700">
      {children}
      {required && <span className="text-red-500 ml-1">*</span>}
    </label>
  );
}