"use client";

import AnimatedCounter from "./AnimatedCounter";

const stats = [
  { value: 50, suffix: "K+", label: "Active Users", icon: "users" },
  { value: 1, suffix: "M+", label: "Notes Created", icon: "notes" },
  { value: 99.9, suffix: "%", label: "Uptime", decimals: 1, icon: "uptime" },
  { value: 4.9, suffix: "/5", label: "User Rating", decimals: 1, icon: "rating" },
];

const icons: Record<string, JSX.Element> = {
  users: (
    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
    </svg>
  ),
  notes: (
    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
    </svg>
  ),
  uptime: (
    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
    </svg>
  ),
  rating: (
    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
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
