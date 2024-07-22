import Image from "next/image";
import Link from "next/link";

export const Card = ({ pet }) => {
  return (
    <Link
      href={`/${pet.id}`}
      className="rounded-lg shadow-lg overflow-hidden cursor-pointer"
    >
      <Image
        src="https://placehold.co/600x400/png"
        alt="image"
        width={600}
        height={400}
        className="w-full object-cover"
      ></Image>
      <div className="px-6 py-4">
        <h1 className="mb-2 text-xl font-bold">{pet.name}</h1>
        <p className="text-sm text-gray-600">{pet.description}</p>
      </div>
    </Link>
  );
};
