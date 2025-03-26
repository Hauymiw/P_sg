// components/Loading.jsx
const loading = () => {
  return (
    <div className="flex justify-center items-center h-screen bg-[#666666]">
      <div className="flex space-x-3">
        <div className="w-4 h-4 bg-black rounded-full animate-bounce delay-200"></div>
        <div className="w-4 h-4 bg-white rounded-full animate-bounce delay-400"></div>
        <div className="w-4 h-4 bg-yellow-500 rounded-full animate-bounce delay-600"></div>
        <div className="w-4 h-4 bg-green-500 rounded-full animate-bounce delay-800"></div>
      </div>
    </div>
  );
};

export default loading;
