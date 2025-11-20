const topics = [
  "VISION 2030 - EMERGENCE OF THE KINGDOM AS A GLOBAL FINANCIAL LEADER",
  "DIGITAL TRANSFORMATION - THE FOUNDATIONAL PLATFORM FOR ACHIEVING BUSINESS AGILITY",
  "PAYMENTS TODAY & TOMORROW - THE FUTURE OF DIGITAL PAYMENTS",
  "PROVIDING A NEXT-GEN SEAMLESS BANKING CUSTOMER EXPERIENCE",
  "DATA & ANALYTICS PROVIDING A 360° OVERVIEW TO BANKS & CUSTOMERS",
  "INCLUSIVE BANKING THROUGH OPEN BANKING",
  "THE CLOUD IMPERATIVE",
  "THE FUTURE OF NBFIs",
  "'DIGITAL ONLY' BANKS - THE RISE OF 'INVISIBLE BANKS'",
  "EXPERIENTIAL BANKING IN METAVERSE",
];

export default function Topics() {
    return (
        <section id="topics" className="py-24 px-6 bg-black/30">
            <div className="max-w-7xl mx-auto">
                <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">Topic Highlights</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {topics.map((topic, i) => (
                        <div key={i} className="glass p-6 rounded-xl hover:bg-white/20 transition">
                            <h3 className="text-xl font-semibold text-purple-300">{topic}</h3>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}