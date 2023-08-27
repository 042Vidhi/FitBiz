import React from 'react'
import Sidebar from '../components/Sidebar'
import TrainerCard from '../components/TrainerCard';


function Trainers() {

  const trainers = [
    { 
      trainerName: 'John Doe',
      avatarUrl: 'https://i.pinimg.com/736x/ae/fb/32/aefb32e7f7812102cf2e5756169b13db.jpg',
      title: 'Yoga Expert',
      location: 'Delhi, India',
      reviews: '4.5/5',
      about: 'I am a certified yoga instructor with 5 years of experience. I have worked with clients of all ages and fitness levels. I specialize in Hatha Yoga and Vinyasa Yoga.',
      charge: '450/hr'
    },
    { 
      trainerName: 'Alice Smith',
      avatarUrl: 'https://i.pinimg.com/736x/ae/fb/32/aefb32e7f7812102cf2e5756169b13db.jpg',
      title: 'Personal Trainer, Fitness Coach',
      location: 'Los Angeles, USA',
      reviews: '4.7/5',
      about: 'I have a passion for fitness and helping people achieve their health goals. I offer personalized training programs tailored to each client\'s needs.',
      charge: '600/hr'
    },
    { 
      trainerName: 'Emma Johnson',
      avatarUrl: 'https://i.pinimg.com/736x/ae/fb/32/aefb32e7f7812102cf2e5756169b13db.jpg',
      title: 'Pilates Instructor',
      location: 'London, UK',
      reviews: '4.8/5',
      about: 'I specialize in Pilates and have trained clients from beginners to advanced. My focus is on building core strength, flexibility, and overall well-being.',
      charge: '500/hr'
    },
    { 
      trainerName: 'Michael Brown',
      avatarUrl: 'https://i.pinimg.com/736x/ae/fb/32/aefb32e7f7812102cf2e5756169b13db.jpg',
      title: 'CrossFit Coach',
      location: 'New York, USA',
      reviews: '4.6/5',
      about: 'I am a certified CrossFit coach with a passion for functional fitness. I offer high-intensity training sessions to help clients achieve their fitness goals.',
      charge: '550/hr'
    },
    { 
      trainerName: 'Sophia Lee',
      avatarUrl: 'https://i.pinimg.com/736x/ae/fb/32/aefb32e7f7812102cf2e5756169b13db.jpg',
      title: 'Martial Arts Instructor',
      location: 'Tokyo, Japan',
      reviews: '4.9/5',
      about: 'I have a black belt in martial arts and teach a variety of disciplines, including Karate and Jiu-Jitsu. My goal is to empower clients with self-defense skills.',
      charge: '700/hr'
    },
    { 
      trainerName: 'David Wilson',
      avatarUrl: 'https://i.pinimg.com/736x/ae/fb/32/aefb32e7f7812102cf2e5756169b13db.jpg',
      title: 'Nutritionist',
      location: 'Sydney, Australia',
      reviews: '4.4/5',
      about: 'I am a registered dietitian with expertise in nutrition and dietary planning. I help clients achieve their health goals through personalized nutrition plans.',
      charge: '400/hr'
    }
  ];
  



  return (
<div className='flex'>
      <aside class="h-screen sticky top-0">
        <Sidebar />
       </aside>
      <main className='bg-slate-200 py-7 px-2 w-full md:pl-4 lg:pl-8 flex flex-wrap overflow-y-scroll'>
      {trainers.map((trainer, index) => (
        <TrainerCard  trainer={trainer} index={index} />
      ))}

      </main>
    </div>
  )
};

export default Trainers