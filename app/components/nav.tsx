"use client";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import React, { useEffect, useRef, useState } from "react";

export const Navigation: React.FC = () => {
	const ref = useRef<HTMLElement>(null);
	const [isIntersecting, setIntersecting] = useState(true);

	useEffect(() => {
		if (!ref.current) return;
		const observer = new IntersectionObserver(([entry]) =>
			setIntersecting(entry.isIntersecting),
		);

		observer.observe(ref.current);
		return () => observer.disconnect();
	}, []);

	return (
		<header ref={ref}>
			<div
				className={`fixed inset-x-0 top-0 z-50 backdrop-blur  duration-200 border-b  ${isIntersecting
					? "bg-zinc-900/0 border-transparent"
					: "bg-zinc-900/500  border-zinc-800 "
					}`}
			>
				<div className="container flex flex-row-reverse items-center justify-between p-4 md:p-6 mx-auto">
					<div className="flex flex-1 justify-end gap-4 md:gap-8 overflow-x-auto no-scrollbar whitespace-nowrap py-1 ml-4">
						<Link
							href="/profile"
							className="duration-200 text-zinc-400 hover:text-zinc-100 text-sm md:text-base"
						>
							Profile
						</Link>
						<Link
							href="/dev-apps"
							className="duration-200 text-zinc-400 hover:text-zinc-100 text-sm md:text-base"
						>
							Dev Apps
						</Link>
						<Link
							href="/architecture"
							className="duration-200 text-zinc-400 hover:text-zinc-100 text-sm md:text-base"
						>
							Architecture
						</Link>
						<Link
							href="/research"
							className="duration-200 text-zinc-400 hover:text-zinc-100 text-sm md:text-base"
						>
							Research
						</Link>
						<Link
							href="/contact"
							className="duration-200 text-zinc-400 hover:text-zinc-100 text-sm md:text-base"
						>
							Contact
						</Link>
					</div>

					<Link
						href="/"
						className="duration-200 text-zinc-300 hover:text-zinc-100 flex items-center gap-2 flex-shrink-0"
					>
						<ArrowLeft className="w-6 h-6" />
						<span className="hidden sm:inline">Home</span>
					</Link>
				</div>
			</div>
		</header>
	);
};
