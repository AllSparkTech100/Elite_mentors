import { Mail, MapPin, Clock, Send, Linkedin, Twitter, Instagram } from 'lucide-react';

function Contact ()  {
  return (
    <div className="bg-white min-h-screen pt-16 pb-24 px-4 sm:px-6 lg:px-8 animate-in">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="mb-16 lg:mb-24">
          <h1 className="text-4xl sm:text-6xl font-extrabold text-[#111827] mb-6 tracking-tight">
            Let’s Elevate Your Journey
          </h1>
          <p className="text-lg sm:text-xl text-[#4b5563] max-w-3xl leading-relaxed">
            Connect with our expert mentors for personalized guidance tailored to your professional ambitions.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-32 items-start">
          {/* Left: Contact Form Card */}
          <div className="bg-white p-8 sm:p-12 rounded-[2.5rem] border border-slate-100 shadow-[0_20px_50px_rgba(0,0,0,0.02)]">
            <form className="space-y-8" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-2">
                  <label className="text-[14px] font-bold text-slate-900 ml-1">Full Name</label>
                  <input 
                    type="text" 
                    placeholder="Jane Doe"
                    className="w-full px-6 py-4 bg-white border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-100 transition-all placeholder:text-slate-300 text-[15px]"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-[14px] font-bold text-slate-900 ml-1">Professional Email</label>
                  <input 
                    type="email" 
                    placeholder="jane@company.com"
                    className="w-full px-6 py-4 bg-white border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-100 transition-all placeholder:text-slate-300 text-[15px]"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-[14px] font-bold text-slate-900 ml-1">Inquiry Topic</label>
                <div className="relative">
                  <select className="w-full px-6 py-4 bg-white border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-100 transition-all text-[#4b5563] appearance-none bg-[url('data:image/svg+xml;charset=utf-8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20fill%3D%22none%22%20viewBox%3D%220%200%2024%2024%22%20stroke%3D%22%2364748b%22%3E%3Cpath%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%20stroke-width%3D%222%22%20d%3D%22m19%209-7%207-7-7%22%2F%3E%3C%2Fsvg%3E')] bg-[length:1.25rem_1.25rem] bg-[right_1.5rem_center] bg-no-repeat text-[15px]">
                    <option>Select a topic</option>
                    <option>Executive Mentorship</option>
                    <option>Career Transition</option>
                    <option>Student Advisory</option>
                    <option>Other</option>
                  </select>
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-[14px] font-bold text-slate-900 ml-1">Message</label>
                <textarea 
                  rows={6}
                  placeholder="How can we help you on your journey?"
                  className="w-full px-6 py-4 bg-white border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-100 transition-all placeholder:text-slate-300 resize-none text-[15px]"
                ></textarea>
              </div>

              <button className="bg-[#2b63d9] text-white px-10 py-5 rounded-xl font-bold flex items-center justify-center space-x-3 hover:bg-blue-700 transition-all shadow-xl shadow-blue-100 w-full sm:w-auto active:scale-[0.98]">
                <span className="text-[16px]">Send Message</span>
                <Send size={20} className="mt-0.5" />
              </button>
            </form>
          </div>

          {/* Right: Contact Information */}
          <div className="flex flex-col h-full justify-between">
            <div className="space-y-12 mb-16 lg:mb-0">
              <h3 className="text-2xl font-bold text-slate-900">Contact Information</h3>
              
              <div className="space-y-10">
                <div className="flex items-start space-x-6 group">
                  <div className="w-14 h-14 bg-[#eef2ff] rounded-2xl flex items-center justify-center text-[#2b63d9] shrink-0 transition-transform group-hover:scale-105">
                    <Mail size={24} />
                  </div>
                  <div>
                    <p className="text-[11px] font-bold tracking-[0.2em] text-[#2b63d9] uppercase mb-1">Email Us</p>
                    <p className="text-xl font-bold text-slate-900 mb-1">contact@mentorshippro.com</p>
                    <p className="text-[14px] text-slate-500">Our team responds within 24 hours.</p>
                  </div>
                </div>

                <div className="flex items-start space-x-6 group">
                  <div className="w-14 h-14 bg-[#eef2ff] rounded-2xl flex items-center justify-center text-[#2b63d9] shrink-0 transition-transform group-hover:scale-105">
                    <MapPin size={24} />
                  </div>
                  <div>
                    <p className="text-[11px] font-bold tracking-[0.2em] text-[#2b63d9] uppercase mb-1">Our Studio</p>
                    <p className="text-xl font-bold text-slate-900 mb-1">128 Innovation Way, Level 4</p>
                    <p className="text-[14px] text-slate-500 leading-relaxed">London, UK - EC2A 4NE</p>
                  </div>
                </div>

                <div className="flex items-start space-x-6 group">
                  <div className="w-14 h-14 bg-[#eef2ff] rounded-2xl flex items-center justify-center text-[#2b63d9] shrink-0 transition-transform group-hover:scale-105">
                    <Clock size={24} />
                  </div>
                  <div>
                    <p className="text-[11px] font-bold tracking-[0.2em] text-[#2b63d9] uppercase mb-1">Office Hours</p>
                    <p className="text-xl font-bold text-slate-900 mb-1">Mon - Fri: 9:00 - 18:00</p>
                    <p className="text-[14px] text-slate-500">GMT (Standard Time)</p>
                  </div>
                </div>
              </div>

              {/* Map Placeholder */}
              <div className="w-full aspect-[2/1] bg-slate-100 rounded-[2rem] overflow-hidden border border-slate-200 shadow-sm relative group cursor-pointer">
                <img 
                  src="https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?q=80&w=1000&auto=format&fit=crop" 
                  alt="Map location" 
                  className="w-full h-full object-cover grayscale transition-all duration-1000 group-hover:grayscale-0 group-hover:scale-105 opacity-80"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/10 to-transparent"></div>
              </div>

              {/* Social Links */}
              <div>
                <p className="text-[11px] font-bold tracking-[0.3em] text-slate-400 uppercase mb-8">Follow Our Journey</p>
                <div className="flex space-x-5">
                  <a href="#" className="w-14 h-14 bg-white border border-slate-200 rounded-2xl flex items-center justify-center text-slate-400 hover:text-blue-600 hover:border-blue-100 hover:shadow-lg transition-all active:scale-95">
                    <Linkedin size={22} />
                  </a>
                  <a href="#" className="w-14 h-14 bg-white border border-slate-200 rounded-2xl flex items-center justify-center text-slate-400 hover:text-blue-400 hover:border-blue-100 hover:shadow-lg transition-all active:scale-95">
                    <Twitter size={22} />
                  </a>
                  <a href="#" className="w-14 h-14 bg-white border border-slate-200 rounded-2xl flex items-center justify-center text-slate-400 hover:text-pink-500 hover:border-pink-100 hover:shadow-lg transition-all active:scale-95">
                    <Instagram size={22} />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;