import AboutList from "./AboutList";

export default function AboutSection() {
  return (
    <section className="flex flex-col gap-10 text-center">
      <span className="flex flex-col gap-3">
        <h2 className="poppins-bold text-primary text-6xl">About</h2>
        <p className="text-2xl">
          Here are the reasons why you should use React
        </p>
      </span>

      <AboutList />
    </section>
  );
}
