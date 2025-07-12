import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import Link from "next/link";

type Artist = {
  id: string;
  alias: string;
  first_name: string;
  last_name: string;
};

export default async function Artists() {
  const data = await fetch("https://app.ar-t.indev.dk/api/artists");
  const artists = await data.json();

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
              <BreadcrumbLink href="/components">Kunstnere</BreadcrumbLink>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </div>
      <h1>Artists</h1>
      <ul className="list-disc list-inside">
        {artists.data.map((artist: Artist) => (
          <li key={artist.id} className="mb-4">
            <Link href={`/artists/${artist.id}`} className="text-lg font-bold">
              {artist.alias || artist.first_name + " " + artist.last_name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
