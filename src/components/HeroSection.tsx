import { SiReact } from "@icons-pack/react-simple-icons";

export default function HeroSection() {
  return (
    <section className="text-center flex flex-col gap-10 items-center">
      <SiReact color='default' size={256}/>

      <span className="flex flex-col gap-3">
        <h1 className="poppins-bold text-primary text-6xl">
          Ship website using React
        </h1>
        <p className="text-2xl">Learn React right now!</p>
      </span>

      <div className="flex flex-row gap-5">
        <button className="bg-primary text-white p-3 poppins-medium rounded-md">Let's get started</button>
        <button className="text-black p-3 poppins-medium rounded-md border-2 border-black">Documentation</button>
      </div>
    </section>
  );
}
