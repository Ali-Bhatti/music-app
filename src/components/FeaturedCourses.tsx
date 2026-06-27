"use client";
import courseData from "@/data/music_courses.json";
import Link from "next/link";
import { BackgroundGradient } from "./ui/background-gradient";

interface Course {
    id: number;
    title: string;
    description: string;
    isFeatured: boolean;
    slug: string;
    instructor: string;
    duration: string;
    price: number;
    image: string;
}

export default function FeaturedCourses() {
    const featuredCourses = courseData.courses.filter((course: Course) => course.isFeatured);
    return (
        <div className="py-12 bg-gray-100 dark:bg-gray-900">
            <div className="text-center">
                <h2 className="text-base text-teal-600 font-semibold tracking-wide uppercase">FEATURED COURSES</h2>
                <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl">Learn With Best</p>
            </div>
            <div className="mt-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-center">
                    {featuredCourses.map((course: Course) => (
                        <div key={course.id} className="flex justify-center">
                            <BackgroundGradient className="flex flex-col rounded-[22px] bg-white dark:bg-zinc-800 overflow-hidden h-full max-w-sm">
                                <div className="w-full h-48 overflow-hidden">
                                    <img
                                        src={course.image}
                                        alt={course.title}
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                                <div className="p-4 sm:p-6 flex flex-col items-center text-center">
                                    <p className="text-xl font-semibold text-gray-900 dark:text-white">{course.title}</p>
                                    <p className="mt-2 text-gray-500 dark:text-gray-400">{course.description}</p>
                                    <Link href={`/courses/${course.slug}`} className="mt-4 text-teal-600 dark:text-teal-400 hover:text-white">
                                        Learn More
                                    </Link>
                                </div>
                            </BackgroundGradient>
                        </div>
                    ))}
                </div>
            </div>
            <div className="mt-20 text-center">
                <Link
                    href="/courses"
                    className="text-teal-600 dark:text-teal-400 hover:text-white border border-teal-500 hover:bg-teal-500 rounded-full px-6 py-2 transition-all duration-300"
                >
                    View All Courses
                </Link>
            </div>
        </div>
    )
}
