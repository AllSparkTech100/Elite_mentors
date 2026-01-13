function CTA() {
    return (
        <section className="py-24">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="relative bg-blue-600 rounded-[2.5rem] p-12 lg:p-20 text-center overflow-hidden">
                    <div className="absolute -top-24 -left-24 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply opacity-50 blur-3xl"></div>
                    <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-blue-400 rounded-full mix-blend-multiply opacity-50 blur-3xl"></div>

                    <div className="relative z-10">
                        <h2 className="text-3xl sm:text-5xl font-bold text-white mb-6">
                            Ready to redefine your career?
                        </h2>
                        <p className="text-blue-100 text-lg max-w-2xl mx-auto mb-12">
                            Join a community of high-achievers and start your mentorship journey today. Limited spots available for the Q3 cohort.
                        </p>
                        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                            <button className="px-10 py-4 bg-white text-blue-600 font-bold rounded-xl hover:bg-blue-50 transition-colors shadow-lg shadow-black/10">
                                Apply for Mentorship
                            </button>
                            <button className="px-10 py-4 bg-transparent text-white font-bold border border-white/30 rounded-xl hover:bg-white/10 transition-colors">
                                Talk to an Advisor
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default CTA