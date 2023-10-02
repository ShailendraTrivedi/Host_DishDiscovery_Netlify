const Loading = () => {
  return (
    <>
      <div className="relative z-50">
        <div className="fixed flex justify-center items-center text-[10rem] font-bold text-white inset-0 bg-gray-500 bg-opacity-80 transition-opacity">
          Loading <span className="animate-pulse">.....</span>
        </div>
      </div>
    </>
  );
};

export default Loading;
