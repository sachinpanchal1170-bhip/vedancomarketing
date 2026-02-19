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
          <img
            src="images/logo.png"
            alt="Vedanco Logo"
            className="w-12 h-12 object-contain"
          />
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
    <section className="pt-32 pb-2 px-6 text-center relative">
      <div className="absolute inset-0 flex justify-center items-center pointer-events-none">
        <div className="w-[600px] h-[600px] bg-brand-text/5 blur-[120px] rounded-full" />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: "easeOut" }}
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
   INDICATOR
========================= */

const Indicator = ({ value }: { value: string | boolean }) => {
  return (
    <div className="flex items-center justify-center">
      {typeof value === "boolean" ? (
        value ? (
          <Check className="w-6 h-6 text-brand-text stroke-[3px]" />
        ) : (
          <X className="w-6 h-6 text-[#C0392B] stroke-[3px]" />
        )
      ) : (
        <span className="text-sm font-bold opacity-80">{value}</span>
      )}
    </div>
  );
};

/* =========================
   COMPARISON TABLE
========================= */

const ComparisonTable = () => {
  return (
    <section id="packages" className="pt-4 pb-24 px-6">
      <div className="max-w-[1200px] mx-auto">

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="rounded-[20px] border border-brand-border premium-shadow bg-brand-bg overflow-hidden"
        >

          {/* Sticky Header */}
          <div className="sticky-header grid grid-cols-[220px_repeat(4,1fr)] md:grid-cols-[300px_repeat(4,1fr)]">
            <div className="p-6 border-r border-brand-border bg-brand-text/[0.02]">
              <span className="text-sm font-black uppercase tracking-[0.2em] opacity-80">
                Key Features
              </span>
            </div>

            {PLANS.map((plan) => (
              <div
                key={plan.id}
                className={cn(
                  "p-6 text-center border-r border-brand-border last:border-r-0",
                  plan.isElite && "bg-brand-text/[0.05]"
                )}
              >
                <h3 className="text-sm font-black tracking-[0.2em] uppercase mb-2">
                  {plan.name}
                </h3>
                <div className="text-2xl font-black">{plan.price}</div>
                <div className="text-xs uppercase opacity-50">/ Monthly</div>
              </div>
            ))}
          </div>

          {/* Body */}
          <div className="divide-y divide-brand-border bg-white/40">

            {FEATURE_BLOCKS.map((block, blockIdx) => (
              <motion.div
                key={block.category}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: blockIdx * 0.05 }}
              >

                <div className="grid grid-cols-[220px_repeat(4,1fr)] md:grid-cols-[300px_repeat(4,1fr)] bg-brand-text/[0.04] border-y border-brand-border">
                  <div className="px-6 py-4 border-r border-brand-border font-black uppercase tracking-[0.2em] text-sm">
                    {block.category}
                  </div>
                  {PLANS.map(plan => (
                    <div key={plan.id} />
                  ))}
                </div>

                {block.rows.map((row, rowIdx) => (
                  <motion.div
                    key={row.label}
                    initial={{ opacity: 0, y: 12 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: rowIdx * 0.04 }}
                    className="grid grid-cols-[220px_repeat(4,1fr)] md:grid-cols-[300px_repeat(4,1fr)] hover:bg-brand-text/[0.04] transition-all"
                  >
                    <div className="p-6 border-r border-brand-border font-bold uppercase text-sm bg-brand-text/[0.01]">
                      {row.label}
                    </div>

                    {PLANS.map((plan) => (
                      <div
                        key={plan.id}
                        className={cn(
                          "p-6 flex items-center justify-center border-r border-brand-border last:border-r-0",
                          plan.isElite && "bg-brand-text/[0.03]"
                        )}
                      >
                        <Indicator value={row.values[plan.id]} />
                      </div>
                    ))}
                  </motion.div>
                ))}
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Common Section */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="mt-20"
        >
          <div className="bg-white/60 backdrop-blur-md border border-brand-border rounded-[18px] p-12 premium-shadow max-w-4xl mx-auto">
            <div className="flex items-center justify-center gap-3 mb-10">
              <span className="text-2xl">🔥</span>
              <h3 className="text-xl font-black uppercase tracking-[0.3em]">
                Common For All Plans
              </h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {COMMON_FEATURES.map((feature, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -12 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.05 }}
                  className="flex items-center gap-4 p-4 rounded-xl bg-brand-text/[0.03] border border-brand-border/50"
                >
                  <div className="w-10 h-10 min-w-[40px] min-h-[40px] shrink-0
                rounded-full flex items-center justify-center
                bg-gradient-to-br from-[#214B25] to-[#2E6B35]
                shadow-[0_6px_18px_rgba(33,75,37,0.25)]
                transition-all duration-300">
                  <Check className="w-5 h-5 text-white stroke-[3.5px]" />
                </div>
                  <span className="text-sm font-bold opacity-80">
                    {feature}
                  </span>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

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
        <ComparisonTable />
      </main>
    </div>
  );
}
