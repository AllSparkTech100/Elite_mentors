function Programs() {
    const programs = [
        {
            id: 1,
            tag: "LEADERSHIP",
            title: "Executive Presence",
            image: "https://picsum.photos/id/1/400/500"
        },
        {
            id: 2,
            tag: "TECH",
            title: "Career Pivot in Tech",
            image: "https://picsum.photos/id/2/400/500"
        },
        {
            id: 3,
            tag: "ENTREPRENEURSHIP",
            title: "Founders Workshop",
            image: "https://picsum.photos/id/3/400/500"
        },
        {
            id: 4,
            tag: "ACADEMIC",
            title: "Ivy League Prep",
            image: "https://picsum.photos/id/4/400/500"
        }
    ];
    return (
        <section className="py-24 bg-[#1a1a1a] text-white overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col sm:flex-row justify-between items-end gap-6 mb-16">
                    <div className="max-w-2xl">
                        <h2 className="text-4xl font-bold mb-4">Featured Programs</h2>
                        <p className="text-slate-400">
                            Curated experiences designed to help you reach the next level of your professional journey.
                        </p>
                    </div>
                    <button className="text-orange-400 font-medium hover:text-orange-300 transition-colors border-b border-orange-400/30">
                        View All Programs
                    </button>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {programs.map((p) => (
                        <div key={p.id} className="group relative h-[420px] rounded-2xl overflow-hidden cursor-pointer">
                            <img
                                src={p.image}
                                alt={p.title}
                                className="absolute inset-0 w-full h-full object-cover grayscale transition-all duration-500 group-hover:grayscale-0 group-hover:scale-110"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent"></div>
                            <div className="absolute bottom-0 p-6 w-full">
                                <span className="text-[10px] font-bold tracking-widest text-orange-400 mb-2 block">
                                    {p.tag}
                                </span>
                                <h3 className="text-xl font-bold text-white transition-all group-hover:translate-x-2">
                                    {p.title}
                                </h3>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Programs