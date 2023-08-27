import React from 'react'
import { Link, useParams } from 'react-router-dom';
import TrainerCard from '../components/TrainerCard';
import ServiceCard from '../components/ServiceCard';

function TrainerProfile() {
    const trainers = [
        {
            id: '1',
            trainerName: 'John Doe',
      avatarUrl: 'https://i.pinimg.com/736x/ae/fb/32/aefb32e7f7812102cf2e5756169b13db.jpg',
      title: 'Yoga Expert',
      location: 'Delhi, India',
      reviews: '4.5/5',
      about: 'I am a certified yoga instructor with 5 years of experience. I have worked with clients of all ages and fitness levels. I specialize in Hatha Yoga and Vinyasa Yoga.',
      charge: '450/hr'
        }
    ]
    const services = [
        {
            title: "Meditation for Beginners",
            serviceImg: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQijiLZ3whlxhxqUk0N2-zXSC3NwM7hljPKgw&usqp=CAU",
            trainerName: "John Doe",
            avatarUrl: "https://i.pinimg.com/736x/ae/fb/32/aefb32e7f7812102cf2e5756169b13db.jpg",
            reviews: "4/5",
            serviceType: "Meditation"
          },
          {
            title: "Meditation for Beginners",
            serviceImg: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQijiLZ3whlxhxqUk0N2-zXSC3NwM7hljPKgw&usqp=CAU",
            trainerName: "John Doe",
            avatarUrl: "https://i.pinimg.com/736x/ae/fb/32/aefb32e7f7812102cf2e5756169b13db.jpg",
            reviews: "4/5",
            serviceType: "Meditation"
          }
        ]


    const trainer = trainers[0]
    
    return (
      <div className='flex lg:p-12 min-h-screen bg-slate-200'>
        <TrainerCard trainer={trainer} />
        <div className='flex flex-col gap-4 ml-4'>
        <div>
            <h2 className='text-2xl font-semibold text-slate-900 '>About</h2>
            <p className='text-slate-800 ml-2'>{trainer.about}</p>
        </div>
        <div>
          <h2 className='text-2xl font-semibold text-slate-900'>Services</h2>
          <div className='grid md:grid-cols-3 '>
          {services.map((service, index) => (
            <ServiceCard service={service} index={index} />
            ))}
          </div>
        </div>
        </div>
      </div>
  )
}

export default TrainerProfile