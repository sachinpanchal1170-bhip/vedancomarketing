import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Check, X, Menu } from "lucide-react";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import { PLANS, FEATURE_BLOCKS, COMMON_FEATURES } from "./data";

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

/* =========================
   NAVBAR
========================= */

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-6 py-4",
        isScrolled
          ? "bg-brand-bg/90 backdrop-blur-lg shadow-sm"
          : "bg-transparent"
      )}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="flex items-center gap-3">
          <img src="/logo.png" alt="Vedanco Logo" className="w-12 h-12 object-contain" />
          <span className="font-bold text-lg tracking-tight text-brand-text">
            VEDANCO <span className="opacity-70">MARKETING</span>
          </span>
        </div>

        <div className="hidden md:flex items-center gap-8 text-sm font-semibold">
          <a href="#packages" className="hover:opacity-70 transition-opacity">
            Packages
          </a>
        </div>

        <button className="md:hidden p-2 text-brand-text">
          <Menu className="w-6 h-6" />
        </button>
      </div>
    </nav>
  );
};

/* =========================
   HEADER
========================= */

const Header = () => {
  return (
    <section className="pt-32 pb-6 px-6 text-center relative">
      <div className="absolute inset-0 flex justify-center items-center pointer-events-none">
        <div className="w-[600px] h-[600px] bg-brand-text/5 blur-[120px] rounded-full" />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="relative max-w-4xl mx-auto"
      >
        <h1 className="text-4xl md:text-5xl font-black text-brand-text mb-4 uppercase tracking-wider">
          VEDANCO MARKETING – PRICING
        </h1>
        <p className="text-lg md:text-xl text-brand-text/60 font-bold tracking-[0.25em] uppercase">
          Simple • Transparent • Result-Oriented
        </p>
      </motion.div>
    </section>
  );
};

/* =========================
   MOBILE PRICING CARDS
========================= */

const MobilePricing = () => {
  return (
    <section className="block md:hidden px-4 pb-20 space-y-10">

      {PLANS.map((plan) => (
        <div
          key={plan.id}
          className="rounded-2xl border border-brand-border bg-white shadow-lg p-6 space-y-6"
        >
          {/* Plan Header */}
          <div className="text-center">
            <h3 className="text-xs tracking-[0.3em] font-bold uppercase text-brand-text/70">
              {plan.name}
            </h3>

            <div className="text-3xl font-black mt-2 text-brand-text">
              {plan.price}
            </div>

            <div className="text-xs uppercase opacity-50">
              / Monthly
            </div>

            {/* WhatsApp Button */}
            <a
              href={`https://wa.me/916353097642?text=${encodeURIComponent(
`Hello Vedanco Marketing,
I am interested in the ${plan.name} plan (${plan.price} / Monthly).
Kindly share more details and next steps.
Thank you.`
              )}`}
              target="_blank"
              rel="noopener noreferrer"
             className="mt-4 block w-full text-center bg-brand-text text-white py-3 rounded-xl font-bold hover:opacity-90 transition"
            >
              Choose Plan
            </a>

          </div>

          {/* Features */}
          {FEATURE_BLOCKS.map((block) => (
            <div key={block.category} className="space-y-3">

              <h4 className="text-xs font-black uppercase tracking-[0.2em] text-brand-text/60 border-t pt-4">
                {block.category}
              </h4>

              {block.rows.map((row) => {
                const value = row.values[plan.id];

                return (
                  <div key={row.label} className="flex justify-between items-center text-sm">
                    <span className="font-medium text-brand-text/80">
                      {row.label}
                    </span>

                    {typeof value === "boolean" ? (
                      value ? (
                        <Check className="w-5 h-5 text-green-600" />
                      ) : (
                        <X className="w-5 h-5 text-red-500" />
                      )
                    ) : (
                      <span className="font-semibold text-brand-text">
                        {value}
                      </span>
                    )}
                  </div>
                );
              })}

            </div>
          ))}

        </div>
      ))}

    </section>
  );
};


/* =========================
   DESKTOP COMPARISON TABLE
========================= */

const ComparisonTable = () => {
  return (
    <section id="packages" className="hidden md:block pt-4 pb-24 px-6">
      <div className="max-w-[1200px] mx-auto">
        <div className="overflow-x-auto scrollbar-hide">
          <div className="min-w-[950px] rounded-[20px] border border-brand-border premium-shadow bg-brand-bg">
            <div className="sticky-header grid grid-cols-[220px_repeat(4,1fr)]">
              <div className="p-6 border-r border-brand-border bg-brand-text/[0.02] font-black uppercase text-sm">
                Key Features
              </div>

              {PLANS.map((plan) => (
                <div key={plan.id} className="p-6 text-center border-r border-brand-border last:border-r-0">
                  <h3 className="text-sm font-black uppercase mb-2">
                    {plan.name}
                  </h3>
                  <div className="text-2xl font-black">{plan.price}</div>
                  <div className="text-xs uppercase opacity-50">/ Monthly</div>
                </div>
              ))}
            </div>

            {FEATURE_BLOCKS.map((block) => (
              <div key={block.category}>
                <div className="grid grid-cols-[220px_repeat(4,1fr)] bg-brand-text/[0.04] border-y border-brand-border">
                  <div className="px-6 py-4 border-r border-brand-border font-black uppercase text-sm">
                    {block.category}
                  </div>
                </div>

                {block.rows.map((row) => (
                  <div key={row.label} className="grid grid-cols-[220px_repeat(4,1fr)] border-b border-brand-border">
                    <div className="p-6 border-r border-brand-border font-bold uppercase text-sm">
                      {row.label}
                    </div>

                    {PLANS.map((plan) => (
                      <div key={plan.id} className="p-6 flex items-center justify-center border-r border-brand-border last:border-r-0">
                        {typeof row.values[plan.id] === "boolean" ? (
                          row.values[plan.id] ? (
                            <Check className="w-5 h-5 text-green-600" />
                          ) : (
                            <X className="w-5 h-5 text-red-500" />
                          )
                        ) : (
                          row.values[plan.id]
                        )}
                      </div>
                    ))}
                  </div>
                ))}
              </div>
            ))}

          </div>
        </div>
      </div>
    </section>
  );
};

/* =========================
   APP
========================= */

export default function App() {
  return (
    <div className="min-h-screen bg-brand-bg text-brand-text">
      <Navbar />
      <main>
        <Header />

        {/* Mobile Cards */}
        <MobilePricing />

        {/* Desktop Table */}
        <ComparisonTable />

      </main>
    </div>
  );
}