const reasons = [
  "Gain knowledge and insights from top industry leaders and experts from across the globe",
  "Network with industry peers in a solution-oriented environment",
  "Discuss significant partnerships and collaborations with industry leaders",
];

export default function WhyAttend() {
    return (
        <section id="why-attend" className="py-24 px-6 bg-black/50">
            <div className="maw-w-5xl mx-auto text-center">
                <h2 className="text-4xl md:text-5xl font-bold mb-12">Why Attend?</h2>
                <div className="space-y-10 text-xl">
                    {reasons.map((reason, i) => (
                        <div key={i} className="glass p-8 rounded-2xl maw-w-4xl mx-auto">
                            <p>{reason}</p>
                        </div>
                    ))}
                </div>
                <a href="https://www.ksa.futurebanksummit.com" target="_blank" rel="noreferrer"
                    className="inline-block mt-12 bg-purple-600 hover:bg-purple-700 px-12 py-5 rounded-full text-2xl font-bold transition">
                        Secure Your Seat Now
                </a>
            </div>
        </section>
    );
}