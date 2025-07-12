"use client";

import "@google/model-viewer";
import { useEffect, useRef } from "react";

type ModelViewerProps = {
  src: string;
  alt?: string;
  ar?: boolean;
  autoRotate?: boolean;
  autoRotateDelay?: number;
  cameraControls?: boolean;
  arModes?: string;
  poster?: string;
  interactionPrompt?: string;
  className?: string;
  height?: string;
  textureUrl?: string;
  scale?: string;
};

export default function ARModelViewer({
  src,
  alt = "3D model",
  ar = true,
  autoRotate = false,
  autoRotateDelay = 500,
  cameraControls = true,
  arModes = "scene-viewer webxr quick-look",
  poster,
  interactionPrompt = "none",
  textureUrl = "",
  className = "w-full h-full relative",
  scale = "1 1 1",
}: ModelViewerProps) {
  const viewerRef = useRef<any>(null); // eslint-disable-line @typescript-eslint/no-explicit-any

  useEffect(() => {
    const modelViewer = viewerRef.current;
    if (!modelViewer) return;

    let angle = 0;
    let direction = 1;

    function animateOscillation() {
      // Update angle
      angle += direction * 0.1; // degrees per frame

      // Reverse direction at limits
      if (angle >= 20 || angle <= -20) {
        direction *= -1;
      }

      // Convert to radians and set camera orbit
      const rad = (angle * Math.PI) / 180;
      modelViewer.cameraOrbit = `${rad}rad 90deg 4m`; // azimuth, elevation, distance

      requestAnimationFrame(animateOscillation);
    }

    const onLoad = () => {
      requestAnimationFrame(async () => {
        const materials = modelViewer.model?.materials;
        if (!materials || materials.length === 0) return;

        const front = materials[0];

        const frontTexture = await modelViewer.createTexture(textureUrl);

        front.pbrMetallicRoughness.baseColorTexture?.setTexture(frontTexture);

        if (materials.length > 1) {
          const backMaterial = materials[1];
          backMaterial.pbrMetallicRoughness.setBaseColorFactor([1, 1, 1, 1]); // white RGBA
        }
      });

      animateOscillation();
    };

    modelViewer.addEventListener("load", onLoad);
    return () => {
      modelViewer.removeEventListener("load", onLoad);
    };
  }, [textureUrl]);

  return (
    <model-viewer
      ref={viewerRef}
      src={src}
      alt={alt}
      ar={ar}
      auto-rotate={autoRotate}
      auto-rotate-delay={autoRotateDelay}
      camera-controls={cameraControls}
      ar-modes={arModes}
      poster={poster}
      interaction-prompt={interactionPrompt}
      ar-placement="wall"
      touch-action="pan-y"
      orientation="0 1.57 0"
      ar-scale="fixed"
      scale={scale}
      xr-environment
      id="artViewer"
      style={{ width: "100%", height: "500px", maxHeight: "100%" }}
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
