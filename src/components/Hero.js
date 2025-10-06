import Image from "next/image";

const Hero = () => {
  return (
    <section className="w-full overflow-hidden mt-2">
      <Image
        src="/Section.png"
        alt="Hero Image"
        width={1912}
        height={538}
        />
    </section>
  );
};

export default Hero;