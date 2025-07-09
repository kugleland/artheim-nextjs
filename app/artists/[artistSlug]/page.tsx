export default function ArtistDetailPage({
  params,
}: {
  params: { artistSlug: string };
}) {
  return (
    <div>
      <h1>Artist: {params.artistSlug}</h1>
    </div>
  );
}
