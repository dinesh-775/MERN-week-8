function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-950 via-gray-900 to-black text-white px-6 py-14">

      {/* Hero Section */}
      <div className="max-w-5xl mx-auto text-center">
        <h1 className="text-5xl font-bold mb-4">
          User Management System
        </h1>

        <p className="text-gray-400 text-lg leading-relaxed">
          A modern, fast, and secure platform to manage all your users in one place.
          Add new users, update details, track records, and maintain structured data
          with ease and efficiency.
        </p>

        <div className="mt-6 text-sm text-gray-500">
          Built for simplicity • Designed for productivity • Optimized for performance
        </div>
      </div>

      {/* Feature Section */}
      <div className="max-w-6xl mx-auto mt-14 grid md:grid-cols-3 gap-6">

        <div className="bg-gray-900 border border-gray-800 rounded-xl p-6 hover:bg-gray-800 transition">
          <h2 className="text-xl font-semibold mb-2">👤 User Registration</h2>
          <p className="text-gray-400 text-sm">
            Quickly add new users with name, email, and role information in seconds.
          </p>
        </div>

        <div className="bg-gray-900 border border-gray-800 rounded-xl p-6 hover:bg-gray-800 transition">
          <h2 className="text-xl font-semibold mb-2">📋 User Management</h2>
          <p className="text-gray-400 text-sm">
            View, edit, and delete users with a clean and structured interface.
          </p>
        </div>

        <div className="bg-gray-900 border border-gray-800 rounded-xl p-6 hover:bg-gray-800 transition">
          <h2 className="text-xl font-semibold mb-2">⚡ Fast Performance</h2>
          <p className="text-gray-400 text-sm">
            Lightweight system optimized for speed and smooth user experience.
          </p>
        </div>

        <div className="bg-gray-900 border border-gray-800 rounded-xl p-6 hover:bg-gray-800 transition">
          <h2 className="text-xl font-semibold mb-2">🔐 Secure Data</h2>
          <p className="text-gray-400 text-sm">
            Ensures safe handling of user data with structured storage.
          </p>
        </div>

        <div className="bg-gray-900 border border-gray-800 rounded-xl p-6 hover:bg-gray-800 transition">
          <h2 className="text-xl font-semibold mb-2">📊 Organized System</h2>
          <p className="text-gray-400 text-sm">
            Keeps all users well-organized for easy tracking and management.
          </p>
        </div>

        <div className="bg-gray-900 border border-gray-800 rounded-xl p-6 hover:bg-gray-800 transition">
          <h2 className="text-xl font-semibold mb-2">🚀 Easy to Use</h2>
          <p className="text-gray-400 text-sm">
            Simple UI designed for beginners and professionals alike.
          </p>
        </div>

      </div>

      {/* Bottom Section */}
      <div className="max-w-4xl mx-auto text-center mt-16 text-gray-500 text-sm">
        Manage your users smarter, faster, and better — all from one dashboard.
      </div>

    </div>
  );
}

export default Home;