import React from 'react';
import TestimonialHero from '../components/TestimonialHero';
import Stats from '../components/Stats';
import Mission from '../components/Mission';
import MentorGrid from '../components/MentorGrid';
import SecondaryCTA from '../components/SecondaryCTA';

function About  () {
  return (
    <div className="animate-in fade-in duration-700 bg-white">
      <TestimonialHero />
      <Stats />
      <Mission />
      <MentorGrid />
      <SecondaryCTA />
    </div>
  );
};

export default About;