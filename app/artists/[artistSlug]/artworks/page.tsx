import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Image from "next/image";
import Link from "next/link";

export default async function ArtworkIndexPage({
  params,
}: {
  params: Promise<{ artistSlug: string }>;
}) {
  const { artistSlug } = await params;

  const data = await fetch(
    `https://app.artheim.test/api/artists/${artistSlug}/artworks`
  );
  const artworks = await data.json();

  console.log(artworks);

  return (
    <div>
      <h1>Artwork Index: {artistSlug}</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-6">
        {artworks.map((artwork: any) => (
          <div key={artwork.id} className="mb-4">
            <Card>
              <CardHeader>
                <CardTitle>{artwork.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <Link
                  href={`/artists/${artistSlug}/artworks/${artwork.id}`}
                  className="text-lg font-bold"
                >
                  <Image
                    src={artwork.primary_image_url}
                    alt={artwork.title}
                    width={300}
                    height={300}
                    className="rounded shadow-lg"
                  />
                </Link>
              </CardContent>
              <CardFooter>
                <Link
                  href={`/artists/${artistSlug}/artworks/${artwork.id}`}
                  className="text-lg font-bold"
                >
                  Se mere
                </Link>
              </CardFooter>
            </Card>
          </div>
        ))}
      </div>
    </div>
  );
}
