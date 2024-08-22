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

    <>

    <div className='top'>
      <h2 className='project-intro'> They Are Not That Real
      </h2>
    </div>

    <div className='tools-wrapper'>
    <p className='tools'>
        Maya, Blender, ZBrush
    </p>
    </div>
    <div className='gallery-4'>
           <img src='/project/3/Cola.png' ></img>
           <img src='/project/3/Cola2.png'></img>
    </div>
    <Footer/>
    <div className='divider'/>
    </>
  );
}


export function Project4() {
  return (
    <>

<div className='top'>
      <h2 className='project-intro'>Recontextualize Truth: Erasure and Reconstruction
      </h2>
    </div>

    <div className='tools-wrapper'>
    <p className='tools'>
    Whiteout, Dictionary, Camera, Adobe Premiere
    </p>
    </div>

    <div className='text-wrapper'>
      <p className='text'>
      This piece explores the concept of using erasure as a tool to manipulate historical archives. By selectively removing certain elements and recontextualizing them within existing contexts, the work creates new meanings and questions the authenticity and reliability of historical narratives. The process also reveals power dynamics that shape historical archives and challenges the notion of a singular truth. Ultimately, the piece encourages viewers to reflect back on how the meaning is constructed and how it's distorted by power in position.
    </p>
    </div>

    <div className='gallery-4'>
           <img src='/project/4/1.png' ></img>
           <img src='/project/4/2.png'></img>
           <img src='/project/4/3.png' ></img>
           <img src='/project/4/4.png'></img>
    </div>
    
    
    <Footer/>
    <div className='divider'/>
    </>
    
  );
}

export function Project5() {
  return (
    <>

    <div className='top'>
          <h2 className='project-intro'>Data as Life: A Skeuomorphic Exploration of New York City
          </h2>
        </div>
    
        <div className='tools-wrapper'>
        <p className='tools'>
        Threejs, AFrame, npm, Blender, React
        </p>
        </div>
    
        <div className='text-wrapper'>
          <p className='text'>
          his project examines New York City through a macro-scale analysis, utilizing datasets on population, transportation, construction, networking, and more to create a skeuomorphic, interactive 3D model using Three.js and AFrame. Acknowledging potential minor biases in data interpretation, the project seeks to represent the city holistically, rather than from any specific perspective. The resulting online model, presented as a living entity, aims to offer a unique, creative visualization that reflects the diverse and complex character of New York City, allowing viewers to engage with the city's multifaceted nature in an innovative way.
        </p>
        </div>

        <div className="iframe-wrapper">
            <iframe
              src='https://nickel-boggy-roast.glitch.me/'
              width="100%"
              height="500px" 
              style={{ border: 'none' }}
              allowFullScreen
            ></iframe>
          </div>
    
        
        <Footer/>
        <div className='divider'/>
        </>
  );
}

export function Project6() {
  return (
    <>

<div className='top'>
      <h2 className='project-intro'> 
      Immersive Computing That Kinda Redefined Interaction
      </h2>
    </div>

    <div className='tools-wrapper'>
    <p className='tools'>
    Unity, JavaScript, Node.js, Three.js, MaxMsp, MediaPipe, ERMs, Battery, Raspberry Pi, Glove, 3D Printing
    </p>
    </div>

    <div className='text-wrapper'>
      <p className='text'>
      The objective of this project is to investigate a novel approach to interacting with computers, circumventing conventional input devices in favor of three-dimensional input as the primary means of interaction with the digital realm. The customary controllers currently in use rely on one or two-dimensional input data, which provide limited scope for interaction. However, by employing three-dimensional input, the amount of data generated increases significantly, thereby expanding the possibilities for interaction and enabling novel forms of engagement.
      </p>

      <p className='text'>
        The proposed approach involves tracking the virtual position of the user's hand through a webcam, a readily available solution. Additionally, a specially designed glove with haptic feedback facilitates users' interaction with digital content on a physical level, bridging the gap between the digital and physical worlds. The haptic feedback is based on the contact of the object and the color of the contact. Different colors have distinct vibration patterns based on the color frequency. This integration of digital and physical realms has the potential to revolutionize the way we interact with computers, providing a more immersive and intuitive experience for users.
      </p>
    </div>

    <img src='/project/6/flow.png' className='img-wrapper'></img>
    <p className='caption'>Flow Chart</p>

    <div className='divider'></div>


    <img src='/project/6/concept.png' className='img-wrapper'></img>
    <p className='caption'>Haptic Feeback Visualization</p>
    {/* <div className='gallery-4'>
           <img src='/project/6/1.png' ></img>
           <img src='/project/6/2.png'></img>
           <img src='/project/6/newmold.png' ></img>
           <img src='/project/6/flow.png'></img>
    </div> */}
        <div className='divider'></div>
               <img src='/project/6/1.png' className='img-wrapper'></img>
               <p className='caption'>Hand Recognition Using Webcam</p>

               <div className='divider'></div>
               <img src='/project/6/2.png' className='img-wrapper'></img>
               <p className='caption'>Haptic Feedback Glove Prototype</p>
    
    <Footer/>
    <div className='divider'/>
    </>
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






