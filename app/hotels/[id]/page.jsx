import Header1 from '@/components/Header1';
import Image from 'next/image';
import Link from 'next/link';
import { cookies } from 'next/headers';
import connectDB from '@/db';
import Hotel from '@/models/hotel-model';

async function getHotel(id) {
  await connectDB();
  const hotel = await Hotel.findById(id);
  return hotel;
}

export default async function SingleHotel({ params }) {
  const { id } = await params;
  const hotel = await getHotel(id);
  const cookieStore =  await cookies();
  const auth = cookieStore.get('user');

  if (!hotel) {
    return <div>Hotel not found</div>;
  }

  return (
    <>
      <Header1 />
      <div className='w-7/12 mx-auto my-10'>
        <Image 
          src={hotel.banner || "https://www.homestratosphere.com/wp-content/uploads/2014/05/shutterstock_30411274.jpg"}
          alt={hotel.name}
          width={2000}
          height={2000} 
          className='h-large-box w-full my-5'
        />
        <div className=''>
          <h3 className='text-3xl font-bold'>{hotel.name}</h3>
          <p className='text-xl my-5 text-justify'>{hotel.description}</p>
          <button className='w-60 h-14 rounded-lg bg-blue-400 text-lg'>
            Price: ${hotel.price}
          </button>
          <p className='text-3xl font-bold my-5'>Facilities:</p>
          <ul className='flex flex-wrap gap-4'>
            {hotel.facilities.map((facility, index) => (
              <li key={index} className="flex items-center">
                <Image 
                  src={facility.img.trim()}
                  alt={facility.name}
                  width={24}
                  height={24}
                  className="mr-2"
                />
                <span>{facility.name}</span>
              </li>
            ))}
          </ul>
          {
            auth ? (
              <Link href={`/payment/${hotel._id}`}>
                <button className='w-60 h-14 rounded-lg bg-red-400 my-5 text-lg'>
                  Book Now
                </button>
              </Link>
            ) : 
            (<span className='text-2xl'>
              Please <Link href={'/login'} className='text-blue-500'>Login</Link> to get Offers
            </span>)
          }
        </div>
      </div>
    </>
  );
}
