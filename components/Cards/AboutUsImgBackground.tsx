import Image from 'next/image';
export default function AboutUsImgBg() {
  return (
    <div className="w-screen relative max-w-screen-lg h-[600px] mt-10 flex justify-center gap-5 flex-row  mx-auto rounded-3xl bg-slate-50">
      <Image
        src={'/images/about_us.jpg'}
        alt="about us"
        fill
        className="object-cover rounded-3xl"
      ></Image>
      <div className="absolute w-full h-full bg-black bg-opacity-50 rounded-3xl"></div>
      <div className="flex flex-col h-full gap-5 z-10">
        <p className="text-white text-justify text-xl ">
          Established as an Institute of National Importance, Indian Institute
          of Information Technology was founded in the year 2013 and currently
          we are embarking our Ninth Placement Season. We thrive to emerge as an
          educational hub which develops well rounded individuals with sound
          technical and professional competence of the highest degree.
        </p>
        <p className="text-white text-justify text-xl">
          The Training and Placement Cell, IIIT Vadodara facilitates the campus
          placement process for the passing out students from the Institute
          besides collaborating with leading organizations and institutes in
          setting up of internship and training program. It liaises with various
          industrial establishments and corporate houses which conduct campus
          interviews and select graduate and post-graduate students from the
          available disciplines. The Training & Placement Office provides the
          infra-structural facilities to conduct group discussions, tests and
          interviews besides catering to other logistics.
        </p>
        <p className="text-white text-justify text-xl">
          The placement season runs through the course of the year commencing
          from the first week of August to April. Job offers, dates of
          interviews, selection of candidates etc. are announced through the
          Training & Placement Office. The Placement Office is assisted by a
          committee comprising representatives of students from the
          under-graduate and post-graduate engineering streams. The committee
          evolves a broad policy framework every year besides a set of rules
          which are inviolable.
        </p>
        <p className="text-white text-justify text-xl">
          Right from contacting companies to managing all logistics of arranging
          for tests, pre placement talks and conducting final interviews, the
          Training and Placement Cell officials and volunteers provide their
          best possible assistance to the recruiters for the smooth functioning
          of the entire process.
        </p>
      </div>
    </div>
  );
}
