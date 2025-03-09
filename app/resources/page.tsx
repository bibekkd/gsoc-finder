export default function Resource() {
    return (
      <main className="min-h-screen bg-black text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <h1 className="text-4xl md:text-6xl font-bold mb-8 bg-clip-text text-transparent bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-center">
            Resources
          </h1>
          <div className="max-w-4xl mx-auto">
            <section className="bg-gray-900 rounded-lg shadow-lg p-8 border border-gray-800">
              <p className="text-gray-300 text-lg text-center">
                Coming soon - Helpful resources and guides for GSoC applicants
              </p>
            </section>
          </div>
        </div>
      </main>
    );
  }