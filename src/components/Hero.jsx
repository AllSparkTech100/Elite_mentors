

function Hero() {
    return (
        <section className="relative pt-12 pb-20 lg:pt-24 lg:pb-32 overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
                    <div className="flex-1 text-center lg:text-left z-10">
                        <span className="inline-block px-4 py-1.5 rounded-full bg-orange-50 text-orange-600 text-[10px] sm:text-xs font-bold tracking-widest uppercase mb-6">
                            Elite Professional Network
                        </span>
                        <h1 className="text-3xl sm:text-5xl lg:text-7xl font-bold text-slate-900 leading-[1.1] mb-8 tracking-tight">
                            Unlock Your Potential Through <span className="italic text-orange-500">Expert</span> Guidance
                        </h1>
                        <p className="text-base sm:text-lg text-slate-500 max-w-xl mx-auto lg:mx-0 mb-10 leading-relaxed">
                            Connect with world-class mentors from top-tier industries to accelerate your career growth. Experience personalized growth with a premium, one-on-one approach designed for the ambitious.
                        </p>
                        <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
                            <button className="w-full sm:w-auto px-8 py-4 bg-blue-600 text-white rounded-xl font-bold hover:bg-blue-700 transition-all shadow-xl shadow-blue-200 active:scale-95">
                                <a href="">  Get Started</a>
                            </button>
                            <button className="w-full sm:w-auto px-8 py-4 bg-white text-slate-800 border border-slate-200 rounded-xl font-bold hover:bg-slate-50 transition-all active:scale-95">
                                <a href="/programs">Explore Programs</a>
                            </button>
                        </div>
                    </div>

                    <div className="flex-1 relative w-full mt-12 lg:mt-0">
                        <div className="relative z-10 rounded-3xl overflow-hidden shadow-2xl max-w-lg mx-auto lg:max-w-none">
                            <img
                                src="https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=800&auto=format&fit=crop"
                                alt="Mentorship Session"
                                className="w-full h-auto object-cover aspect-[4/5] lg:aspect-auto"
                            />
                        </div>
                        {/* Background Blobs - Responsive hidden on very small to avoid issues */}
                        <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-orange-200/50 blur-3xl -z-10 rounded-full hidden sm:block"></div>
                        <div className="absolute -top-10 -right-10 w-64 h-64 bg-blue-100/50 blur-3xl -z-10 rounded-full hidden sm:block"></div>
                        <div className="absolute top-1/2 -right-4 w-16 h-16 sm:w-24 sm:h-24 bg-white/20 backdrop-blur-xl border border-white/30 shadow-2xl rounded-xl z-20"></div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Hero