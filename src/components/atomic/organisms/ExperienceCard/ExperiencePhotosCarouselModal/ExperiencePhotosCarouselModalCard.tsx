import Image from "next/image";
import { Dispatch, MouseEvent, SetStateAction, useCallback } from "react";
import { IExperiencePhotoData } from "../ExperiencePhoto";

interface IExperiencePhotosCarouselModalCard {
  carouselPhoto: IExperiencePhotoData;
  focusedPhoto: IExperiencePhotoData;
  setFocusedPhoto: Dispatch<SetStateAction<IExperiencePhotoData | null>>;
}

export default function ExperiencePhotosCarouselModalCard(
  props: IExperiencePhotosCarouselModalCard,
) {
  const { setFocusedPhoto, carouselPhoto } = props;

  const isCurrentFocusedPhoto =
    props.focusedPhoto.title === props.carouselPhoto.title;

  const handleOnClickCarouselCard = useCallback(() => {
    setFocusedPhoto(carouselPhoto);
  }, [setFocusedPhoto, carouselPhoto]);

  return (
    <button
      onClick={handleOnClickCarouselCard}
      className={`flex flex-row justify-center items-center transition duration-500 rounded-lg mr-3 bg-gray-100 dark:bg-gray-900 flex-shrink-0 overflow-hidden ${
        isCurrentFocusedPhoto
          ? "opacity-100 ring-2 ring-purple-500"
          : "opacity-60 hover:opacity-80"
      }`}>
      <Image
        src={carouselPhoto.photo.src}
        alt={carouselPhoto.photo.alt}
        sizes="96px"
        width={0}
        height={0}
        className="h-20 md:h-24 w-auto rounded"
      />
    </button>
  );
}
