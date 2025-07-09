export default async function ArtworkIndexPage({
  params,
}: {
  params: { artistSlug: string };
}) {
  const { artistSlug } = await params;
  return (
    <div>
      <h1>Artwork Index: {artistSlug}</h1>
    </div>
  );
}
