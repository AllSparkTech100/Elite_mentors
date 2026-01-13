function TrustBar() {
    const logos = [1, 2, 3, 4, 5];
    return (
        <section className="py-12 bg-white border-y border-gray-50">
            <div className="max-w-7xl mx-auto px-4">
                <p className="text-center text-[10px] font-bold tracking-[0.2em] text-slate-400 uppercase mb-8">
                    Trusted by professionals at
                </p>
                <div className="flex flex-wrap justify-center items-center gap-12 lg:gap-24 opacity-40 grayscale">
                    {logos.map((i) => (
                        <div key={i} className="w-12 h-12 bg-slate-400 rounded-md"></div>
                    ))}
                </div>
            </div>
        </section>
    )
}
export default TrustBar