const roles = [
  "CIOs, CTOs, Heads of Technology",
  "Chief Digital Officers & Heads of Digital Transformation",
  "Chief Marketing Officers",
  "Heads of Retail & Corporate Banking",
  "Heads of Customer Experience",
  "Heads of Cards & Payments",
  "Heads of Data & Analytics",
  "Heads of Governance & Compliance",
];

export default function WhoAttend() {
    return (
        <section id="who-will-attend" className="py-24 px-6 max-w-6xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold text-center mb-12">Who Will You Meet?</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {roles.map((role, i) => (
                    <div key={i} className="glass p-6 text-center rounded-xl hover:scale-105 transition">
                        {role}
                    </div>
                ))}
            </div>
        </section>
    );
}