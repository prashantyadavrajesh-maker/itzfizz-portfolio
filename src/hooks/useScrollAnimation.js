import { useLayoutEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function useScrollAnimation({
  heroRef,
  titleRef,
  imageRef,
  statsRef,
}) {
  useLayoutEffect(() => {
    if (!heroRef.current) return;

    const ctx = gsap.context(() => {

      // Title animation
      if (titleRef.current) {
        gsap.fromTo(
          titleRef.current,
          {
            opacity: 0,
            y: 30,
          },
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            ease: "power2.out",
          }
        );
      }


      // Stats animation
      if (statsRef.current) {
        gsap.fromTo(
          statsRef.current.children,
          {
            opacity: 0,
            y: 20,
          },
          {
            opacity: 1,
            y: 0,
            duration: 0.5,
            stagger: 0.1,
            delay: 0.2,
            ease: "power2.out",
          }
        );
      }


      // Image animation
      if (imageRef.current) {
        gsap.to(
          imageRef.current,
          {
            y: 30,

            scrollTrigger: {
              trigger: heroRef.current,
              start: "top top",
              end: "bottom top",
              scrub: 1,
            },
          }
        );
      }


      // Refresh ScrollTrigger
      ScrollTrigger.refresh();

    }, heroRef);


    return () => {
      ctx.revert();
    };

  }, [
    heroRef,
    titleRef,
    imageRef,
    statsRef
  ]);
}