export default function Landing() {
  return (
    <div className="min-h-screen w-full flex flex-col items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100 px-6">
      <main className="text-center max-w-4xl">
        <h1 className="text-6xl md:text-8xl font-bold mb-6 bg-gradient-to-r from-black to-white bg-clip-text text-transparent">
          Hello, World!
        </h1>
        
        <p className="text-xl md:text-2xl mb-12 bg-gradient-to-r from-black to-white bg-clip-text text-transparent">
          Welcome to your new landing page. Start building something amazing.
        </p>
        
        <button className="bg-indigo-600 hover:bg-indigo-700 text-white font-semibold px-8 py-4 rounded-lg text-lg transition-colors duration-200 shadow-lg hover:shadow-xl">
          Get Started
        </button>
      </main>
    </div>
  );
}


