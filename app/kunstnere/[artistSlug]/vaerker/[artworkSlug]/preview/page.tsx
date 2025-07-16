import dynamic from "next/dynamic";
import Link from "next/link";
import Image from "next/image";

const ARModelViewer = dynamic(() => import("@/components/ar-model-viewer"), {
  ssr: !!false,
});

export default async function ArtworkPreviewPage({
  params,
}: {
  params: Promise<{ artistSlug: string; artworkSlug: string }>;
}) {
  const { artistSlug, artworkSlug } = await params;
  const data = await fetch(
    `${process.env.API_BASE_URL}/artists/${artistSlug}/artworks/${artworkSlug}`
  );
  const artwork = await data.json();

  return (
    <div>
      <div className=" py-12">
        <div className="mx-auto max-w-7xl flex justify-between items-center">
          <div className="mx-auto max-w-4xl lg:mx-0">
            <p className="text-base/7 font-semibold text-neutral-600">
              <Link href={`/kunstnere/${artistSlug}`}>
                {artwork.artist.alias ||
                  artwork.artist.first_name + " " + artwork.artist.last_name}
              </Link>
            </p>
            <h2 className="mt-2 text-5xl font-medium tracking-tight text-neutral-900 sm:text-7xl">
              {artwork.title}
            </h2>
          </div>
          <div className="mt-8 flex justify-end">
            <Link href={`/kunstnere/${artistSlug}`}>
              <Image
                src={artwork.artist.profile_image_url}
                alt={artwork.artist.alias}
                width={100}
                height={100}
                className="rounded-md grayscale hover:grayscale-0 transition-all duration-300"
              />
            </Link>
          </div>
        </div>
      </div>
      <div className="w-full h-full bg-neutral-50 rounded-lg shadow-inner my-6 p-6">
        <ARModelViewer
          src="/assets/models/simple-plane-front-back.glb"
          textureUrl={artwork.primary_image_url}
          scale={`${artwork.width / 100} 1 ${artwork.height / 100}`}
        />
      </div>
    </div>
  );
}
