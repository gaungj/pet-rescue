import { prisma } from "@/utils/prisma";
import { Header } from "@/components/header";
import { Card } from "@/components/card";
import { PrismaClient } from "@prisma/client";
import Image from "next/image";

export default async function Home() {
  // const prisma = new PrismaClient();
  const pets = await prisma.pets.findMany();
  // console.log(pets);

  return (
    <main className="text-xl font-semibold">
      <Header />

      <div className="grid grid-cols-2 gap-4 max-w-md mx-auto mt-4 md:max-w-2xl md:grid-cols-3">
        {pets.map((pet) => {
          return (
            <div key={pet.id} pet={pet}>
              <Card></Card>
            </div>
          );
        })}
      </div>
    </main>
  );
}
