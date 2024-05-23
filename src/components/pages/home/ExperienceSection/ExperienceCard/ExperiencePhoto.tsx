import CameraSVG from "@/assets/svgs/CameraSVG";
import Image, { ImageProps } from "next/image";
import React, { Dispatch, SetStateAction } from "react";

export interface IExperiencePhotoData {
  photo: ImageProps;
  type: "photo" | "video";
}

export interface IExperiencePhoto {
  photoData: IExperiencePhotoData;
  setIsExperiencePhotosCarouselModalOpen: Dispatch<SetStateAction<boolean>>;
  setFocusedPhoto: Dispatch<SetStateAction<ImageProps>>;
}

export default function ExperiencePhoto(props: IExperiencePhoto) {
  function handleOnClickPhoto() {
    props.setIsExperiencePhotosCarouselModalOpen(true);
    props.setFocusedPhoto({
      src: props.photoData.photo.src,
      alt: props.photoData.photo.alt,
    });
  }

  return (
    <button
      onClick={handleOnClickPhoto}
      className="group/experience-photo-button relative rounded overflow-hidden mr-8 transition-transform duration-700 h-68 w-36 z-20 opacity-60 hover:opacity-100 hover:scale-105">
      {props.photoData.type === "photo" ? (
        <div className="flex items-center justify-center absolute top-0 right-0 bottom-0 left-0">
          <div className="bg-opacity-50 bg-black p-2 rounded-full group-hover/experience-photo-button:bg-opacity-100">
            <CameraSVG
              width={24}
              height={24}
              fill="transparent"
              stroke="white"
            />
          </div>
        </div>
      ) : null}

      <Image
        className="rounded"
        alt={props.photoData.photo.alt}
        src={props.photoData.photo.src}
        sizes="100vw"
        width={0}
        height={0}
        style={{ width: "100%", height: "auto", borderRadius: 20 }}
        placeholder="blur"
        blurDataURL="/image-placeholder.jpeg"
      />
    </button>
  );
}
