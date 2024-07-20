import Image from "next/image";

export const Card = ({ title, images, year }) => {
  return (
    <div className="rounded-lg shadow-lg overflow-hidden">
      <Image src={images} alt="image" width={600} height={400}></Image>
      <div className="px-6 py-4">
        <h1 className="mb-2 text-xl font-bold">{title}</h1>
        <p className="text-sm text-gray-600">{year}</p>
      </div>
    </div>
  );
};
