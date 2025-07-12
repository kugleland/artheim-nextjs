import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";
import dynamic from "next/dynamic";

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
    `https://app.artheim.test/api/artists/${artistSlug}/artworks/${artworkSlug}`
  );
  const artwork = await data.json();

  return (
    <div>
      <div className="prose">
        <h1>{artwork.title}</h1>
        <p>
          by{" "}
          {artwork.artist.alias ||
            artwork.artist.first_name + " " + artwork.artist.last_name}
        </p>
        <p>{artwork.title}</p>
        <p>{artwork.description}</p>
        <p>{artwork.image}</p>
      </div>

      <div className="mx-auto mt-6 max-w-2xl sm:px-6 lg:grid lg:max-w-7xl lg:grid-cols-3 lg:gap-8 lg:px-8">
        {/* <img
          src="https://tailwindcss.com/plus-assets/img/ecommerce-images/product-page-02-secondary-product-shot.jpg"
          alt="Two each of gray, white, and black shirts laying flat."
          class="row-span-2 aspect-[3/4] size-full rounded-lg object-cover max-lg:hidden"
        /> */}
        <Image
          src={artwork.primary_image_url}
          alt={artwork.title}
          width={300}
          height={300}
          className="row-span-2 aspect-[3/4] size-full rounded-lg object-contain max-lg:hidden bg-neutral-50 shadow-inner p-6"
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
        {/* <Image
          src={artwork.primary_image_url}
          alt={artwork.title}
          width={300}
          height={300}
          className="row-span-2 aspect-[4/5] size-full object-cover sm:rounded-lg lg:aspect-[3/4]"
        /> */}
        <div className="row-span-2 aspect-[4/5] size-full object-cover sm:rounded-lg lg:aspect-[3/4]">
          <ARModelViewer
            src="/assets/models/simple-plane-front-back.glb"
            textureUrl={artwork.primary_image_url}
            scale={`${artwork.width / 100} 0.5 ${artwork.height / 100}`}
          />
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

      <Button asChild>
        <Link
          href={`/artists/${artistSlug}/artworks/${artworkSlug}/preview`}
          className="no-underline"
        >
          Se i 3D
        </Link>
      </Button>
    </div>
  );
}
