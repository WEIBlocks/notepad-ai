"use client";

import AnimatedCounter from "./AnimatedCounter";

// Defensible product facts only — no fabricated user metrics.
// If/when real analytics are wired (Vercel Analytics, Plausible, GA),
// migrate to dynamic values per APEX audit Section 5 (Option C).
const stats = [
  { value: 100, suffix: "%", label: "Free Forever", icon: "free" },
  { value: 0, suffix: "", label: "Logins Required", icon: "no-login" },
  { value: 4, suffix: "+", label: "Languages", icon: "languages" },
  { value: 9, suffix: "+", label: "Built-in Tools", icon: "tools" },
];

const icons: Record<string, JSX.Element> = {
  // Free Forever — checkmark inside shield (trust / guarantee)
  free: (
    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
    </svg>
  ),
  // No Login — open padlock (no auth barrier)
  "no-login": (
    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 11V7a4 4 0 118 0m-4 8v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2z" />
    </svg>
  ),
  // Languages — globe with meridians (international reach)
  languages: (
    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3.6 9h16.8M3.6 15h16.8M11.5 3a17 17 0 000 18M12.5 3a17 17 0 010 18M12 3a9 9 0 100 18 9 9 0 000-18z" />
    </svg>
  ),
  // Built-in Tools — wrench / settings (feature depth)
  tools: (
    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
    </svg>
  ),
};

export default function StatsSection() {
  return (
    <div className="max-w-[1370px] mx-auto px-4 sm:px-6 lg:px-14 py-16">
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
        {stats.map((stat, index) => (
          <div
            key={stat.label}
            className="group relative p-6 rounded-2xl bg-gradient-to-br from-[#1A1A1A] to-[#0f0f0f] border border-gray-800/50 overflow-hidden transform-gpu hover:scale-105 transition-all duration-500"
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            {/* Animated gradient border */}
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-blue-500/0 via-purple-500/50 to-pink-500/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-sm" />
            <div className="absolute inset-[1px] rounded-2xl bg-gradient-to-br from-[#1A1A1A] to-[#0f0f0f]" />

            {/* Content */}
            <div className="relative z-10">
              {/* Icon */}
              <div className="mb-4 text-blue-400 group-hover:text-purple-400 transition-colors duration-300">
                {icons[stat.icon]}
              </div>

              {/* Value */}
              <div className="text-3xl sm:text-4xl font-bold text-white mb-2">
                <AnimatedCounter
                  end={stat.value}
                  suffix={stat.suffix}
                  decimals={stat.decimals || 0}
                />
              </div>

              {/* Label */}
              <div className="text-sm text-gray-400 group-hover:text-gray-300 transition-colors duration-300">
                {stat.label}
              </div>
            </div>

            {/* Glow effect */}
            <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-blue-500/20 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          </div>
        ))}
      </div>
    </div>
  );
}
