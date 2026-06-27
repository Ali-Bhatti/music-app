'use client';
import Link from 'next/link'
import { HoverEffect } from './ui/card-hover-effect';
import musicWebinars from '@/data/music_webinars.json';

const webinars = musicWebinars.webinars.filter(webinar => webinar.isFeatured);

export default function UpcomingWebinars() {
    return (
        <div className='p-12 bg-gray-100 dark:bg-gray-900'>
            <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
                <div className='text-center'>
                    <h2 className='text-2xl text-teal-600 font-semibold tracking-wide uppercase'>
                        FEATURED WEBINARS
                    </h2>
                    <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
                        Enhance your musical Journey
                    </p>
                </div>
                <div className='mt-10'>
                    <HoverEffect items={webinars} />
                </div>
                <div className='mt-10 text-center'>
                    <Link href="/all-webinars"
                        className="text-teal-600 dark:text-teal-400 hover:text-white border border-teal-500 hover:bg-teal-500 rounded-full px-6 py-2 transition-all duration-300"
                    >
                        View All Webinars
                    </Link>
                </div>
            </div>
        </div>
    )
}
