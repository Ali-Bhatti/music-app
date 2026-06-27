'use client';

import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-card";
import coursesData from "@/data/music_courses.json";
import Image from "next/image";
import { type Course } from "@/components/FeaturedCourses";

export default function Courses() {
    return (
        <div className="min-h-screen dark:bg-black bg- py-12 pt-36">
            <h1 className="text-4xl font-bold dark:text-white text-center text-gray-900">All Courses ({coursesData.courses.length})</h1>

            <div className="flex flex-wrap justify-center gap-4">
                {coursesData.courses.map((course: Course) => (
                    <CardContainer className="inter-var dark:bg-gray-900" key={`${course.id}_${course.slug}`}>
                        <CardBody className="bg-gray-50 dark:bg-gray-900 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border  ">
                            <CardItem
                                translateZ="50"
                                className="text-xl font-bold text-neutral-600 dark:text-white"
                            >
                                {course.title}
                            </CardItem>
                            <CardItem
                                as="p"
                                translateZ="60"
                                className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
                            >
                                {course.description}
                            </CardItem>
                            <CardItem translateZ="100" className="w-full mt-4">
                                <img
                                    src={course.image}
                                    height="1000"
                                    width="1000"
                                    className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
                                    alt={course.title}
                                />
                            </CardItem>
                            <div className="flex justify-end items-center mt-20">
                                <CardItem
                                    translateZ={20}
                                    as="a"
                                    href={`/courses/${course.slug}`}
                                    className="px-4 py-2 rounded-xl bg-black dark:bg-white dark:text-black text-white text-xs font-bold"
                                >
                                    Enroll
                                </CardItem>
                            </div>
                        </CardBody>
                    </CardContainer>
                ))}
            </div>
        </div>




    )
}
