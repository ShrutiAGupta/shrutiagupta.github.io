import React from "react";
import Me from "../Home/Me/Me";
const About = () => {
  //   const abt_text = `
  //   <p className='mb-4'>
  //           I'm that tech enthusiast who loves making the digital world a bit more beautiful and a lot more human. As a Computer Science engineer and digital solutions developer based in India, I spend my days turning complex problems into elegant solutions through UI/UX and graphic design. Think of me as a digital artist with a thing for clean code!
  //           </p><p className='mb-4'>
  // Off-screen, I'm probably in the middle of one of those delightfully deep conversations that start with "What if..." and end up lasting for hours. I'm fascinated by moral dilemmas and love how they challenge our perspectives – there's nothing quite like a good discussion that makes you see the world differently!
  // </p><p className='mb-4'>
  // Words are my playground, especially when it comes to poetry. Whether I'm writing verses or performing them, I find pure joy in crafting moments that connect hearts and minds. There's something magical about standing in front of an audience and sharing a piece of your soul through carefully woven words.</p><p className='mb-4'>
  // I'm the kind of person who gets excited about, well, pretty much everything! You might find me in the kitchen experimenting with a new recipe (and yes, sometimes creating entirely new categories of cooking mishaps!), curled up with a good book, or designing yet another organization system (my folders have folders, and I'm not even sorry about it!).</p><p className='mb-4'>
  // At heart, I'm all about bringing people together and creating meaningful connections. Whether we're brainstorming the next big idea or simply sharing stories and laughter, I believe the best things in life happen when different minds and perspectives come together. That's what makes this journey so exciting – every day brings new chances to learn, create, and connect!</p>
  // `

  const abt_text = [
    {
      classes: "mb-4",
      text: `I'm that tech enthusiast who loves making the digital world more beautiful and human. As a Computer Science engineer, I love to transform complex problems into elegant solutions through UI/UX and graphic design. Think of me as a digital artist with a passion for clean code!`,
    },
    {
      classes: "mb-4",
      text: `Off-screen, I dive into delightfully deep conversations that start with "What if..." and challenge our perspectives. Words are my playground, especially in poetry – there's something magical about sharing carefully woven verses with an audience and connecting through emotions and ideas.`,
    },
    {
      classes: "mb-4",
      text: `I'm the kind of person who gets excited about pretty much everything! You might find me experimenting with new recipes (sometimes creating entirely new categories of cooking mishaps!), curled up with a good book, or designing yet another organization system (my folders have folders, and I'm not even sorry about it!).`,
    },
    {
      classes: "mb-4",
      text: `At heart, I believe the best things happen when different minds come together. Whether we're brainstorming the next big idea or sharing stories and laughter, I'm all about creating meaningful connections. That's what makes this journey exciting – every day brings new chances to learn, create, and connect!`,
    },
  ];
  return (
    <div className="container mx-auto px-4 py-8 section-padding">
      <div className="section-title">
        <h2>My Story</h2>
      </div>
        <Me content={abt_text} />
      {/* Your page content */}
    </div>
  );
};

export default About;
