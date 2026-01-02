"use client";

const Loader = () => {
  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="relative w-24 h-24 sm:w-32 sm:h-32 md:w-40 md:h-40">
        {/* Central Node (AI Core) */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600 to-purple-600 rounded-full shadow-lg animate-pulse-scale">
          {/* Glowing Halo Effect */}
          <div
            className="absolute inset-0 rounded-full animate-gradient-shift"
            style={{
              background: "linear-gradient(45deg, #3b82f6, #a855f7, #ec4899, #3b82f6)",
              backgroundSize: "200%",
              filter: "blur(12px)",
              opacity: 0.5,
            }}
          />
        </div>

        {/* Neural Network Nodes */}
        {Array.from({ length: 6 }).map((_, index) => (
          <div
            key={index}
            className="absolute w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 bg-blue-400 rounded-full animate-node-pulse"
            style={{
              left: "50%",
              top: "50%",
              transformOrigin: "center",
              animation: `orbit ${2 + index * 0.3}s linear infinite, node-pulse ${1 + index * 0.2}s ease-in-out infinite`,
              transform: `translate(-50%, -50%) rotate(${index * 60}deg) translateX(40px)`,
            }}
          />
        ))}

        {/* Connecting Lines (Neural Links) */}
        {Array.from({ length: 6 }).map((_, index) => (
          <div
            key={`line-${index}`}
            className="absolute w-px h-16 sm:h-20 md:h-24 bg-gradient-to-b from-blue-500/50 to-purple-500/50 animate-line-pulse"
            style={{
              left: "50%",
              top: "50%",
              transformOrigin: "center",
              animation: `orbit ${2 + index * 0.3}s linear infinite`,
              transform: `translate(-50%, -50%) rotate(${index * 60}deg) translateX(40px)`,
            }}
          />
        ))}
      </div>

      <style jsx>{`
        @keyframes orbit {
          from {
            transform: translate(-50%, -50%) rotate(0deg) translateX(40px);
          }
          to {
            transform: translate(-50%, -50%) rotate(360deg) translateX(40px);
          }
        }

        @keyframes node-pulse {
          0%, 100% {
            transform: scale(1);
            opacity: 1;
          }
          50% {
            transform: scale(1.3);
            opacity: 0.6;
          }
        }

        @keyframes line-pulse {
          0%, 100% {
            opacity: 0.3;
          }
          50% {
            opacity: 0.8;
          }
        }

        .animate-pulse-scale {
          animation: pulse-scale 1.2s ease-in-out infinite;
        }

        @keyframes pulse-scale {
          0%, 100% {
            transform: scale(1);
            opacity: 1;
          }
          50% {
            transform: scale(1.15);
            opacity: 0.7;
          }
        }

        .animate-gradient-shift {
          animation: gradient-shift 3s linear infinite alternate;
        }

        @keyframes gradient-shift {
          from {
            background-position: 0%;
          }
          to {
            background-position: 100%;
          }
        }
      `}</style>
    </div>
  );
};

export default Loader;
