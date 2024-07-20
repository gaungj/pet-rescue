import { Header } from "@/components/header";
import { Card } from "@/components/pets-list/card";

export default async function Home() {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_BASE_URL}/top/anime`
  );
  const pets = await response.json();
  // console.log(pets);

  return (
    <main className="text-xl font-semibold">
      <Header />
      <div className="grid grid-cols-1 gap-4 max-w-md mx-auto mt-4 md:max-w-2xl sm:grid-cols-2 md:grid-cols-3">
        {pets.data.map((data) => {
          return (
            <Card
              key={data.mal_id}
              title={data.title}
              images={data.images.webp.image_url}
              year={data.year}
            ></Card>
          );
        })}
      </div>
    </main>
  );
}
