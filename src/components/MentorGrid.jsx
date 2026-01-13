function MentorGrid() {
    const mentors = [
        {
            name: "Dr. Aris Thorne",
            role: "AI Research Lead at TechGen",
            bio: "Pioneer in neural networks with over 15 years experience leading global innovation teams.",
            img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=400&h=500&auto=format&fit=crop"
        },
        {
            name: "Sarah Jenkins, MBA",
            role: "Strategy Consultant",
            bio: "Ex-McKinsey consultant specializing in market entry and sustainable growth for startups.",
            img: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=400&h=500&auto=format&fit=crop"
        },
        {
            name: "Julian Vance",
            role: "VP of Product at CloudScale",
            bio: "Building scalable infrastructure and mentoring the next generation of SaaS product leaders.",
            img: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=400&h=500&auto=format&fit=crop"
        },
        {
            name: "Maya Rodriguez",
            role: "Venture Capitalist",
            bio: "Focusing on early-stage fintech investments and helping entrepreneurs refine their pitch.",
            img: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=400&h=500&auto=format&fit=crop"
        }
    ];

    return (
        <section className="py-24 px-4 bg-slate-50">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-bold text-slate-900 mb-4">Meet the Mentors</h2>
                    <p className="text-slate-500 text-sm max-w-2xl mx-auto leading-relaxed">
                        Our mentors are world-class leaders, researchers, and entrepreneurs committed to your professional evolution.
                    </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                    {mentors.map((mentor, idx) => (
                        <div key={idx} className="text-center">
                            <div className="aspect-[4/5] rounded-xl overflow-hidden mb-6 shadow-sm grayscale hover:grayscale-0 transition-all duration-500">
                                <img src={mentor.img} alt={mentor.name} className="w-full h-full object-cover" />
                            </div>
                            <h4 className="text-lg font-bold text-slate-900 mb-1">{mentor.name}</h4>
                            <p className="text-[12px] font-semibold text-blue-600 mb-4">{mentor.role}</p>
                            <p className="text-slate-400 text-[11px] leading-relaxed px-4">
                                {mentor.bio}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default MentorGrid