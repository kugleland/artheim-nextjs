import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import Image from "next/image";

export default async function GalleryDetailPage({
  params,
}: {
  params: Promise<{ gallerySlug: string }>;
}) {
  const { gallerySlug } = await params;
  const data = await fetch(
    `${process.env.API_BASE_URL}/galleries/${gallerySlug}`
  );
  const gallery = await data.json();

  console.log(gallery);

  return (
    <div>
      <div className="max-w-7xl mx-auto py-3">
        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink href="/">Hjem</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbLink href="/gallerier">Gallerier</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbLink href={`/gallerier/${gallerySlug}`}>
                {gallery.name}
              </BreadcrumbLink>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </div>
      <div>
        {gallery.banner_url && (
          <Image
            src={gallery.banner_url}
            alt={gallery.name}
            width={1000}
            height={250}
            className="w-full h-64 rounded"
            style={{ objectFit: "cover" }}
          />
        )}
      </div>
      <div className=" py-12">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto max-w-4xl lg:mx-0">
            <p className="text-base/7 font-semibold text-neutral-600">
              {gallery.name}
            </p>
            <h2 className="mt-2 text-5xl font-semibold tracking-tight text-neutral-900 sm:text-7xl">
              {gallery.name}
            </h2>
            <div className="prose mt-3">
              <p>{gallery.description}</p>
            </div>
          </div>
        </div>
      </div>
      <div className="max-w-7xl mx-auto py-3">
        {gallery.logo_url && (
          <Image
            src={gallery.logo_url}
            alt={gallery.name}
            width={150}
            height={150}
          />
        )}
      </div>
      <div className="bg-white">
        <div className="mx-auto max-w-2xl px-4 py-24 sm:px-6 sm:py-32 lg:max-w-7xl lg:px-8">
          <div className="grid grid-cols-1 items-center gap-x-8 gap-y-16 lg:grid-cols-2">
            <div>
              <div className="border-b border-gray-200 pb-10">
                <h2 className="font-medium text-gray-500">Lorem ipsum</h2>
                <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                  {gallery.name}
                </p>
              </div>

              <dl className="mt-10 space-y-10">
                <div>
                  <dt className="text-sm font-medium text-gray-900">
                    Lorem ipsum
                  </dt>
                  <dd className="mt-3 text-sm text-gray-500">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua.
                  </dd>
                </div>
                <div>
                  <dt className="text-sm font-medium text-gray-900">
                    Lorem ipsum
                  </dt>
                  <dd className="mt-3 text-sm text-gray-500">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                    do eiusmod tempor incididunt ut.
                  </dd>
                </div>
                <div>
                  <dt className="text-sm font-medium text-gray-900">
                    Lorem ipsum
                  </dt>
                  <dd className="mt-3 text-sm text-gray-500">
                    Lorem ipsum dolor. Sed do eiusmod tempor incididunt ut
                    labore et dolore magna aliqua.
                  </dd>
                </div>
                <div>
                  <dt className="text-sm font-medium text-gray-900">
                    Long spout
                  </dt>
                  <dd className="mt-3 text-sm text-gray-500">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua.
                  </dd>
                </div>
              </dl>
            </div>

            {gallery.images_urls.length > 0 && (
              <div>
                <Image
                  src={gallery.images_urls[0]}
                  alt={gallery.name}
                  width={1000}
                  height={250}
                  className="aspect-square w-full rounded-lg bg-gray-100 object-cover"
                />
                <div className="mt-4 grid grid-cols-2 gap-4 sm:mt-6 sm:gap-6 lg:mt-8 lg:gap-8">
                  <Image
                    src={gallery.images_urls[1]}
                    alt={gallery.name}
                    width={1000}
                    height={250}
                    className="aspect-square w-full rounded-lg bg-gray-100 object-cover"
                  />
                  <Image
                    src={gallery.images_urls[2]}
                    alt={gallery.name}
                    width={1000}
                    height={250}
                    className="aspect-square w-full rounded-lg bg-gray-100 object-cover"
                  />
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
