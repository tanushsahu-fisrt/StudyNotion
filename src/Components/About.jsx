function About() {
    return (
      <div className="min-h-screen bg-#243b53 text-white">

        <div className="max-w-6xl mx-auto py-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-4">
          <div className="bg-blue-700 p-6 rounded-lg text-center">
            <h3 className="text-2xl font-bold">Expert Instructors</h3>
            <p className="mt-4">
              Learn from top professionals with real-world experience in their fields.
            </p>
          </div>
          <div className="bg-green-700 p-6 rounded-lg text-center">
            <h3 className="text-2xl font-bold">Flexible Learning</h3>
            <p className="mt-4">
              Study at your own pace with lifetime access to all courses.
            </p>
          </div>
          <div className="bg-yellow-700 p-6 rounded-lg text-center">
            <h3 className="text-2xl font-bold">Diverse Topics</h3>
            <p className="mt-4">
              Explore courses across web development, data science, design, and more.
            </p>
          </div>
        </div>

        <div className="flex flex-col items-center justify-center py-12">
          <h1 className="text-5xl font-bold mb-4">About StudyNotion</h1>
          <p className="text-xl max-w-2xl text-center mb-6">
            StudyNotion is an innovative e-learning platform that aims to empower individuals by providing access to top-notch courses, helping them acquire new skills and reach their full potential.
          </p>
        </div>
  
        {/* Mission Section */}
        <div className="bg-gray-800 py-12">
          <div className="max-w-6xl mx-auto px-4 text-center">
            <h2 className="text-4xl font-semibold mb-6">Our Mission</h2>
            <p className="text-lg leading-relaxed">
              Our mission is to democratize education by offering high-quality, affordable learning opportunities. Whether you want to learn a new skill, advance your career, or explore new fields, StudyNotion is your go-to platform.
            </p>
          </div>
        </div>
  
        {/* Features Section */}
        
  
        
      </div>
    );
  }
  
  export default About;
  