import Image from "next/image";
import { Dispatch, SetStateAction, useCallback } from "react";
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
      className={`flex flex-row justify-center items-center transition-opacity duration-700 h-[80px] mr-8 ${
        isCurrentFocusedPhoto ? "opacity-100" : "opacity-50"
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
