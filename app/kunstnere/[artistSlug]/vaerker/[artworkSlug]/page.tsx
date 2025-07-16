import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";
import dynamic from "next/dynamic";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";

const ARModelViewer = dynamic(() => import("@/components/ar-model-viewer"), {
  ssr: !!false,
});

export default async function ArtworkDetailPage({
  params,
}: {
  params: Promise<{ artistSlug: string; artworkSlug: string }>;
}) {
  const { artistSlug, artworkSlug } = await params;

  const data = await fetch(
    `${process.env.API_BASE_URL}/artists/${artistSlug}/artworks/${artworkSlug}`
  );
  const artwork = await data.json();

  const artist = await fetch(
    `${process.env.API_BASE_URL}/artists/${artistSlug}`
  );
  const artistData = await artist.json();

  return (
    <div className="pb-32">
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
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbLink
                href={`/artists/${artistSlug}/artworks/${artworkSlug}`}
              >
                {artwork.title}
              </BreadcrumbLink>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </div>
      <div className=" py-12">
        <div className="mx-auto max-w-7xl flex justify-between items-center">
          <div className="mx-auto max-w-2xl lg:mx-0">
            <p className="text-base/7 font-semibold text-neutral-600">
              <Link href={`/kunstnere/${artistSlug}`}>
                {artistData.alias ||
                  artistData.first_name + " " + artistData.last_name}
              </Link>
            </p>
            <h2 className="mt-2 text-5xl font-medium tracking-tight text-neutral-900 sm:text-7xl">
              {artwork.title}
            </h2>
            <p className="mt-8 text-pretty text-lg font-medium text-neutral-500 sm:text-xl/8">
              Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui
              lorem cupidatat commodo. Elit sunt amet fugiat veniam occaecat
              fugiat.
            </p>
          </div>
          <div className="mt-8 flex justify-end">
            <Link href={`/kunstnere/${artistSlug}`}>
              <Image
                src={artistData.profile_image_url}
                alt={artistData.alias}
                width={100}
                height={100}
                className="rounded-md grayscale hover:grayscale-0 transition-all duration-300"
              />
            </Link>
          </div>
        </div>
      </div>
      {/* <div className="prose">
        <h1>{artwork.title}</h1>
        <p>
          by{" "}
          {artwork.artist.alias ||
            artwork.artist.first_name + " " + artwork.artist.last_name}
        </p>
        <p>{artwork.title}</p>
        <p>{artwork.description}</p>
        <p>{artwork.image}</p>
      </div> */}

      <div className="mx-auto mt-6 max-w-2xl sm:px-6 lg:grid lg:max-w-7xl lg:grid-cols-3 lg:gap-8 lg:px-8">
        <Image
          src={artwork.primary_image_url}
          alt={artwork.title}
          width={300}
          height={300}
          className="row-span-2 aspect-[3/4] size-full rounded-lg object-cover max-lg:hidden"
        />
        <Image
          src={artwork.primary_image_url}
          alt={artwork.title}
          width={300}
          height={300}
          className="col-start-2 aspect-[3/2] size-full rounded-lg object-cover max-lg:hidden"
        />
        <Image
          src={artwork.primary_image_url}
          alt={artwork.title}
          width={300}
          height={300}
          className="col-start-2 row-start-2 aspect-[3/2] size-full rounded-lg object-cover max-lg:hidden"
        />
        <div className="row-span-2 aspect-[4/5] size-full object-cover sm:rounded-lg lg:aspect-[3/4] relative bg-neutral-50 shadow-inner">
          <ARModelViewer
            src="/assets/models/simple-plane-front-back.glb"
            textureUrl={artwork.primary_image_url}
            scale={`${artwork.width / 100} 0.5 ${artwork.height / 100}`}
            showArButton={false}
          />
          <div className="absolute bottom-0 left-0 right-0 p-6 flex justify-center">
            <Button asChild>
              <Link
                href={`/kunstnere/${artistSlug}/vaerker/${artworkSlug}/preview`}
                className="no-underline"
              >
                Se i 3D
              </Link>
            </Button>
          </div>
        </div>
        {/* <img
          src="https://tailwindcss.com/plus-assets/img/ecommerce-images/product-page-02-tertiary-product-shot-01.jpg"
          alt="Model wearing plain black basic tee."
          class="col-start-2 aspect-[3/2] size-full rounded-lg object-cover max-lg:hidden"
        />
        <img
          src="https://tailwindcss.com/plus-assets/img/ecommerce-images/product-page-02-tertiary-product-shot-02.jpg"
          alt="Model wearing plain gray basic tee."
          class="col-start-2 row-start-2 aspect-[3/2] size-full rounded-lg object-cover max-lg:hidden"
        />
        <img
          src="https://tailwindcss.com/plus-assets/img/ecommerce-images/product-page-02-featured-product-shot.jpg"
          alt="Model wearing plain white basic tee."
          class="row-span-2 aspect-[4/5] size-full object-cover sm:rounded-lg lg:aspect-[3/4]"
        /> */}
      </div>
    </div>
  );
}
