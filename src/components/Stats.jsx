function Stats() {
    const data = [
        {
            icon: <Users className="text-blue-600" size={24} />,
            label: "Expert Mentors",
            value: "500+",
            desc: "Vetted professionals from Fortune 500 companies."
        },
        {
            icon: <GraduationCap className="text-blue-600" size={24} />,
            label: "Students Guided",
            value: "10k+",
            desc: "Empowered students across 45 countries."
        },
        {
            icon: <BadgeCheck className="text-blue-600" size={24} />,
            label: "Success Rate",
            value: "98%",
            desc: "Mentees securing roles in their dream industries."
        }
    ];

    return (
        <section className="py-16 -mt-16 relative z-10 px-4">
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
                {data.map((item, idx) => (
                    <div key={idx} className="bg-white p-8 rounded-xl shadow-sm border border-slate-50 hover:shadow-md transition-shadow">
                        <div className="w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center mb-6">
                            {item.icon}
                        </div>
                        <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-1">{item.label}</p>
                        <h3 className="text-4xl font-bold text-slate-900 mb-4">{item.value}</h3>
                        <p className="text-slate-400 text-[11px] leading-relaxed">
                            {item.desc}
                        </p>
                    </div>
                ))}
            </div>
        </section>
    )
}

export default Stats