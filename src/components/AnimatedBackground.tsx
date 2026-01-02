"use client";

import { useEffect, useState } from "react";

export default function AnimatedBackground() {
	const [mounted, setMounted] = useState(false);

	useEffect(() => {
		// Delay rendering of heavy animations until after initial paint
		// Use requestIdleCallback with setTimeout fallback for Safari
		const scheduleCallback = window.requestIdleCallback || ((cb: () => void) => setTimeout(cb, 1));
		const cancelCallback = window.cancelIdleCallback || clearTimeout;

		const timer = scheduleCallback(() => setMounted(true));
		return () => cancelCallback(timer);
	}, []);

	return (
		<div className="fixed inset-0 -z-10 bg-[#0a0a0a] overflow-hidden">
			{mounted && (
				<>
					{/* Glowing orbs */}
					<div className="glow-orb top-[10%] left-[20%]"></div>
					<div className="glow-orb bottom-[30%] right-[10%]"></div>
					<div className="glow-orb top-[40%] right-[30%]"></div>

					{/* Floating particles - reduced count for performance */}
					<div className="particles-container">
						{[...Array(50)].map((_, i) => (
							<div
								key={i}
								className={`particle particle-${i % 5}`}
								style={{
									'--x': `${Math.random() * 100}%`,
									'--y': `${Math.random() * 100}%`,
									'--delay': `${Math.random() * 10}s`,
									'--size': `${Math.random() * 3 + 1}px`,
								} as React.CSSProperties}
							/>
						))}
					</div>

					{/* Neural network lines */}
					<div className="neural-lines">
						{[...Array(10)].map((_, i) => (
							<div
								key={i}
								className="neural-line"
								style={{
									'--rotation': `${Math.random() * 360}deg`,
									'--delay': `${Math.random() * 5}s`,
								} as React.CSSProperties}
							/>
						))}
					</div>

					{/* AI processing circles */}
					<div className="processing-circles">
						<div className="circle circle-1"></div>
						<div className="circle circle-2"></div>
						<div className="circle circle-3"></div>
					</div>

					{/* Gradient mesh background */}
					<div className="gradient-mesh"></div>

					{/* Animated grid overlay */}
					<div className="grid-overlay"></div>
				</>
			)}

			{/* Final overlay - always render for consistent look */}
			<div className="absolute inset-0 bg-gradient-to-tr from-black/80 via-transparent to-black/80" />
		</div>
	);
}
