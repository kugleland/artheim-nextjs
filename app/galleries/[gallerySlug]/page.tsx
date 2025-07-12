export default async function GalleryDetailPage({
  params,
}: {
  params: Promise<{ gallerySlug: string }>;
}) {
  const { gallerySlug } = await params;

  return (
    <div>
      <h1>Gallery: {gallerySlug}</h1>
    </div>
  );
}
