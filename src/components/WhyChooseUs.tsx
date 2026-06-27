'use client';

import { StickyScroll } from "./ui/sticky-scroll-reveal"

const musicScrollContent = [
    {
        title: "Expert Instructors",
        description:
            "Learn from industry professionals with years of performance and teaching experience. Our instructors have trained at top music conservatories and worked with renowned artists, ensuring you receive world-class guidance at every step of your musical journey.",
        content: (
            <div className="flex h-full w-full items-center justify-center bg-[linear-gradient(to_bottom_right,var(--teal-500),var(--cyan-600))] text-white text-xl font-bold">
                World-Class Instructors
            </div>
        ),
    },
    {
        title: "Flexible Learning Paths",
        description:
            "Whether you're a complete beginner or an advanced musician, we have a course tailored for you. Learn at your own pace with structured curricula that adapt to your skill level, schedule, and musical goals — from classical theory to modern music production.",
        content: (
            <div className="flex h-full w-full items-center justify-center bg-[linear-gradient(to_bottom_right,var(--purple-500),var(--indigo-600))] text-white text-xl font-bold">
                Your Pace, Your Path
            </div>
        ),
    },
    {
        title: "Hands-On Practice",
        description:
            "Music is learned by doing. Our courses emphasize real practice with exercises, backing tracks, and performance projects. Get consistent feedback from instructors, track your progress, and build the muscle memory and ear training needed to truly master your instrument.",
        content: (
            <div className="flex h-full w-full items-center justify-center bg-[linear-gradient(to_bottom_right,var(--orange-500),var(--rose-500))] text-white text-xl font-bold">
                Practice Makes Perfect
            </div>
        ),
    },
    {
        title: "Vibrant Community",
        description:
            "Join thousands of passionate musicians from around the world. Collaborate on projects, participate in live jam sessions, get feedback in our forums, and grow together. Music is best when shared — and our community is here to inspire and support you every step of the way.",
        content: (
            <div className="flex h-full w-full items-center justify-center bg-[linear-gradient(to_bottom_right,var(--emerald-500),var(--teal-600))] text-white text-xl font-bold">
                Join the Community
            </div>
        ),
    },
];

export default function WhyChooseUs() {
    return (
        <div className="w-full overflow-hidden">
            <StickyScroll content={musicScrollContent} />
        </div>
    )
}
