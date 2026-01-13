import { useState } from 'react';
import { ArrowRight, Star, TrendingUp, GraduationCap, Rocket } from 'lucide-react';



function Programs() {
    const [activeTab, setActiveTab] = useState("All Programs");
    const tabs = ["All Programs", "Executive", "Career Growth", "Student Success"];

    const tracks = [
        {
            id: 1,
            tag: "TOP TIER",
            icon: <Star size={16} className="text-blue-600" />,
            title: "Executive Leadership",
            desc: "Focus on C-suite transitions and strategic thinking for top-tier professionals seeking global influence.",
            image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?q=80&w=400&h=300&auto=format&fit=crop"
        },
        {
            id: 2,
            tag: "GROWTH",
            icon: <TrendingUp size={16} className="text-blue-600" />,
            title: "Career Pivot",
            desc: "Navigating industry shifts with confidence, expert placement strategies, and skill re-alignment.",
            image: "https://images.unsplash.com/photo-1515187029135-18ee286d815b?q=80&w=400&h=300&auto=format&fit=crop"
        },
        {
            id: 3,
            tag: "ACADEMIC",
            icon: <GraduationCap size={16} className="text-blue-600" />,
            title: "Student Success",
            desc: "Academic excellence, interview coaching, and early-career placement for ambitious university graduates.",
            image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=400&h=300&auto=format&fit=crop"
        },
        {
            id: 4,
            tag: "VENTURES",
            icon: <Rocket size={16} className="text-blue-600" />,
            title: "Entrepreneurial Spirit",
            desc: "Scaling ventures from seed to series A with veteran founder guidance and investor network access.",
            image: "https://images.unsplash.com/photo-1556761175-b413da4baf72?q=80&w=400&h=300&auto=format&fit=crop"
        }
    ];
    return (
        <div className="bg-white min-h-screen animate-in overflow-x-hidden">
            {/* Hero Section */}
            <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-24">
                <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
                    <div className="w-full lg:flex-1 order-2 lg:order-1">
                        <div className="relative w-full aspect-[4/3] sm:aspect-video lg:aspect-[4/3] bg-[#3a616d] rounded-3xl lg:rounded-[2rem] overflow-hidden flex items-center justify-center p-6 sm:p-12 shadow-2xl">
                            <div className="text-white text-center space-y-4 relative z-10">
                                <span className="text-xl sm:text-3xl font-serif italic opacity-40">Mentors</span>
                                <div className="h-px w-10 sm:w-12 bg-white/20 mx-auto"></div>
                                <h3 className="text-3xl sm:text-4xl font-bold tracking-[0.1em] sm:tracking-[0.2em] opacity-80 uppercase">MENTOR</h3>
                            </div>
                            <div className="absolute top-0 right-0 w-full h-full bg-gradient-to-br from-white/10 to-transparent pointer-events-none"></div>
                        </div>
                    </div>

                    <div className="w-full lg:flex-1 order-1 lg:order-2 text-center lg:text-left">
                        <span className="text-[10px] sm:text-[12px] font-bold tracking-[0.2em] text-[#2b63d9] uppercase mb-4 block">
                            Excellence in Leadership
                        </span>
                        <h1 className="text-3xl sm:text-5xl lg:text-7xl font-bold text-slate-900 leading-[1.15] mb-6 sm:mb-8 tracking-tight">
                            Elevate Your Potential with Expert Guidance
                        </h1>
                        <p className="text-slate-500 text-base sm:text-lg leading-relaxed mb-8 sm:mb-10 max-w-lg mx-auto lg:mx-0">
                            Elite mentorship tracks tailored for the next generation of global leaders, innovators, and industry pioneers.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                            <button className="px-8 py-4 bg-[#2b63d9] text-white font-bold rounded-xl hover:bg-blue-700 transition-all shadow-xl shadow-blue-100 active:scale-95">
                                Explore Programs
                            </button>
                            <button className="px-8 py-4 bg-white text-slate-800 border border-slate-200 font-bold rounded-xl hover:bg-slate-50 transition-all active:scale-95">
                                Watch Success Stories
                            </button>
                        </div>
                    </div>
                </div>
            </section>

            {/* Main Programs Section */}
            <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24 border-t border-slate-50">
                <div className="flex flex-col lg:flex-row justify-between lg:items-end gap-10 mb-16">
                    <div className="text-center lg:text-left">
                        <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4 tracking-tight">Available Mentorship Tracks</h2>
                        <p className="text-slate-400 text-sm sm:text-base max-w-md mx-auto lg:mx-0">
                            Choose the path that aligns with your professional aspirations.
                        </p>
                    </div>
                    <div className="flex items-center lg:justify-end space-x-6 overflow-x-auto pb-4 scrollbar-hide -mx-4 px-4 sm:mx-0 sm:px-0">
                        {tabs.map((tab) => (
                            <button
                                key={tab}
                                onClick={() => setActiveTab(tab)}
                                className={`text-[13px] font-bold whitespace-nowrap pb-2 transition-all border-b-2 shrink-0 ${activeTab === tab ? "text-blue-600 border-blue-600" : "text-slate-400 border-transparent hover:text-slate-600"
                                    }`}
                            >
                                {tab}
                            </button>
                        ))}
                    </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                    {tracks.map((track) => (
                        <div key={track.id} className="bg-white rounded-2xl sm:rounded-[1.5rem] border border-slate-100 overflow-hidden hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 flex flex-col h-full group">
                            <div className="aspect-[4/3] overflow-hidden">
                                <img src={track.image} alt={track.title} className="w-full h-full object-cover grayscale transition-all duration-500 group-hover:grayscale-0 group-hover:scale-110" />
                            </div>
                            <div className="p-6 sm:p-8 flex flex-col flex-grow">
                                <div className="flex items-center space-x-2 mb-4">
                                    {track.icon}
                                    <span className="text-[10px] font-bold tracking-widest text-[#2b63d9] uppercase">{track.tag}</span>
                                </div>
                                <h3 className="text-xl font-bold text-slate-900 mb-4 leading-tight group-hover:text-blue-600 transition-colors">{track.title}</h3>
                                <p className="text-slate-400 text-sm leading-relaxed mb-8 flex-grow">
                                    {track.desc}
                                </p>
                                <div className="pt-6 border-t border-slate-50 flex items-center justify-between mt-auto">
                                    <span className="text-xs font-bold text-slate-900">Learn More</span>
                                    <ArrowRight size={16} className="text-blue-600 group-hover:translate-x-1 transition-transform" />
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* Trust Section */}
            <section className="py-20 sm:py-24 bg-white border-y border-slate-50 overflow-hidden">
                <div className="max-w-7xl mx-auto px-4">
                    <p className="text-center text-[10px] font-bold tracking-[0.4em] text-slate-400 uppercase mb-12">
                        Trusted by professionals from
                    </p>
                    <div className="flex flex-wrap justify-center items-center gap-8 sm:gap-12 lg:gap-20 text-xl sm:text-2xl font-black text-slate-300 tracking-tighter italic uppercase">
                        <span className="hover:text-slate-400 transition-colors cursor-default">TECHNO</span>
                        <span className="hover:text-slate-400 transition-colors cursor-default">GLOBAL</span>
                        <span className="hover:text-slate-400 transition-colors cursor-default">VANTAGE</span>
                        <span className="hover:text-slate-400 transition-colors cursor-default">NEXUS</span>
                        <span className="hover:text-slate-400 transition-colors cursor-default">ORBIT</span>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Programs;