export default function ArtworkDetailPage({
  params,
}: {
  params: { artistSlug: string; artworkSlug: string };
}) {
  return (
    <div>
      <h1>
        Artwork: {params.artistSlug} - {params.artworkSlug}
      </h1>
    </div>
  );
}
