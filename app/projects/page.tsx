export default function Resource() {
    return (
        <main className="min-h-screen bg-black text-white">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <h1 className="text-4xl md:text-6xl font-bold mb-8 bg-clip-text text-transparent bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-center">
                Projects
            </h1>
            <div className="max-w-4xl mx-auto">
                <section className="bg-gray-900 rounded-lg shadow-lg p-8 border border-gray-800">
                    <div className="space-y-8">
                        
                        <div className="space-y-4">
                            <h2 className="text-2xl font-semibold text-purple-400">Coming Soon.., Find Projects Categorized by Orgs, Technologies, and Frameworks</h2>
                            <p className="text-gray-300 leading-relaxed">
                                Soon, you will be able to browse GSoC projects by programming language, technology, and framework, making it easier to find the perfect project for your skills!
                            </p>
                        </div>

                        <div className="mt-8 text-center">
                            <p className="text-indigo-400 font-medium text-lg">
                                📢 Join our waitlist to be notified when we launch this feature!
                            </p>
                        </div>
                    </div>
                </section>
            </div>
            </div>
        </main>
    );
  }