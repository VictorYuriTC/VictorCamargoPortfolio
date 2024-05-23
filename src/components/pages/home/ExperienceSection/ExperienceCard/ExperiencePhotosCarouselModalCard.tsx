import Image, { ImageProps } from "next/image";
import { IFocusedPhoto } from "./ExperiencePhotosCarouselModal";
import { Dispatch, MouseEvent, SetStateAction, useCallback } from "react";

interface IExperiencePhotosCarouselModalCard {
  carouselPhoto: IFocusedPhoto;
  focusedPhoto: ImageProps;
  setFocusedPhoto: Dispatch<SetStateAction<ImageProps>>;
}

export default function ExperiencePhotosCarouselModalCard(
  props: IExperiencePhotosCarouselModalCard
) {
  const { setFocusedPhoto, carouselPhoto } = props;

  const isCurrentFocusedPhoto =
    props.focusedPhoto.alt === props.carouselPhoto.alt;

  const handleOnClickCarouselCard = useCallback(
    (e: MouseEvent<HTMLButtonElement>) => {
      setFocusedPhoto(carouselPhoto);
    },
    [setFocusedPhoto, carouselPhoto]
  );

  return (
    <button
      onClick={handleOnClickCarouselCard}
      className={`transition-opacity duration-700 h-[100px] mr-8 opacity-50 ${
        isCurrentFocusedPhoto && "opacity-100"
      }`}>
      <Image
        src={carouselPhoto.src}
        alt={carouselPhoto.alt}
        sizes="100vw"
        width={0}
        height={0}
        style={{ width: "100%", height: "100%", borderRadius: 8 }}
      />
    </button>
  );
}
