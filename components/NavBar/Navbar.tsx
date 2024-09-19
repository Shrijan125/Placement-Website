'use client';
import Image from 'next/image';
import Button from '../Button/Button';
import { useRouter } from 'next/navigation';
export default function Navbar() {
  const navItems = [
    'Home',
    'Placement Highlights',
    'For Recruiters',
    'For Students',
    'Student Activities',
  ];

  const router = useRouter();
  return (
    <main className="flex flex-col">
      <div className="flex flex-row items-center justify-between px-8 pt-5">
        <div className="flex flex-row gap-6 items-center">
          <div className="h-28 w-28 object-cover relative">
            <Image
              alt="institute-logo"
              src={'/images/IIIT_VADODARA_LOGO.png'}
              fill
            ></Image>
          </div>
          <div className="whitespace-nowrap flex flex-col">
            <h1 className="text-[30px] font-[600] font-lato">
              Indian Institute of Information Technology Vadodara
            </h1>
            <h2 className="text-[24px] font-[500] font-lato">
              Training and Placement Cell
            </h2>
          </div>
        </div>
        <Button
          text={'Contact Us!'}
          handleClick={() => {
            router.push('/contact');
          }}
        ></Button>
      </div>
      <nav className="bg-primarycolor h-12 mt-5">
        <ul className="flex gap-8  items-center justify-center h-full">
          {navItems.map((element, index) => {
            console.log(element);
            return (
              <li
                className="text-white  text-lg hover:cursor-pointer select-none transition-colors hover:text-gray-300 duration-150 ease-in-out"
                key={index}
              >
                {element}
              </li>
            );
          })}
        </ul>
      </nav>
    </main>
  );
}
