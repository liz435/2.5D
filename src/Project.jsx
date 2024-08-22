import React from 'react';
import './css/Project.css'
import Footer from './components/Footer';


export function Project1() {
  return (
    <>
    <div className='top'>
      <h2 className='project-intro'>An AudiovisualExperience</h2>
    </div>

    <div className='tools-wrapper'>
    <p className='tools'>
    Unity, Blender, Maya, Ableton, C#
    </p>
    </div>

    <div className='text-wrapper'>
      <p className='text'>
      "23" is an immersive audiovisual experience that allows players to explore a dynamic and engaging virtual world in the unique way. With sound visualization, captivating soundscapes, and intuitive gameplay mechanics, "23" offers a unique gaming experience. One of the key features of "23" is its highly interactive virtual world. Players are able to explore a vast and ever-changing landscape, filled with fascinating creatures, geometric shapes, and hidden secrets. As they journey through the dynamic world, they will encounter a vibrant experience with Yaeji.
      </p>
    </div>

    <div className='gallery-4'>
      <img src='/project/1/2.png' ></img>
      <img src='/project/1/4.png'></img>
      <img src='/project/1/5.png'></img>
      <img src='/project/1/6.png'></img>
    </div>
    <Footer/>
    <div className='divider'/>

    </>
  );
}



export function Project2() {
  return (
    <>
    <div className='top'>
      <h2 className='project-intro'>Life is what happens to you when you are buzy making other plans - John Lenon
      </h2>
    </div>

    <div className='tools-wrapper'>
    <p className='tools'>
    Projector, Arduino, Servo Motors, 3D print parts, Fusion 360, p5.js, Slide Potentiometer, Paper, Portable Light, Light Panel
    </p>
    </div>

    <div className='text-wrapper'>
      <p className='text'>
      Repetition and time are two pervasive themes that merit a comprehensive exploration in this project. Repetition, a ubiquitous force in our lives, manifests itself in routine behaviors and tasks that become so deeply ingrained in our daily habits that they are executed almost involuntarily. Driving, for instance, exemplifies this phenomenon where the same route is traversed so frequently that it can be accomplished without much conscious thought. This automaticity results in a loss of memory trace associated with the act. Conversely, the notion of an eternal waiting room alludes to a state of stasis, where time appears to come to a halt. The endless cycle of waiting, devoid of any discernible progress or change, perpetuates an aura of monotony and stagnation.
    </p>
    </div>

    <video className='video'autoPlay loop muted >
      <source src="/project/2/loop.mp4" type="video/mp4"/>
    </video>

      <div className='divider'/>

    <div className='gallery-4'>
     <img src='/project/2/part1.png' ></img>
      <img src='/project/2/part2.png'></img>
    </div>
    <p className='caption'>3D designed parts in Fushion360 to fit the servo motors.</p>

    <Footer/>
    <div className='divider'/>

    </>
  );
}

export function Project3() {
  return (
    <div>
      <h1 className='project-title'>Projects Page 3 </h1>
      <h3 className='project-intro'>Here are some projects.</h3>
    </div>
  );
}


export function Project4() {
  return (
    <div>
      <h1 className='project-title'>Projects Page 4 </h1>
      <h3 className='project-intro'>Here are some projects.</h3>
    </div>
  );
}

export function Project5() {
  return (
    <div>
      <h1 className='project-title'>Projects Page 5 </h1>
      <h3 className='project-intro'>Here are some projects.</h3>
    </div>
  );
}

export function Project6() {
  return (
    <div>
      <h1 className='project-title'>Projects Page 6</h1>
      <h3 className='project-intro'>Here are some projects.</h3>
    </div>
  );
}

export function Project7() {
  return (
    <div>
      <h1 className='project-title'>Projects Page 7 </h1>
      <h3 className='project-intro'>Here are some projects.</h3>
    </div>
  );
}

export function Project8() {
  return (
    <div>
      <h1 className='project-title'>Projects Page 8 </h1>
      <h3 className='project-intro'>Here are some projects.</h3>
    </div>
  );
}






