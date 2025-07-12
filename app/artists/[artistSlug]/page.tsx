import { Button } from "@/components/ui/button";
import {
  Card,
  CardFooter,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Link from "next/link";
import Image from "next/image";

export default async function ArtistDetailPage({
  params,
}: {
  params: Promise<{ artistSlug: string }>;
}) {
  const { artistSlug } = await params;

  const data = await fetch(
    `https://app.artheim.test/api/artists/${artistSlug}`
  );
  const artist = await data.json();

  console.log(artist);

  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="col-span-1">
          <Image
            src={artist.profile_image_url}
            alt={artist.first_name}
            width={300}
            height={300}
            className="rounded shadow-lg"
          />
        </div>
        <div className="col-span-2">
          <h1 className="text-2xl font-bold">
            {artist.alias || artist.first_name + " " + artist.last_name}
          </h1>
          <p className="text-sm text-gray-500">{artist.bio}</p>

          <Button asChild>
            <Link
              href={`/artists/${artistSlug}/artworks`}
              className="mt-4 inline-block"
            >
              Se alle værker
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
