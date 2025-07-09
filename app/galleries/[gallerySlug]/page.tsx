export default function GalleryDetailPage({
  params,
}: {
  params: { gallerySlug: string };
}) {
  return (
    <div>
      <h1>Gallery: {params.gallerySlug}</h1>
    </div>
  );
}
