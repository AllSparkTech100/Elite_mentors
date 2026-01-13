import { Quote, ThumbsUp, ThumbsDown, Star } from 'lucide-react';

const testimonial = [
  {
    text: "The strategic insights I gained from my mentor at Goldman Sachs were instrumental. I secured a Summer Associate position in the M&A group within 3 months of starting the program.",
    name: "Sarah Jenkins",
    role: "IB Analyst @ Goldman Sachs",
    img: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=100&h=100&auto=format&fit=crop",
    category: "Investment Banking"
  },
  {
    text: "Navigating the technical interviews at Meta seemed impossible until I was paired with a Senior Engineer who had been through the process. Their roadmap was my secret weapon.",
    name: "Marcus Thorne",
    role: "Software Engineer @ Meta",
    img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=100&h=100&auto=format&fit=crop",
    category: "Big Tech"
  },
  {
    text: "A truly elite network. The mentorship wasn't just about my resume; it was about professional presence and learning how to communicate like a partner at a Magic Circle firm.",
    name: "Elena Rodriguez",
    role: "Associate @ Clifford Chance",
    img: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=100&h=100&auto=format&fit=crop",
    category: "Corporate Law"
  },
  {
    text: "Elite Mentors gave me access to leaders I could never reach on LinkedIn. The precision-focused guidance for my MBA application was the reason I got into Harvard.",
    name: "David Chen",
    role: "MBA Candidate @ HBS",
    img: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=100&h=100&auto=format&fit=crop",
    category: "Management Consulting"
  },
  {
    text: "Switching from engineering to strategy consulting was daunting. My mentor broke down the case study method in a way that finally clicked. I start at BCG next month.",
    name: "Sophie Alpert",
    role: "Consultant @ BCG",
    img: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=100&h=100&auto=format&fit=crop",
    category: "Management Consulting"
  },
  {
    text: "The networking opportunities alone are worth 10x the investment. I was introduced to my current firm's VP through an Elite Mentors private dinner event.",
    name: "James Wilson",
    role: "Private Equity Associate",
    img: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=100&h=100&auto=format&fit=crop",
    category: "Venture Capital"
  }
];

const categories = [
  "All Stories", "Investment Banking", "Big Tech", "Management Consulting", "Venture Capital", "Corporate Law"
];

function Testimonials () {
  const [activeTab, setActiveTab] = useState("All Stories");

  const filteredTestimonials = activeTab === "All Stories" 
    ? testimonial 
    : testimonial.filter(t => t.category === activeTab);

  return (
    <div className="bg-white animate-in min-h-screen pt-32">
      {/* Hero Section */}
      <section className="pb-16 px-4 text-center">
        <div className="max-w-4xl mx-auto">
          <span className="inline-block px-4 py-2 rounded-full bg-blue-50 text-blue-600 text-xs font-bold tracking-widest uppercase mb-8">
            Trusted by 5,000+ Professionals
          </span>
          <h1 className="text-5xl lg:text-6xl font-bold text-slate-900 mb-6 leading-tight">
            Stories of Success from the Next<br />Generation of Leaders
          </h1>
          <p className="text-slate-600 text-lg max-w-2xl mx-auto leading-relaxed mb-12">
            Join a global community of high-achievers who accelerated their careers through our elite mentorship network and personalized guidance.
          </p>
        </div>

        {/* Filter Bar */}
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-wrap justify-center gap-3 px-4">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveTab(cat)}
                className={`px-6 py-3 rounded-full text-sm font-semibold transition-all duration-200 whitespace-nowrap ${
                  activeTab === cat 
                    ? "bg-blue-600 text-white shadow-lg shadow-blue-200" 
                    : "bg-slate-100 text-slate-700 hover:bg-slate-200"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Grid Section */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredTestimonials.map((t, idx) => (
            <div key={idx} className="bg-white p-8 rounded-3xl border border-slate-200 shadow-sm hover:shadow-xl hover:border-blue-100 transition-all duration-300 flex flex-col">
              <div className="flex items-start justify-between mb-6">
                <Quote className="text-blue-300 fill-blue-300 w-8 h-8" />
              </div>
              <p className="text-slate-700 text-base leading-relaxed mb-8 flex-grow font-medium">
                "{t.text}"
              </p>
              <div className="flex items-center space-x-4 pt-6 border-t border-slate-100">
                <img src={t.img} alt={t.name} className="w-14 h-14 rounded-full object-cover" />
                <div>
                  <h4 className="text-base font-bold text-slate-900">{t.name}</h4>
                  <p className="text-sm text-slate-600 font-medium">{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Community Feedback Section */}
      <section className="py-24 px-4 bg-slate-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-slate-900 mb-16">Verified Community Feedback</h2>
          <div className="space-y-8">
            {[
              {
                name: "Ambitious Mentee",
                date: "2 weeks ago",
                text: "The level of detail provided by my mentor was exceptional. The platform itself feels premium and well-curated. Every interaction adds value.",
                likes: 24
              },
              {
                name: "Ivy League Candidate",
                date: "1 month ago",
                text: "Successfully navigated the application process with the help of my mentor. A high-trust environment where privacy and ambition are prioritized equally.",
                likes: 18
              }
            ].map((feedback, idx) => (
              <div key={idx} className="bg-white p-8 rounded-2xl border border-slate-100">
                <div className="flex justify-between items-start mb-4">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-slate-300 rounded-full"></div>
                    <div>
                      <h4 className="text-base font-bold text-slate-900">{feedback.name}</h4>
                      <p className="text-sm text-slate-500">{feedback.date}</p>
                    </div>
                  </div>
                  <div className="flex space-x-1">
                    {[1, 2, 3, 4, 5].map((s) => (
                      <Star key={s} size={18} className="text-amber-400 fill-amber-400" />
                    ))}
                  </div>
                </div>
                <p className="text-slate-700 text-base leading-relaxed mb-6">
                  {feedback.text}
                </p>
                <div className="flex items-center space-x-6 text-slate-500">
                  <button className="flex items-center space-x-2 text-sm font-semibold hover:text-blue-600 transition-colors">
                    <ThumbsUp size={16} /> <span>{feedback.likes}</span>
                  </button>
                  <button className="flex items-center space-x-2 text-sm font-semibold hover:text-red-600 transition-colors">
                    <ThumbsDown size={16} />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Success CTA Section */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-br from-blue-600 to-blue-700 rounded-3xl py-16 px-8 md:py-20 md:px-16 text-center text-white shadow-2xl">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">
              Ready to Write Your Own Success Story?
            </h2>
            <p className="text-blue-100 text-lg max-w-2xl mx-auto mb-10">
              Our spots are limited and application-based. Start your journey toward excellence today.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <button className="w-full sm:w-auto px-10 py-4 bg-white text-blue-600 font-bold rounded-xl hover:bg-blue-50 transition-all duration-200 shadow-lg">
                Apply Now
              </button>
              <button className="w-full sm:w-auto px-10 py-4 bg-blue-500 text-white font-bold rounded-xl hover:bg-blue-400 transition-all duration-200 border border-blue-400">
                Book a Consultation
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Testimonials;