import { Button } from "@/components/ui/button";

import Link from "next/link";
import Image from "next/image";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";

export default async function ArtistDetailPage({
  params,
}: {
  params: Promise<{ artistSlug: string }>;
}) {
  const { artistSlug } = await params;

  const data = await fetch(`${process.env.API_BASE_URL}/artists/${artistSlug}`);
  const artist = await data.json();

  console.log(artist);

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
                {artist.alias || artist.first_name + " " + artist.last_name}
              </BreadcrumbLink>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </div>
      <div className=" py-12">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto max-w-2xl lg:mx-0">
            <p className="text-base/7 font-semibold text-neutral-600">AR-T</p>
            <h2 className="mt-2 text-5xl font-semibold tracking-tight text-neutral-900 sm:text-7xl">
              {artist.alias || artist.first_name + " " + artist.last_name}
            </h2>
            <p className="mt-8 text-pretty text-lg font-medium text-neutral-500 sm:text-xl/8">
              Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui
              lorem cupidatat commodo. Elit sunt amet fugiat veniam occaecat
              fugiat.
            </p>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="col-span-1">
          <Image
            src={artist.profile_image_url}
            alt={artist.first_name}
            width={300}
            height={300}
            className="rounded shadow-lg"
          />
        </div>
        <div className="col-span-2">
          <p className="text-sm text-gray-500">{artist.bio}</p>

          <Button asChild>
            <Link
              href={`/artists/${artistSlug}/artworks`}
              className="mt-4 inline-block"
            >
              Se alle værker
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
