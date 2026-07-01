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

  const handleOnClickPhoto = useCallback(
    (e: React.MouseEvent<HTMLButtonElement>) => {
      e.stopPropagation();
      setIsExperiencePhotosCarouselModalOpen(true);
      setFocusedPhoto(photoData);
    },
    [setIsExperiencePhotosCarouselModalOpen, setFocusedPhoto, photoData],
  );

  return (
    <button
      onClick={handleOnClickPhoto}
      className="group/experience-photo-button relative mr-4 flex-shrink-0 overflow-hidden rounded-lg border border-gray-200 opacity-60 transition-all duration-500 hover:opacity-100 dark:border-gray-900 z-20">
      {photoData.type === "photo" ? (
        <div className="absolute inset-0 z-10 flex items-center justify-center">
          <div className="rounded-full bg-black bg-opacity-50 p-2 transition-all duration-500 group-hover/experience-photo-button:bg-opacity-100">
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
        className="h-[150px] w-auto rounded transition-transform duration-500 group-hover/experience-photo-button:scale-110 md:h-[200px]"
        alt={photoData.photo.alt}
        src={photoData.photo.src}
        sizes="(max-width: 768px) 50vw, 33vw"
        width={0}
        height={0}
        placeholder="blur"
        blurDataURL="/image-placeholder.png"
        loading="lazy"
      />
    </button>
  );
}
