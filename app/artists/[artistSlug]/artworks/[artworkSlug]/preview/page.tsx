import dynamic from "next/dynamic";

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
    `https://app.ar-t.indev.dk/api/artists/${artistSlug}/artworks/${artworkSlug}`
  );
  const artwork = await data.json();

  return (
    <div>
      <h1>{artwork.title}</h1>
      <p>
        by{" "}
        {artwork.artist.alias ||
          artwork.artist.first_name + " " + artwork.artist.last_name}
      </p>
      <p>{artwork.description}</p>
      <p>{artwork.image}</p>
      <p>
        Dimensions: {artwork.width} x {artwork.height} cm
      </p>
      <p>Image: {artwork.primary_image_url}</p>
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
