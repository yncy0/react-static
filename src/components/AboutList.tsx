export default function AboutList() {
  type Items = {
    title: string;
    description: string;
  };

  const items: Items[] = [
    {
      title: "1. Composable",
      description:
        "Write a reusable code known as “Components” to be used across entire codebase. Enncapsulate complex logics.",
    },
    {
      title: "2. Declarative",
      description:
        "Declare your code based on what you want. It provides excellent developer experience and avoids verbosity.",
    },
    {
      title: "3. Huge Ecosystem",
      description:
        "React has a large of ecosystems where you plug and play dependencies based on what you need. Be careful it might bloat!",
    },
  ];

  return(
    <div className="flex flex-col gap-y-10 items-center">
      {items.map((item) => (
        <div className="border-2 border-black py-14 gap-y-14 px-20 w-[1000px] rounded-md">
          <h3 className="text-primary poppins-bold text-4xl">{ item.title }</h3>
          <p className="text-xl line-clamp-3">{ item.description }</p>
        </div>
      ))}
    </div>
  )
}
