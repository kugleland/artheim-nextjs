import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

interface Gallery {
  id: number;
  name: string;
  slug: string;
  logo_url: string;
  description: string;
}

const truncate = (input: string, length: number) => {
  if (input.length > length) {
    return input.substring(0, length) + "...";
  }
  return input;
};

export default async function Galleries() {
  const data = await fetch(
    `${process.env.API_BASE_URL}/galleries?page=1&limit=100`
  );
  const galleries = await data.json();

  return (
    <div>
      <div className="max-w-7xl mx-auto py-3">
        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink href="/">Hjem</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbLink href="/gallerier">Gallerier</BreadcrumbLink>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </div>
      <div className=" py-12">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto max-w-2xl lg:mx-0">
            <p className="text-base/7 font-semibold text-neutral-600">
              Gallerier
            </p>
            <h2 className="mt-2 text-5xl font-semibold tracking-tight text-neutral-900 sm:text-7xl">
              Gallerier
            </h2>
            <p className="mt-8 text-pretty text-lg font-medium text-neutral-500 sm:text-xl/8">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>
        </div>
      </div>
      <div className="max-w-7xl mx-auto py-3">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {galleries.length > 0 ? (
            galleries.map((gallery: Gallery) => (
              <div
                key={gallery.id}
                className="border border-gray-200 rounded-md p-4 flex flex-col items-center justify-center space-y-4 hover:shadow-md transition-all duration-300 hover:scale-105"
              >
                <h2 className="text-lg font-semibold">{gallery.name}</h2>
                {gallery.logo_url ? (
                  <Image
                    src={gallery.logo_url}
                    alt={gallery.name}
                    width={150}
                    height={150}
                    className="rounded-full border border-neutral-100"
                  />
                ) : (
                  <div className="w-15 h-15 bg-gray-200 rounded-full" />
                )}
                <p>{truncate(gallery.description, 100)}</p>
                <Link href={`/gallerier/${gallery.slug}`}>
                  <Button>Se galleri</Button>
                </Link>
              </div>
            ))
          ) : (
            <div>Ingen gallerier fundet</div>
          )}
        </div>
      </div>
    </div>
  );
}
