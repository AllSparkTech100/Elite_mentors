import { Send, Instagram, Twitter, Mail, Share2 } from 'lucide-react';
import { Link } from 'react-router-dom';

function Footer (){
    return(
         <footer className="bg-white pt-24 pb-12 border-t border-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 mb-20">
          <div className="lg:col-span-4">
            <div className="flex items-center space-x-2 mb-6">
              <div className="w-8 h-8 bg-[#2b63d9] rounded-full flex items-center justify-center">
                <div className="w-4 h-4 bg-white rounded-bl-full"></div>
              </div>
              <span className="text-xl font-bold tracking-tight text-slate-900">
                Mentorship Elite
              </span>
            </div>
            <p className="text-slate-400 text-sm mb-10 leading-relaxed max-w-xs">
              Connecting global talent with world-class mentors since 2018. Your growth is our legacy.
            </p>
            <div className="flex space-x-3">
              <button className="w-10 h-10 bg-blue-50 text-blue-600 rounded-full flex items-center justify-center hover:bg-blue-100 transition-colors">
                <Share2 size={18} />
              </button>
              <button className="w-10 h-10 bg-blue-50 text-blue-600 rounded-full flex items-center justify-center hover:bg-blue-100 transition-colors">
                <Mail size={18} />
              </button>
            </div>
          </div>

          <div className="lg:col-span-2">
            <h4 className="font-bold text-slate-900 mb-8 text-[13px]">Programs</h4>
            <ul className="space-y-4 text-[13px] text-slate-400 font-medium">
              <li><Link to="/programs" className="hover:text-blue-600 transition-colors">Executive Coaching</Link></li>
              <li><Link to="/programs" className="hover:text-blue-600 transition-colors">Career Transitions</Link></li>
              <li><Link to="/programs" className="hover:text-blue-600 transition-colors">Graduate Success</Link></li>
              <li><Link to="/programs" className="hover:text-blue-600 transition-colors">Founder Series</Link></li>
            </ul>
          </div>

          <div className="lg:col-span-2">
            <h4 className="font-bold text-slate-900 mb-8 text-[13px]">Company</h4>
            <ul className="space-y-4 text-[13px] text-slate-400 font-medium">
              <li><Link to="/about" className="hover:text-blue-600 transition-colors">About Us</Link></li>
              <li><Link to="/testimonials" className="hover:text-blue-600 transition-colors">Success Stories</Link></li>
              <li><a href="#" className="hover:text-blue-600 transition-colors">Careers</a></li>
              <li><Link to="/contact" className="hover:text-blue-600 transition-colors">Contact</Link></li>
            </ul>
          </div>

          <div className="lg:col-span-4">
            <h4 className="font-bold text-slate-900 mb-8 text-[13px]">Stay Informed</h4>
            <p className="text-slate-400 text-[13px] mb-8 leading-relaxed">
              Subscribe to our newsletter for leadership insights.
            </p>
            <div className="flex bg-slate-50 border border-slate-100 rounded-lg p-1">
              <input 
                type="email" 
                placeholder="Email address" 
                className="flex-grow bg-transparent px-4 py-2 text-sm focus:outline-none"
              />
              <button className="bg-[#2b63d9] text-white p-3 rounded-lg hover:bg-blue-700 transition-colors">
                <Send size={18} />
              </button>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-slate-50 flex flex-col sm:flex-row justify-between items-center gap-4 text-[11px] font-medium text-slate-300">
          <p>© 2024 Mentorship Elite. All rights reserved.</p>
          <div className="flex space-x-6">
            <a href="#" className="hover:text-slate-600 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-slate-600 transition-colors">Terms of Service</a>
          </div>
          <div className="flex space-x-4 opacity-40">
            <a href="#" className="hover:text-blue-600 transition-colors"><Twitter size={14} /></a>
            <a href="#" className="hover:text-pink-600 transition-colors"><Instagram size={14} /></a>
          </div>
        </div>
      </div>
    </footer>
    )
}

export default Footer