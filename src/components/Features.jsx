function Features() {
    const features = [
        {
            icon: <Target className="text-blue-600" size={24} />,
            title: "Tailored Learning Paths",
            desc: "Your journey is unique. Our mentors build custom roadmaps based on your specific career goals and skill gaps.",
        },
        {
            icon: <Network className="text-blue-600" size={24} />,
            title: "Direct Network Access",
            desc: "Gain introductions to decision-makers and influencers within your target industry through our elite network.",
        },
        {
            icon: <ShieldCheck className="text-blue-600" size={24} />,
            title: "Industry-Leading Expertise",
            desc: "Learn from the best. Our mentors are verified leaders from Fortune 500 companies and global startups.",
        }
    ];
    return (
        <section className="py-24 bg-slate-50/50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">Why Our Mentorship?</h2>
                    <p className="text-slate-500 max-w-2xl mx-auto leading-relaxed">
                        We don't just provide advice; we provide a curated path to excellence through personalized strategies and exclusive networking.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {features.map((f, i) => (
                        <div key={i} className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all group">
                            <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center mb-6">
                                {f.icon}
                            </div>
                            <h3 className="text-xl font-bold text-slate-800 mb-4">{f.title}</h3>
                            <p className="text-slate-500 mb-8 leading-relaxed text-sm">
                                {f.desc}
                            </p>
                            <button className="flex items-center text-blue-600 font-semibold text-sm group-hover:gap-2 transition-all">
                                Learn More <ArrowRight size={16} className="ml-1" />
                            </button>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Features