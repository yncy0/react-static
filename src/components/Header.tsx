import { SiReact } from "@icons-pack/react-simple-icons";

export default function Header() {
  type Items = {
    id: string;
    name: string;
    link: string;
  };

  const items: Items[] = [
    {
      id: "1",
      name: "Home",
      link: "#",
    },
    {
      id: "2",
      name: "About",
      link: "#",
    },
    {
      id: "3",
      name: "Docs",
      link: "#",
    },
  ];

  return (
    <header className="flex flex-row w-screen justify-between items-center top-0 left-0 sticky py-7 px-64 bg-white drop-shadow-lg drop-shadow-primary/50">
      <SiReact color="default" size={48} />
      <nav>
        <ul className="flex flex-row gap-5">
          {items.map((item) => (
            <li className="text-black poppins-regular">
              <a href={item.link}>{item.name}</a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
