import { ArrowRightIcon } from "@heroicons/react/24/solid";

export default function Hero() {
    return (
        <section className="relative min-h-screen flex items-center justify-center px-6 overflow-hidden">
            <div className="absolute inset-0 bg-black/40" />
            <div className="relative z-10 text-center max-w-5xl">
                <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
                    4TH ANNUAL <span className="text-purple-400">FUTURE BANKS</span><br />
                    SUMMIT & AWARDS - KSA
                </h1>
                <p className="text-2xl md:text-4xl mb-4 text-purple-300">
                    Digital Innovations Transforming the Kindgdom's Banking Landscape
                </p>
                <div className="text-lg md:text-xl my-8 space-y-2">
                    <p>11-12 September 2023</p>
                    <p>Riyadh Mariott Hotel, Kingdom of Saudi Arabia</p>
                </div>
                <div className="flex flex-col sm:flex-row gap-6 justify-center mt-12">
                    <a href="https://www.ksa.futurebanksummit.com" target="_blank" rel="noreferrer"
                        className="bg-purple-600 hover:bg-purple-700 px-10 py-4 rounded-full text-xl font-semibold flex items-center justify-center gap-3 transition">
                            Register Now <ArrowRightIcon className="h-6 w-6" />
                    </a>
                    <a href="#about" className="border border-white/50 hover:bg-white/10 px-10 py-4 rounded-full text-xl font-semibold transition">
                        Learn More
                    </a>
                </div>
            </div>
        </section>
    );
}