import { Button } from "@/components/ui/button";
import Link from "next/link";
import dynamic from "next/dynamic";

const ARModelViewer = dynamic(() => import("@/components/ar-model-viewer"), {
  ssr: !!false,
});
export default function Home() {
  return (
    <div>
      <div>
        <div className="flex flex-col border-b border-gray-200 lg:border-0">
          {/* <nav aria-label="Offers" className="order-last lg:order-first">
            <div className="mx-auto max-w-7xl lg:px-8">
              <ul
                role="list"
                className="grid grid-cols-1 divide-y divide-gray-200 lg:grid-cols-3 lg:divide-x lg:divide-y-0"
              >
                <li className="flex flex-col">
                  <a
                    href="#"
                    className="relative flex flex-1 flex-col justify-center bg-white px-4 py-6 text-center focus:z-10"
                  >
                    <p className="text-sm text-gray-500">Download the app</p>
                    <p className="font-semibold text-gray-900">
                      Get an exclusive $5 off code
                    </p>
                  </a>
                </li>
                <li className="flex flex-col">
                  <a
                    href="#"
                    className="relative flex flex-1 flex-col justify-center bg-white px-4 py-6 text-center focus:z-10"
                  >
                    <p className="text-sm text-gray-500">
                      Return when you're ready
                    </p>
                    <p className="font-semibold text-gray-900">
                      60 days of free returns
                    </p>
                  </a>
                </li>
                <li className="flex flex-col">
                  <a
                    href="#"
                    className="relative flex flex-1 flex-col justify-center bg-white px-4 py-6 text-center focus:z-10"
                  >
                    <p className="text-sm text-gray-500">
                      Sign up for our newsletter
                    </p>
                    <p className="font-semibold text-gray-900">
                      15% off your first order
                    </p>
                  </a>
                </li>
              </ul>
            </div>
          </nav> */}

          <div className="relative">
            <div
              aria-hidden="true"
              className="absolute hidden h-full w-1/2 bg-neutral-50 lg:block"
            ></div>
            <div className="relative bg-gray-100 lg:bg-transparent">
              <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:grid lg:grid-cols-2 lg:px-12">
                <div className="mx-auto max-w-2xl py-24 lg:max-w-none lg:py-64">
                  <div className="lg:pr-16">
                    <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl xl:text-7xl">
                      AR-T
                    </h1>
                    <p className="mt-4 text-xl text-gray-600">
                      AR-T er en platform, der gør det muligt at se kunst som
                      aldrig før.
                    </p>
                    <div className="mt-6">
                      <Button asChild variant="default" size="lg">
                        <Link href="/artists">Se kunstnere</Link>
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="h-48 w-full sm:h-64 lg:absolute lg:top-0 lg:right-0 lg:h-full lg:w-1/2 flex justify-center items-center">
              <ARModelViewer
                src="/assets/models/simple-plane-front-back.glb"
                textureUrl="/images/wishing-well-50x100.jpg"
                scale="0.5 1 1"
              />
            </div>
          </div>
        </div>
      </div>
      {/* <div className="pt-16 pb-80 sm:pt-24 sm:pb-40 lg:pt-40 lg:pb-48 overflow-hidden">
        <div className="relative mx-auto max-w-7xl px-4 sm:static sm:px-6 lg:px-8">
          <div className="sm:max-w-lg">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
              AR-T
            </h1>
            <p className="mt-4 text-xl text-gray-500">
              AR-T er en platform, der gør det muligt at se kunst som aldrig
              før.
            </p>
            <p className="mt-4 text-xl text-gray-500">
              AR-T er en platform, der gør det muligt at se kunst som aldrig
              før.
            </p>
          </div>
          <div>
            <div className="mt-10 py-24">
              <div
                aria-hidden="true"
                className="pointer-events-none lg:absolute lg:inset-y-0 lg:mx-auto lg:w-full lg:max-w-7xl"
              >
                <div className="absolute transform sm:top-0 sm:left-1/2 sm:translate-x-8 lg:top-1/2 lg:left-1/2 lg:translate-x-8 lg:-translate-y-1/2">
                  <div className="flex items-center space-x-6 lg:space-x-8">
                    <div className="grid shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
                      <div className="h-64 w-44 overflow-hidden rounded-lg sm:opacity-0 lg:opacity-100">
                        <img
                          src="https://tailwindcss.com/plus-assets/img/ecommerce-images/home-page-03-hero-image-tile-01.jpg"
                          alt=""
                          className="size-full object-cover"
                        />
                      </div>
                      <div className="h-64 w-44 overflow-hidden rounded-lg">
                        <img
                          src="https://tailwindcss.com/plus-assets/img/ecommerce-images/home-page-03-hero-image-tile-02.jpg"
                          alt=""
                          className="size-full object-cover"
                        />
                      </div>
                    </div>
                    <div className="grid shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
                      <div className="h-64 w-44 overflow-hidden rounded-lg">
                        <img
                          src="https://tailwindcss.com/plus-assets/img/ecommerce-images/home-page-03-hero-image-tile-03.jpg"
                          alt=""
                          className="size-full object-cover"
                        />
                      </div>
                      <div className="h-64 w-44 overflow-hidden rounded-lg">
                        <img
                          src="https://tailwindcss.com/plus-assets/img/ecommerce-images/home-page-03-hero-image-tile-04.jpg"
                          alt=""
                          className="size-full object-cover"
                        />
                      </div>
                      <div className="h-64 w-44 overflow-hidden rounded-lg">
                        <img
                          src="https://tailwindcss.com/plus-assets/img/ecommerce-images/home-page-03-hero-image-tile-05.jpg"
                          alt=""
                          className="size-full object-cover"
                        />
                      </div>
                    </div>
                    <div className="grid shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
                      <div className="h-64 w-44 overflow-hidden rounded-lg">
                        <img
                          src="https://tailwindcss.com/plus-assets/img/ecommerce-images/home-page-03-hero-image-tile-06.jpg"
                          alt=""
                          className="size-full object-cover"
                        />
                      </div>
                      <div className="h-64 w-44 overflow-hidden rounded-lg">
                        <img
                          src="https://tailwindcss.com/plus-assets/img/ecommerce-images/home-page-03-hero-image-tile-07.jpg"
                          alt=""
                          className="size-full object-cover"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <Button asChild variant="default" size="lg" className="">
                <Link href="/artists">Se kunstnere</Link>
              </Button>
            </div>
          </div>
        </div>
      </div> */}
    </div>
  );
}
