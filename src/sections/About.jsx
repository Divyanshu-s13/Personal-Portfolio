import React, { useRef } from 'react'
import { gsap } from "gsap";
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { SplitText } from "gsap/SplitText";

gsap.registerPlugin(useGSAP,ScrollTrigger,SplitText);

const About = () => {

  const aboutRef = useRef(null);

  useGSAP(() => {
    // Text fade effect
    SplitText.create(".about-text", {
      type: "lines, chars",
      onSplit(self) {
        gsap.set(self.chars, { opacity: 0.25 }); // set initial opacity

        gsap.to(self.chars, {
          opacity: 1,
          stagger: 0.05,
          scrollTrigger: {
            trigger: aboutRef.current,
            start: "top 70%",
            end: "center center",
            scrub: 1
          },
        });
      },
    });
  }, { scope: aboutRef });

  return (
    <>
      <div id="about" ref={aboutRef} className='h-screen bg-white rounded-tl-[60px] rounded-tr-[60px] relative z-10'>
          {/* Text container */}
          <div className='about-text main-container py-4 lg:py-12 h-full flex justify-center items-center font-heading text-black text-2xl md:text-3xl xl:text-[40px] 2xl:text-5xl leading-[1.25]'>I am a 2nd-year B.Tech student at Newton School of Technology, passionate about devlopment problem-solving, data structures, and algorithms. I regularly practice coding on LeetCode to strengthen my problem-solving skills and improve my understanding of core computer science concepts. My goal is to enhance my competitive programming skills, master DSA, and prepare for future placements and internships.</div>
          
          {/* Resume button - bottom right */}
          <a 
            href="/resume.pdf" 
            target="_blank"
            rel="noopener noreferrer"
            className="absolute bottom-8 right-8 btn uppercase font-heading border-2 border-transparent text-center px-8 py-3 rounded-full text-base lg:text-lg"
          >
            Resume
          </a>
      </div>
    </>
  )
}

export default About