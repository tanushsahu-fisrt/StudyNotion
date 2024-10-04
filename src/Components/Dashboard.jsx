function Dashboard() {
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      {/* Welcome Section */}
      <div className="py-12 text-center">
        <h1 className="text-4xl font-bold mb-2">Welcome Back</h1>
        <p className="text-lg">Let's continue your learning journey.</p>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Enrolled Courses */}
          <div className="bg-gray-800 p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-bold mb-4">Your Courses</h2>
            <ul className="space-y-4">
              <li className="bg-gray-700 p-4 rounded-md">
                <h3 className="font-semibold">Web Development</h3>
                <p className="text-sm">Progress: 70%</p>
                <button className="bg-blue-600 hover:bg-blue-700 text-white py-1 px-4 mt-2 rounded">
                  Continue Learning
                </button>
              </li>
              <li className="bg-gray-700 p-4 rounded-md">
                <h3 className="font-semibold">Data Science</h3>
                <p className="text-sm">Progress: 50%</p>
                <button className="bg-blue-600 hover:bg-blue-700 text-white py-1 px-4 mt-2 rounded">
                  Continue Learning
                </button>
              </li>
            </ul>
          </div>

          {/* Notifications */}
          <div className="bg-gray-800 p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-bold mb-4">Notifications</h2>
            <ul className="space-y-4">
              <li className="bg-gray-700 p-4 rounded-md">
                <p className="font-semibold">New course: Advanced React has been added!</p>
              </li>
              <li className="bg-gray-700 p-4 rounded-md">
                <p className="font-semibold">You completed 70% of Web Development course.</p>
              </li>
            </ul>
          </div>

          {/* Quick Actions */}
          <div className="bg-gray-800 p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-bold mb-4">Quick Actions</h2>
            <button className="bg-green-600 hover:bg-green-700 text-white py-2 px-4 w-full rounded-md mb-4">
              Browse New Courses
            </button>
            <button className="bg-yellow-600 hover:bg-yellow-700 text-white py-2 px-4 w-full rounded-md">
              View Certificate
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
