function SecondaryCTA (){
    return(
          <section className="py-20 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="bg-[#2b63d9] rounded-[2rem] py-16 px-6 lg:py-20 text-center text-white">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Ready to shape your future?
          </h2>
          <p className="text-blue-100 text-lg max-w-2xl mx-auto mb-12">
            Join EliteMentor today and get matched with an industry expert tailored to your career aspirations.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button className="w-full sm:w-auto px-10 py-4 bg-white text-[#2b63d9] font-bold rounded-lg shadow-xl shadow-black/10 hover:bg-slate-50 transition-colors">
              Apply as Student
            </button>
            <button className="w-full sm:w-auto px-10 py-4 bg-[#4179f0] text-white font-bold rounded-lg border border-white/20 hover:bg-[#3a70e5] transition-colors">
              Become a Mentor
            </button>
          </div>
        </div>
      </div>
    </section>
    )
}
export default SecondaryCTA