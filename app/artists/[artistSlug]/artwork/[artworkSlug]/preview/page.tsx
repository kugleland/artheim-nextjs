import dynamic from "next/dynamic";

const ARModelViewer = dynamic(() => import("@/components/ar-model-viewer"), {
  ssr: !!false,
});

export default async function ArtworkPreviewPage({
  params,
}: {
  params: { artistSlug: string; artworkSlug: string };
}) {
  const { artistSlug, artworkSlug } = await params;
  return (
    <div>
      <h1>
        Artwork: {artistSlug} - {artworkSlug}
      </h1>
      <div className="w-full h-full">
        <ARModelViewer
          src="/assets/models/simple-plane.glb"
          textureUrl="/images/wishing-well-50x100.jpg"
        />
      </div>
    </div>
  );
}
