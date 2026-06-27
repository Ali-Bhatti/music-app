import musicInstructors from '@/data/music_instructors.json';
import { AnimatedTooltip } from './ui/animated-tooltip';
import { WavyBackground } from './ui/wavy-background';

export default function OurInstructors() {
    return (
        <WavyBackground className="w-full max-w-7xl mx-auto flex flex-col items-center justify-center">
            <h2 className="text-2xl md:text-4xl lg:text-7xl text-white text-center mb-8">Meet Our Instructors</h2>
            <p className="text-base md:text-lg text-white text-center mb-4">Discover the talented individuals who make our music program exceptional.</p>
            <div className='flex flex-row justify-center items-center w-full'>
                <AnimatedTooltip items={musicInstructors.instructors} />
            </div>
        </WavyBackground>
    )
}
