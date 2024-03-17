'use client'
import { StickyScroll } from "./ui/sticky-scroll-reveal";
import Image from "next/image";


const musicSchoolContent = [
    {
      title: 'Discover Your Sound with Us: A Personal Journey in Music Mastery',
      description:
        'Embark on a musical journey that’s uniquely yours. Our personalized instruction adapts to your individual needs, setting the stage for unparalleled growth and creativity. At our music school, your aspirations meet our dedicated support, creating a harmonious path to mastery.',
        content: (
          <div className="h-full w-full  flex items-center justify-center text-white">
            <Image
              src="/courses/notes2.jpg"
              width={400}
              height={400}
              className="h-full w-full object-cover"
              alt="linear board demo"
            />
          </div>
        ),
      },
    {
      title: 'Discover Your Sound with Us: A Personal Journey in Music Mastery',
      description:
        'Embark on a musical journey that’s uniquely yours. Our personalized instruction adapts to your individual needs, setting the stage for unparalleled growth and creativity. At our music school, your aspirations meet our dedicated support, creating a harmonious path to mastery.',
        content: (
            <div className="h-full w-full  flex items-center justify-center text-white">
              <Image
                src="/courses/music-prod.jpg"
                width={400}
                height={400}
                className="h-full w-full object-cover"
                alt="linear board demo"
              />
            </div>
          ),
        },
    {
      title: 'Discover Your Sound with Us: A Personal Journey in Music Mastery',
      description:
        'Embark on a musical journey that’s uniquely yours. Our personalized instruction adapts to your individual needs, setting the stage for unparalleled growth and creativity. At our music school, your aspirations meet our dedicated support, creating a harmonious path to mastery.',
        content: (
            <div className="h-full w-full  flex items-center justify-center text-white">
              <Image
                src="/courses/classical-music.jpg"
                width={400}
                height={400}
                className="h-full w-full object-cover"
                alt="linear board demo"
              />
            </div>
          ),
        },
    {
      title: 'Live Feedback & Engagement',
      description:
        'Immerse yourself in an interactive learning experience where feedback is immediate, just like real-time changes in a collaborative project. This approach enhances your understanding and mastery of music concepts and performance techniques.',
        content: (
          <div className="h-full w-full  flex items-center justify-center text-white">
            <Image
              src="/courses/song-writing.jpg"
              width={400}
              height={400}
              className="h-full w-full object-cover"
              alt="linear board demo"
            />
          </div>
        ),
      },
    {
        title: 'Limitless Learning Opportunities',
        description:
          'With our expansive resource library and dynamic course offerings, you’ll never find yourself without something new to explore. Our platform provides continuous opportunities for growth, ensuring your musical skills are always advancing.',
          content: (
            <div className="h-full w-full  flex items-center justify-center text-white">
              <Image
                src="/courses/piano.jpg"
                width={400}
                height={400}
                className="h-full w-full object-cover"
                alt="linear board demo"
              />
            </div>
          ),
        },
    
  ];


function Scroll () {
    return (
        <div>
       <StickyScroll content={musicSchoolContent} />
           
        </div>
    );
};

export default Scroll;