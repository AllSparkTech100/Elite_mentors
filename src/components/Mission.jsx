function Mission() {
    return (
        <section className="py-24 px-4 bg-white text-center">
            <div className="max-w-3xl mx-auto">
                <span className="text-[10px] font-bold tracking-[0.3em] text-blue-600 uppercase mb-4 block">
                    The Vision
                </span>
                <h2 className="text-4xl font-bold text-slate-900 mb-12">Our Mission</h2>

                <blockquote className="text-slate-500 text-lg lg:text-xl italic leading-loose font-medium mb-12 px-6">
                    "To provide a premium mentorship ecosystem that fosters growth, leadership, and professional excellence through personalized guidance from top-tier experts. We believe that accessibility to high-level networks shouldn't be a privilege, but a path for all who strive."
                </blockquote>

                <div className="flex items-center justify-center space-x-4">
                    <div className="h-px w-16 bg-blue-100"></div>
                    <span className="text-[10px] font-bold tracking-widest text-slate-400 uppercase">Est. 2021</span>
                    <div className="h-px w-16 bg-blue-100"></div>
                </div>
            </div>
        </section>
    )
}

export default Mission