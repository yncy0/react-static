import {
  SiHtml5,
  SiCss,
  SiJavascript,
  SiTailwindcss,
  SiNodedotjs,
  SiNpm,
  SiVite,
  SiGit,
  SiGithub,
  SiGnometerminal,
  SiTypescript,
} from "@icons-pack/react-simple-icons";

export default function PrerequisitesSection() {
  return (
    <section className="flex flex-col text-center gap-14 pb-56">
      <h2 className="poppins-bold text-primary text-6xl">Prerequisites</h2>
      <div className="flex flex-row flex-wrap gap-y-10">
        <SiHtml5 color="default" size={72} className="flex-1 basis-1/5"/>
        <SiCss color="default" size={72} className="flex-1 basis-1/5"/>
        <SiJavascript color="default" size={72} className="flex-1 basis-1/5"/>
        <SiTailwindcss color="default" size={72} className="flex-1 basis-1/5"/>
        <SiNodedotjs color="default" size={72} className="flex-1 basis-1/5"/>
        <SiNpm color="default" size={72} className="flex-1 basis-1/5"/>
        <SiVite color="default" size={72} className="flex-1 basis-1/5"/>
        <SiGit color="default" size={72} className="flex-1 basis-1/5"/>
        <SiGithub color="default" size={72} className="flex-1 basis-1/5"/>
        <SiGnometerminal color="default" size={72} className="flex-1 basis-1/5"/>
        <SiTypescript color="default" size={72} className="flex-1 basis-1/5"/>
      </div>
    </section>
  );
}
