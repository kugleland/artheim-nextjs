"use client";

import "@google/model-viewer";
import { useEffect, useRef } from "react";

type ModelViewerProps = {
  src: string;
  alt?: string;
  ar?: boolean;
  autoRotate?: boolean;
  cameraControls?: boolean;
  arModes?: string;
  poster?: string;
  interactionPrompt?: string;
  className?: string;
  height?: string;
  textureUrl?: string;
};

export default function ARModelViewer({
  src,
  alt = "3D model",
  ar = true,
  autoRotate = true,
  cameraControls = true,
  arModes = "scene-viewer webxr quick-look",
  poster,
  interactionPrompt = "none",
  textureUrl = "",
  className = "w-full h-full relative",
}: ModelViewerProps) {
  const viewerRef = useRef<any>(null); // eslint-disable-line @typescript-eslint/no-explicit-any

  useEffect(() => {
    const modelViewer = viewerRef.current;
    if (!modelViewer) return;

    modelViewer.doubleSided = false;

    const onLoad = () => {
      requestAnimationFrame(async () => {
        const materials = modelViewer.model?.materials;
        if (!materials || materials.length === 0) return;

        const mainMaterial = materials[0];

        // Set texture on front (main material)
        const texture = await modelViewer.createTexture(textureUrl);
        mainMaterial.pbrMetallicRoughness.baseColorTexture?.setTexture(texture);

        // Set white color on "back" material if available
        if (materials.length > 1) {
          const backMaterial = materials[1];
          backMaterial.pbrMetallicRoughness.setBaseColorFactor([1, 1, 1, 1]); // white RGBA
        } else {
          // Only one material: make double-sided and fallback to white color
          //mainMaterial.doubleSided = true;
          // Optional: override baseColorFactor (or not, if texture is enough)
          // mainMaterial.pbrMetallicRoughness.setBaseColorFactor([1, 1, 1, 1])
        }

        mainMaterial.setDoubleSided(false);
      });
    };

    modelViewer.addEventListener("load", onLoad);
    return () => {
      modelViewer.removeEventListener("load", onLoad);
    };
  }, [textureUrl]);

  return (
    // <model-viewer
    //   src={src}
    //   alt={alt}
    //   ar={ar}
    //   auto-rotate={autoRotate}
    //   camera-controls={cameraControls}
    //   ar-modes={arModes}
    //   poster={poster}
    //   interaction-prompt={interactionPrompt}
    //   style={{ width: "100%", height }}
    //   className={className}
    // />
    <model-viewer
      ref={viewerRef}
      src={src}
      alt={alt}
      ar={ar}
      auto-rotate={autoRotate}
      camera-controls={cameraControls}
      ar-modes={arModes}
      poster={poster}
      interaction-prompt={interactionPrompt}
      ar-placement="wall"
      touch-action="pan-y"
      orientation="0 1.5 0"
      ar-scale="fixed"
      scale="0.5 1 1"
      xr-environment
      id="artViewer"
      style={{ width: "100%", height: "500px" }}
      className={className}
    >
      {/* <div className="controls absolute bottom-0 right-0 bg-neutral-500 p-1">
        <button slot="ar-button" className="ar-button">
          View in your space
        </button>
      </div> */}
    </model-viewer>
  );
}
