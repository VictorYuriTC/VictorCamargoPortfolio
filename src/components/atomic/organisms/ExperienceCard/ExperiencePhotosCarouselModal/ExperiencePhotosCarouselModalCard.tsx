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
      className={`flex flex-row justify-center items-center flex-shrink-0 transition duration-700 h-[88px] rounded-lg mr-8 bg-gray-100 dark:bg-gray-900 ${
        isCurrentFocusedPhoto
          ? "opacity-100 scale-110 p-0"
          : "opacity-50 scale-100 p-1"
      }`}>
      <Image
        src={carouselPhoto.photo.src}
        alt={carouselPhoto.photo.alt}
        sizes="100vw"
        width={0}
        height={0}
        style={{
          width: "auto",
          height: "100%",
          borderRadius: 8,
          minWidth: 120,
        }}
      />
    </button>
  );
}
