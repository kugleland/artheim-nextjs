import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import Image from "next/image";
import Link from "next/link";

export default async function ArtworkIndexPage({
  params,
}: {
  params: Promise<{ artistSlug: string }>;
}) {
  const { artistSlug } = await params;

  const data = await fetch(
    `${process.env.API_BASE_URL}/artists/${artistSlug}/artworks`
  );
  const artworks = await data.json();
  const artist = await fetch(
    `${process.env.API_BASE_URL}/artists/${artistSlug}`
  );
  const artistData = await artist.json();

  type Artwork = {
    id: string;
    title: string;
    primary_image_url: string;
    price: number;
    price_formatted: string;
    medium: string;
    year: string;
  };

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
              <BreadcrumbLink href="/artists">Kunstnere</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbLink href={`/artists/${artistSlug}`}>
                {artistData.alias ||
                  artistData.first_name + " " + artistData.last_name}
              </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbLink href={`/artists/${artistSlug}/artworks`}>
                Værker
              </BreadcrumbLink>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </div>
      <div className=" py-12">
        <div className="mx-auto max-w-7xl flex justify-between items-center">
          <div className="mx-auto max-w-2xl lg:mx-0">
            <p className="text-base/7 font-semibold text-neutral-600">AR-T</p>
            <h2 className="mt-2 text-5xl font-medium tracking-tight text-neutral-900 sm:text-7xl">
              Værker af{" "}
              <span className="font-black">
                {artistData.alias ||
                  artistData.first_name + " " + artistData.last_name}
              </span>
            </h2>
            <p className="mt-8 text-pretty text-lg font-medium text-neutral-500 sm:text-xl/8">
              Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui
              lorem cupidatat commodo. Elit sunt amet fugiat veniam occaecat
              fugiat.
            </p>
          </div>
          <div className="mt-8 flex justify-end">
            <Link href={`/artists/${artistSlug}`}>
              <Image
                src={artistData.profile_image_url}
                alt={artistData.alias}
                width={150}
                height={150}
                className="rounded-md grayscale hover:grayscale-0 transition-all duration-300"
              />
            </Link>
          </div>
        </div>
      </div>
      <div className="">
        <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
          <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
            {artworks.data.map((artwork: Artwork) => (
              <div key={artwork.id} className="group relative">
                <Image
                  src={artwork.primary_image_url}
                  alt={artwork.title}
                  width={300}
                  height={300}
                  className="aspect-square w-full rounded-md  object-contain p-3 group-hover:opacity-75 lg:aspect-auto lg:h-80 transition-all duration-300"
                />
                <div className="mt-4 flex justify-between">
                  <div>
                    <h3 className="text-sm text-gray-700">
                      <Link
                        href={`/artists/${artistSlug}/artworks/${artwork.id}`}
                      >
                        <span
                          aria-hidden="true"
                          className="absolute inset-0"
                        ></span>
                        {artwork.title}
                      </Link>
                    </h3>
                    <p className="mt-1 text-sm text-gray-500">{artwork.year}</p>
                  </div>
                  <p className="text-sm font-medium text-gray-900">
                    {artwork.price_formatted ?? "Kontakt for pris"}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
