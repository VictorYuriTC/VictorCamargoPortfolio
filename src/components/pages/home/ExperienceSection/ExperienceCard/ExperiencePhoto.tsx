import CameraSVG from "@/assets/svgs/CameraSVG";
import Image, { ImageProps } from "next/image";
import React, { Dispatch, SetStateAction, useCallback } from "react";

export interface IExperiencePhotoData {
  photo: ImageProps;
  type: "photo" | "video";
  title: string;
}

export interface IExperiencePhoto {
  photoData: IExperiencePhotoData;
  setIsExperiencePhotosCarouselModalOpen: Dispatch<SetStateAction<boolean>>;
  setFocusedPhoto: Dispatch<SetStateAction<IExperiencePhotoData | null>>;
}

export default function ExperiencePhoto(props: IExperiencePhoto) {
  const { setIsExperiencePhotosCarouselModalOpen, setFocusedPhoto, photoData } =
    props;

  const handleOnClickPhoto = useCallback(() => {
    setIsExperiencePhotosCarouselModalOpen(true);
    setFocusedPhoto(photoData);
  }, [setIsExperiencePhotosCarouselModalOpen, setFocusedPhoto, photoData]);

  return (
    <button
      onClick={handleOnClickPhoto}
      className="group/experience-photo-button relative rounded-lg overflow-hidden mr-8 transition-transform duration-700 h-68 w-36 z-20 opacity-60 border border-gray-200 dark:border-gray-900 hover:opacity-100 hover:scale-105">
      {photoData.type === "photo" ? (
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
        className="rounded w-full h-auto"
        alt={photoData.photo.alt}
        src={photoData.photo.src}
        sizes="100vw"
        width={0}
        height={0}
        placeholder="blur"
        blurDataURL="/image-placeholder.png"
      />
    </button>
  );
}
