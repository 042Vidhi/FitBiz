import React from 'react';
import Sidebar from '../components/Sidebar';
import PeopleIcon from '@mui/icons-material/People';
import ServiceCard from '../components/ServiceCard';

function Dashboard() {
  // Create an array of items (you can replace this with your actual data)
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
      title: "Yoga Fundamentals",
      serviceImg: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcREWjICzwAw7L9kQUaB-c1xU2PgBIUeIkt7Uw&usqp=CAU",
      trainerName: "Jane Smith",
      avatarUrl: "https://i.pinimg.com/736x/ae/fb/32/aefb32e7f7812102cf2e5756169b13db.jpg",
      reviews: "4.5/5",
      serviceType: "Yoga"
    },
    {
      title: "Mindfulness Meditation",
      serviceImg: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQijiLZ3whlxhxqUk0N2-zXSC3NwM7hljPKgw&usqp=CAU",
      trainerName: "Alice Johnson",
      avatarUrl: "https://i.pinimg.com/736x/ae/fb/32/aefb32e7f7812102cf2e5756169b13db.jpg",
      reviews: "4.2/5",
      serviceType: "Meditation"
    },
    {
      title: "Advanced Yoga Techniques",
      serviceImg: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcREWjICzwAw7L9kQUaB-c1xU2PgBIUeIkt7Uw&usqp=CAU",
      trainerName: "Michael Brown",
      avatarUrl: "https://i.pinimg.com/736x/ae/fb/32/aefb32e7f7812102cf2e5756169b13db.jpg",
      reviews: "4.8/5",
      serviceType: "Yoga"
    },
    {
      title: "Tai Chi for Stress Relief",
      serviceImg: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQijiLZ3whlxhxqUk0N2-zXSC3NwM7hljPKgw&usqp=CAU",
      trainerName: "Sarah Lee",
      avatarUrl: "https://i.pinimg.com/736x/ae/fb/32/aefb32e7f7812102cf2e5756169b13db.jpg",
      reviews: "4.3/5",
      serviceType: "Meditation"
    },
    {
      title: "Pilates for Core Strength",
      serviceImg: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcREWjICzwAw7L9kQUaB-c1xU2PgBIUeIkt7Uw&usqp=CAU",
      trainerName: "David Wilson",
      avatarUrl: "https://i.pinimg.com/736x/ae/fb/32/aefb32e7f7812102cf2e5756169b13db.jpg",
      reviews: "4.6/5",
      serviceType: "Yoga"
    },
    {
      title: "Breathing Techniques Workshop",
      serviceImg: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQijiLZ3whlxhxqUk0N2-zXSC3NwM7hljPKgw&usqp=CAU",
      trainerName: "Emily Adams",
      avatarUrl: "https://i.pinimg.com/736x/ae/fb/32/aefb32e7f7812102cf2e5756169b13db.jpg",
      reviews: "4.4/5",
      serviceType: "Meditation"
    },
    {
      title: "Hatha Yoga for Flexibility",
      serviceImg: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcREWjICzwAw7L9kQUaB-c1xU2PgBIUeIkt7Uw&usqp=CAU",
      trainerName: "Robert Taylor",
      avatarUrl: "https://i.pinimg.com/736x/ae/fb/32/aefb32e7f7812102cf2e5756169b13db.jpg",
      reviews: "4.7/5",
      serviceType: "Yoga"
    },
    {
      title: "Chakra Balancing Meditation",
      serviceImg: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQijiLZ3whlxhxqUk0N2-zXSC3NwM7hljPKgw&usqp=CAU",
      trainerName: "Olivia White",
      avatarUrl: "https://i.pinimg.com/736x/ae/fb/32/aefb32e7f7812102cf2e5756169b13db.jpg",
      reviews: "4.9/5",
      serviceType: "Meditation"
    },
    {
      title: "Power Yoga Intensive",
      serviceImg: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcREWjICzwAw7L9kQUaB-c1xU2PgBIUeIkt7Uw&usqp=CAU",
      trainerName: "William Green",
      avatarUrl: "https://i.pinimg.com/736x/ae/fb/32/aefb32e7f7812102cf2e5756169b13db.jpg",
      reviews: "4.7/5",
      serviceType: "Yoga"
    }
  ];
  

  

  return (
    <div className='flex'>
      <aside class="h-screen sticky top-0">
        <Sidebar />
       </aside>
      <main className='bg-slate-200 py-7 px-2 w-full md:pl-4 lg:pl-8 flex flex-wrap overflow-y-scroll'>
      {services.map((service, index) => (
        <ServiceCard service={service} index={index} />
      ))}

      </main>
    </div>
  );
}

export default Dashboard;
