export default function About() {
    return (
        <div className="min-h-screen text-white">
                        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <h1 className="text-4xl md:text-6xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-center">
                    About GSoC Finder
                </h1>
                <div className="max-w-4xl mx-auto space-y-8 text-gray-300">
                    <section>
                        <p className="leading-relaxed">
                            GSoC Finder is a dedicated platform designed to help students and open-source enthusiasts discover the best Google Summer of Code (GSoC) organizations and project ideas with ease. Our goal is to simplify the process of finding relevant projects by categorizing them based on programming languages, technologies, and difficulty levels, ensuring that users can quickly identify opportunities that align with their skills and interests.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl md:text-3xl font-semibold mb-4 text-white">Our Mission</h2>
                        <p className="leading-relaxed">
                            At GSoC Finder, we believe that contributing to open source should be an accessible and streamlined experience for everyone, whether you are a student aspiring to participate in GSoC or a professional looking to contribute to impactful projects. Our platform provides curated resources, expert guidance, and a GSoC-ready toolkit to help users navigate the open-source ecosystem confidently.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl md:text-3xl font-semibold mb-4 text-white">What We Offer</h2>
                        <ul className="space-y-4 list-disc list-inside">
                            <li><span className="font-medium text-white">Curated GSoC Projects:</span> Explore a well-organized collection of GSoC organizations and project ideas, sorted by programming languages, tech stacks, and domains.</li>
                            <li><span className="font-medium text-white">Skill-Based Recommendations:</span> Find the best projects based on your expertise and interests.</li>
                            <li><span className="font-medium text-white">Comprehensive Resources:</span> Access guides on open-source contribution, GSoC preparation, and proposal drafting.</li>
                            <li><span className="font-medium text-white">GSoC-Ready Toolkit:</span> Get essential tools and tips to enhance your chances of selection in GSoC.</li>
                            <li><span className="font-medium text-white">Community & Support:</span> Connect with like-minded contributors, mentors, and open-source professionals.</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-2xl md:text-3xl font-semibold mb-4 text-white">Why Choose Us?</h2>
                        <p className="leading-relaxed">
                            Navigating the GSoC ecosystem can be overwhelming, especially for newcomers. GSoC Finder simplifies the journey by providing structured insights, making it easier to identify the right projects, learn best practices, and maximize your chances of success. With our expertise and deep understanding of the open-source community, we bridge the gap between aspiring contributors and GSoC organizations.
                        </p>
                        <p className="mt-4 font-medium text-white">
                            Join us on this journey and take the first step toward making meaningful open-source contributions!
                        </p>
                    </section>
                </div>
            </div>
        </div>
    )
}