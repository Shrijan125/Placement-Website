import Image from 'next/image';
import SecondaryButton from '../Button/secondarButton';
export default function AboutUs() {
  return (
    <div className="w-screen max-w-screen-lg h-[600px] mt-10 flex justify-center gap-5 flex-row  mx-auto rounded-3xl bg-slate-50">
      <div className="relative h-full w-[45%] object-contain">
        <Image
          src={'/images/about_us.jpg'}
          alt="about us"
          fill
          className="object-cover rounded-l-3xl"
        ></Image>
      </div>
      <div className="w-[55%] pt-10 pr-5">
        <h1 className="text-4xl font-bold tracking-wide">About Us</h1>
        <div className=" text-2xl pt-5 text-justify">
          <p>
            Established as an Institute of National Importance, Indian Institute
            of Information Technology was founded in the year 2013 and currently
            we are embarking our ninth Placement Season. We thrive to emerge as
            an educational hub which develops well rounded individuals with
            sound technical and professional competence of the highest degree.
          </p>
        </div>
        <div className=" mt-5">
          <SecondaryButton></SecondaryButton>
        </div>
      </div>
    </div>
  );
}
