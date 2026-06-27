'use client';

import { InfiniteMovingCards } from "./ui/infinite-moving-cards";


const testimonials = [
    {
        quote:
            "Joining this music school was the best decision I've ever made. Within just 3 months of piano lessons, I went from knowing nothing to playing my first full song. The instructors are incredibly patient and passionate.",
        name: "Sarah Mitchell",
        title: "Piano Student",
    },
    {
        quote:
            "The guitar course here completely transformed how I approach music. The structured curriculum and hands-on practice sessions gave me the confidence to perform live for the first time. I can't thank my instructor enough!",
        name: "James Patel",
        title: "Guitar Student",
    },
    {
        quote:
            "I always dreamed of producing my own music but had no idea where to start. The Music Production with Ableton course broke everything down step by step. I've already released two tracks on Spotify!",
        name: "Anika Torres",
        title: "Music Production Student",
    },
    {
        quote:
            "The vocal training program here is unlike anything I've experienced. My range and control have improved dramatically. The community of fellow students also keeps me motivated every single day.",
        name: "David Okafor",
        title: "Vocal Training Student",
    },
    {
        quote:
            "I took the Music Theory course as a complete beginner and it was perfect. Now I can read sheet music, understand chord progressions, and compose my own melodies. The instructors truly care about your growth.",
        name: "Priya Nair",
        title: "Music Theory Student",
    },
];

export default function Reviews() {
    return (
        <div className="h-160 w-full flex flex-col antialiased bg-black bg-grid-white items-center justify-center relative overflow-hidden px-0 md:px-20 md:py-0 mx-auto">
            {/* Radial fade overlay */}
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_40%,#101828_100%)]" />
            <h2 className="text-3xl font-bold text-center text-white z-10 mb-4">
                Hear Our Harmony: Real Stories from Our Students
            </h2>
            <p className="text-center text-gray-400 mb-8 z-10">
                Discover how our courses have transformed the lives of our students.
            </p>
            <InfiniteMovingCards
                items={testimonials}
                direction="right"
                speed="normal"
            />
        </div>
    )
}
