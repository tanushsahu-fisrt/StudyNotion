function Home() {
  return (
    <div className=" bg-#243b53">

      {/* Main content */}
      <div className="flex flex-col items-center justify-center text-white ">
        <div className="text-center p-6">
          <h1 className="text-5xl font-bold mb-4">Welcome to StudyNotion</h1>
          <p className="text-xl mb-6">
            Empowering you to learn new skills with the best courses available!
          </p>
          <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-6 rounded-full transition-all">
            Explore Courses
          </button>
        </div>

        {/* Course Categories */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-12 w-10/12 max-w-6xl">
          <div className="bg-blue-800 p-6 rounded-lg text-center">
            <h3 className="text-2xl font-semibold">Web Development</h3>
            <p className="mt-2">Learn the latest web technologies and frameworks.</p>
          </div>
          <div className="bg-green-800 p-6 rounded-lg text-center">
            <h3 className="text-2xl font-semibold">Data Science</h3>
            <p className="mt-2">Master data analysis and machine learning techniques.</p>
          </div>
          <div className="bg-yellow-800 p-6 rounded-lg text-center">
            <h3 className="text-2xl font-semibold">Design</h3>
            <p className="mt-2">Unlock your creativity with design principles and tools.</p>
          </div>
          <div className="bg-blue-800 p-6 rounded-lg text-center">
            <h3 className="text-2xl font-semibold">Mobile Development</h3>
            <p className="mt-2">Learn the latest web technologies and frameworks.</p>
          </div>
          <div className="bg-green-800 p-6 rounded-lg text-center">
            <h3 className="text-2xl font-semibold">Data Analytics</h3>
            <p className="mt-2">Master data analysis and machine learning techniques.</p>
          </div>
          <div className="bg-yellow-800 p-6 rounded-lg text-center">
            <h3 className="text-2xl font-semibold">Data structure</h3>
            <p className="mt-2">Unlock your creativity with design principles and tools.</p>
          </div>
          <div className="bg-#243b53 p-6 rounded-lg text-center"></div>
          <div className="bg-#243b53 p-6 rounded-lg text-center"></div>
          <div className="bg-#243b53 p-6 rounded-lg text-center"></div>
          <div className="bg-#243b53 p-6 rounded-lg text-center"></div>
        </div>
      </div>
    </div>
  );
}

export default Home;
