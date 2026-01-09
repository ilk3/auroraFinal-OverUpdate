import React, { useEffect, useRef, useState } from 'react';
import { RevealOnScroll } from './RevealOnScroll';
import { useLanguage } from '../contexts/LanguageContext';
import { aboutTranslations } from '../translations/about';

interface TimelineEvent {
  year: string;
  title: string;
  description: string;
}

export function Timeline() {
  const [activeYear, setActiveYear] = useState('2013');
  const [scrollProgress, setScrollProgress] = useState(0);
  const timelineRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const { language } = useLanguage();
  const t = (key: string) => aboutTranslations[language][key];

  const timelineEvents: TimelineEvent[] = [
    { year: '2013', title: t('timeline.2013.title'), description: t('timeline.2013.description') },
    { year: '2014', title: t('timeline.2014.title'), description: t('timeline.2014.description') },
    { year: '2015', title: t('timeline.2015.title'), description: t('timeline.2015.description') },
    { year: '2016', title: t('timeline.2016.title'), description: t('timeline.2016.description') },
    { year: '2017', title: t('timeline.2017.title'), description: t('timeline.2017.description') },
    { year: '2018', title: t('timeline.2018.title'), description: t('timeline.2018.description') },
    { year: '2019', title: t('timeline.2019.title'), description: t('timeline.2019.description') },
    { year: '2020', title: t('timeline.2020.title'), description: t('timeline.2020.description') },
    { year: '2021', title: t('timeline.2021.title'), description: t('timeline.2021.description') },
    { year: '2022', title: t('timeline.2022.title'), description: t('timeline.2022.description') },
    { year: '2023', title: t('timeline.2023.title'), description: t('timeline.2023.description') },
    { year: '2024', title: t('timeline.2024.title'), description: t('timeline.2024.description') },
    { year: '2025', title: t('timeline.2025.title'), description: t('timeline.2025.description') }

  ];

  useEffect(() => {
    let animationFrameId: number;

    const handleScroll = () => {
      if (animationFrameId) cancelAnimationFrame(animationFrameId);

      animationFrameId = requestAnimationFrame(() => {
        if (!containerRef.current || !timelineRef.current) return;

        const timeline = timelineRef.current;
        const viewportHeight = window.innerHeight;
        const viewportMiddle = viewportHeight / 2;

        const yearElements = timeline.querySelectorAll('.year-marker');
        let activeYearIndex = 0;
        let progress = 0;

        yearElements.forEach((el, index) => {
          const rect = el.getBoundingClientRect();
          const markerMiddle = rect.top + rect.height / 2;

          if (markerMiddle <= viewportMiddle) {
            activeYearIndex = index;
            const nextMarker = yearElements[index + 1];
            if (nextMarker) {
              const nextRect = nextMarker.getBoundingClientRect();
              const segmentProgress = (viewportMiddle - markerMiddle) / (nextRect.top + nextRect.height / 2 - markerMiddle);
              progress = (index + Math.min(1, Math.max(0, segmentProgress))) / (yearElements.length - 1);
            } else {
              progress = 1;
            }
          }
        });

        setScrollProgress(progress);
        setActiveYear(timelineEvents[activeYearIndex].year);
      });
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial run

    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (animationFrameId) cancelAnimationFrame(animationFrameId);
    };
  }, [timelineEvents]);

  return (
    <div ref={containerRef} className="relative min-h-[150vh]">
      <div className="max-w-7xl mx-auto">
        <div className="relative grid grid-cols-4 md:grid-cols-10">
          {/* Left column with vertical line */}
          <div className="col-span-1 md:col-span-3 relative">
            <div className="absolute top-0 right-4 md:right-12 w-1 md:w-1.5 h-full bg-white/80 rounded-full pointer-events-none">
              <div 
                className="absolute top-0 left-0 w-full rounded-full origin-top transition-transform duration-300 ease-out bg-gradient-to-b from-[#A42D53] via-[#C14B6E] to-[#E85D50]"
                style={{ 
                  height: '100%',
                  transform: `scaleY(${scrollProgress})`
                }}
              />
            </div>

            <div className="sticky top-1/2 -translate-y-1/2 pr-8 md:pr-24 z-10">
              <div className="text-right">
                <div className="text-3xl md:text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary-purple">
                  {activeYear}
                </div>
              </div>
            </div>
          </div>

          {/* Right column with events */}
          <div ref={timelineRef} className="col-span-3 md:col-span-7 relative pl-4 md:pl-8">
            <div className="relative">
              {timelineEvents.map((event, index) => (
                <div
                  key={event.year}
                  className="year-marker mb-[15vh] last:mb-0" // 👈 reduced from 30vh to 15vh
                >
                  <RevealOnScroll animation="fade" delay={0}> {/* 👈 removed delay */}
                    <div className="relative">
                      <div className={`transform transition-all duration-500 ${
                        activeYear === event.year 
                          ? 'translate-x-0 opacity-100'
                          : 'translate-x-4 md:translate-x-8 opacity-50'
                      }`}>
                        <div className="backdrop-blur-md bg-white/10 rounded-2xl md:rounded-3xl p-4 md:p-8 border border-white/20 hover:shadow-xl transition-all duration-300">
                          <h3 className="text-lg md:text-2xl font-bold text-text-primary mb-2 md:mb-4">
                            {event.title}
                          </h3>
                          <p className="text-base md:text-lg leading-relaxed">
                            {event.description}
                          </p>
                        </div>
                      </div>
                    </div>
                  </RevealOnScroll>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
