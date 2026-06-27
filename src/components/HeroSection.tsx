import { Space_Grotesk } from 'next/font/google'
import Link from 'next/link'
import React from 'react'
import { Spotlight } from './ui/Spotlight'
import { Button } from "./ui/moving-border";

export default function HeroSection() {
    return (
        <div
            className="h-auto md:h-160 w-full rounded-md flex flex-col items-center justify-center overflow-hidden mx-auto py-10 md:py-0"
        >
            <div className="p-4 relative z-10 w-full text-center">
                {/* Dark mode spotlight — white beam on dark bg */}
                <Spotlight
                    className="-top-40 left-0 md:left-60 md:-top-20 hidden dark:block"
                    fill='white'
                />
                {/* Light mode spotlight — teal beam on light bg */}
                <Spotlight
                    className="-top-40 left-0 md:left-60 md:-top-20 block dark:hidden"
                    fill='#14b8a6'
                />
                <h1 className="mt-20 md:mt-0 text-4xl md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-800 to-neutral-500 dark:from-neutral-50 dark:to-neutral-400">
                    Master the art of music
                </h1>
                <p className="mt-4 text-sm md:text-base text-neutral-600 dark:text-neutral-400 max-w-lg mx-auto leading-relaxed text-center">
                    Dive into our comprehensive music courses and
                    transform your musical journey today. Whether
                    you're a beginner or looking to refine your
                    skills, join us to unlock your true potential.
                </p>
                <div className="mt-6">
                    <Link href="/music">
                        <Button className="text-sm font-bold">
                            Explore courses
                        </Button>
                    </Link>
                </div>
            </div>

        </div>
    )
}
