import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import Image from "next/image";
import Link from "next/link";

type Artist = {
  id: string;
  alias: string;
  first_name: string;
  last_name: string;
  slug: string;
  profile_image_url: string;
};

export default async function Artists() {
  const data = await fetch(
    `${process.env.API_BASE_URL}/artists?page=1&limit=100`
  );
  const artists = await data.json();

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
              <BreadcrumbLink href="/kunstnere">Kunstnere</BreadcrumbLink>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </div>

      <div className=" py-12">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto max-w-2xl lg:mx-0">
            <p className="text-base/7 font-semibold text-neutral-600">AR-T</p>
            <h2 className="mt-2 text-5xl font-semibold tracking-tight text-neutral-900 sm:text-7xl">
              Kunstnere
            </h2>
            <p className="mt-8 text-pretty text-lg font-medium text-neutral-500 sm:text-xl/8">
              Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui
              lorem cupidatat commodo. Elit sunt amet fugiat veniam occaecat
              fugiat.
            </p>
          </div>
        </div>
      </div>

      <div className="relative mt-8">
        <div className="relative -mb-6 w-full overflow-x-auto pb-6">
          <ul
            role="list"
            className="mx-4 inline-flex space-x-8 sm:mx-6 lg:mx-0 lg:grid lg:grid-cols-4 lg:gap-x-8 lg:space-x-0"
          >
            {artists.data.map((artist: Artist) => (
              <li
                key={artist.id}
                className="inline-flex w-64 flex-col text-center lg:w-auto"
              >
                <div className="group relative">
                  <Image
                    src={artist.profile_image_url}
                    alt={artist.alias}
                    width={300}
                    height={300}
                    className="aspect-square w-full rounded-md bg-gray-200 object-cover group-hover:opacity-75 transition-all duration-300"
                  />
                  <div className="mt-6">
                    <p className="text-sm text-gray-500">ART</p>
                    <h3 className="mt-1 font-semibold text-gray-900">
                      <Link href={`/kunstnere/${artist.slug}`}>
                        <span className="absolute inset-0"></span>
                        {artist.alias ||
                          artist.first_name + " " + artist.last_name}
                      </Link>
                    </h3>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
