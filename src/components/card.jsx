import Image from "next/image";
import Link from "next/link";

export const Card = ({ title, images, year, id }) => {
  return (
    <Link
      href={`/${id}`}
      className="rounded-lg shadow-lg overflow-hidden cursor-pointer"
    >
      <Image
        src={images}
        alt="image"
        width={600}
        height={400}
        className="w-full object-cover"
      ></Image>
      <div className="px-6 py-4">
        <h1 className="mb-2 text-xl font-bold">{title}</h1>
        <p className="text-sm text-gray-600">{year}</p>
      </div>
    </Link>
  );
};
