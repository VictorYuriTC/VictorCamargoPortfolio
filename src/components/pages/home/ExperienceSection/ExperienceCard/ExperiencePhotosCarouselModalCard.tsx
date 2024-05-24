import Image from "next/image";
import { Dispatch, MouseEvent, SetStateAction, useCallback } from "react";
import { IExperiencePhotoData } from "./ExperiencePhoto";

interface IExperiencePhotosCarouselModalCard {
  carouselPhoto: IExperiencePhotoData;
  focusedPhoto: IExperiencePhotoData;
  setFocusedPhoto: Dispatch<SetStateAction<IExperiencePhotoData | null>>;
}

export default function ExperiencePhotosCarouselModalCard(
  props: IExperiencePhotosCarouselModalCard
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
      className={`flex flex-row justify-center items-center transition duration-700 h-[80px] mr-8 bg-white dark:bg-black ${
        isCurrentFocusedPhoto ? "opacity-100 scale-110" : "opacity-50 scale-100"
      }`}>
      <Image
        src={carouselPhoto.photo.src}
        alt={carouselPhoto.photo.alt}
        sizes="100vw"
        width={0}
        height={0}
        style={{ width: "auto", height: "100%", borderRadius: 8 }}
      />
    </button>
  );
}
