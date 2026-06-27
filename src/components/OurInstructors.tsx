import musicInstructors from '@/data/music_instructors.json';
import { AnimatedTooltip } from './ui/animated-tooltip';
import { WavyBackground } from './ui/wavy-background';

export default function OurInstructors() {
    return (
        <div className='relative h-40 overflow-hidden flex items-center justify-center'>
            <WavyBackground className="max-w-4xl mx-auto pb-40">
                
                    <AnimatedTooltip items={musicInstructors.instructors} />

            </WavyBackground>
        </div>

    )
}
