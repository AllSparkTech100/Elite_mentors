function Header (){
    const [isOpen, setIsOpen] = useState(false);

  // Function to determine link classes based on active state
  const getNavLinkClass = ({ isActive }) =>
    `transition-all duration-200 text-sm md:text-[15px] font-medium ${
      isActive 
        ? "text-blue-600" 
        : "text-slate-600 hover:text-blue-600"
    }`;

  const getMobileNavLinkClass = ({ isActive }) =>
    `block text-base font-medium transition-colors ${
      isActive ? "text-blue-600" : "text-slate-700 hover:text-blue-600"
    }`;
    return(
        <div>
            {/* Floating Navbar */}
      <nav className="fixed top-4 left-1/2 transform -translate-x-1/2 z-50 w-[95%] lg:w-[90%] max-w-7xl px-4 md:px-6 lg:px-8">
        {/* Glassmorphism Background with backdropFilter */}
        <div className="bg-white/40 backdrop-blur-xl border border-white/30 rounded-full shadow-xl shadow-slate-900/10">
          <div className="flex items-center justify-between py-3 md:py-4 px-4 md:px-6">
            {/* Logo */}
            <div className="flex items-center space-x-2 md:space-x-3 shrink-0">
              <Link to="/" className="flex items-center space-x-2 md:space-x-3">
                <div className="w-8 h-8 md:w-10 md:h-10 bg-gradient-to-br from-blue-600 to-blue-700 rounded-full flex items-center justify-center shadow-lg">
                  <div className="w-4 h-4 md:w-5 md:h-5 bg-white rounded-bl-full"></div>
                </div>
                <span className="text-lg md:text-xl font-bold tracking-tight text-slate-900 hidden sm:inline-block">
                  Elite Mentors
                </span>
              </Link>
            </div>

            {/* Nav Links - Hidden on Mobile */}
            <div className="hidden lg:flex items-center justify-center flex-1 space-x-8 mx-8">
              <NavLink to="/programs" className={getNavLinkClass}>Programs</NavLink>
              <NavLink to="/about" className={getNavLinkClass}>About</NavLink>
              <NavLink to="/testimonials" className={getNavLinkClass}>Testimonials</NavLink>
              <NavLink to="/contact" className={getNavLinkClass}>Contact</NavLink>
            </div>

            {/* Desktop Action Button */}
            <div className="hidden lg:flex items-center shrink-0">
              <button className="bg-gradient-to-r from-blue-600 to-blue-700 text-white px-6 md:px-8 py-2.5 rounded-full text-sm md:text-[15px] font-bold hover:shadow-lg hover:shadow-blue-600/50 hover:scale-105 transition-all active:scale-95 backdrop-blur-sm whitespace-nowrap">
                Get Started
              </button>
            </div>

            {/* Mobile Toggle */}
            <div className="lg:hidden flex items-center">
              <button 
                onClick={() => setIsOpen(!isOpen)} 
                className="text-slate-600 focus:outline-none p-2 hover:bg-white/30 rounded-full transition-colors"
              >
                {isOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Menu - Floating */}
      {isOpen && (
        <div className="fixed top-20 transform -translate-x-1/2 z-40 w-[95%] md:hidden animate-in fade-in slide-in-from-top-2 duration-300">
          <div className="bg-white/95 backdrop-blur-2xl border border-white/40 rounded-3xl shadow-2xl shadow-slate-900/20 py-6 px-6 space-y-4">
            <NavLink 
              to="/programs" 
              className={getMobileNavLinkClass} 
              onClick={() => setIsOpen(false)}
            >
              Programs
            </NavLink>
            <NavLink 
              to="/about" 
              className={getMobileNavLinkClass} 
              onClick={() => setIsOpen(false)}
            >
              About Us
            </NavLink>
            <NavLink 
              to="/testimonials" 
              className={getMobileNavLinkClass} 
              onClick={() => setIsOpen(false)}
            >
              Testimonials
            </NavLink>
            <NavLink 
              to="/contact" 
              className={getMobileNavLinkClass} 
              onClick={() => setIsOpen(false)}
            >
              Contact Us
            </NavLink>
            <div className="pt-4 border-t border-slate-200">
              <button className="w-full py-3 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-full font-bold text-base shadow-lg shadow-blue-600/30 hover:shadow-xl transition-all active:scale-95">
                Get Started
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Spacer for floating nav */}
      <div className="h-20 md:h-24"></div>
        </div>
    )
}