import CloseSVG from "@/assets/svgs/CloseSVG";
import Image, { ImageProps } from "next/image";
import {
  Dispatch,
  MouseEvent,
  SetStateAction,
  useCallback,
  useEffect,
} from "react";
import ExperiencePhotosCarouselModalCard from "./ExperiencePhotosCarouselModalCard";
import { IExperiencePhotoData } from "./ExperiencePhoto";

export interface IFocusedPhoto extends ImageProps {}

interface IExperiencePhotosCarouselModal {
  isOpen: boolean;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
  focusedPhoto: IExperiencePhotoData;
  allCarouselPhotos: IExperiencePhotoData[];
  setFocusedPhoto: Dispatch<SetStateAction<IExperiencePhotoData | null>>;
}

export default function ExperiencePhotosCarouselModal(
  props: IExperiencePhotosCarouselModal
) {
  const { isOpen, setIsOpen } = props;

  const closeModal = useCallback(() => {
    setIsOpen(false);
  }, [setIsOpen]);

  const handleOnClickBackdrop = useCallback(() => {
    closeModal();
  }, [closeModal]);

  const handleOnClickModalContent = useCallback(
    (e: MouseEvent<HTMLButtonElement>) => {
      e.stopPropagation();
    },
    []
  );

  const handleOnClickClose = useCallback(() => {
    closeModal();
  }, [closeModal]);

  const closeOnPressEscape = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        closeModal();
      }
    },
    [closeModal]
  );

  useEffect(() => {
    document.body.style.overflow = "hidden";

    return () => {
      document.body.addEventListener("keydown", closeOnPressEscape);
    };
  }, [isOpen, closeOnPressEscape]);

  useEffect(() => {
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  if (!isOpen) {
    return <></>;
  }

  return (
    <button
      onClick={handleOnClickBackdrop}
      className="flex items-end justify-center lg:items-center fixed top-0 right-20 bottom-0 left-0 w-screen h-screen z-50 bg-opacity-50 bg-white dark:bg-opacity-50 dark:bg-black">
      <button
        onClick={handleOnClickModalContent}
        className="flex flex-col p-5 pt-2 lg:pt-5 relative rounded-lg w-[100%] h-[85%] lg:w-[70%] lg:h-[98%] bg-white dark:bg-black">
        <div className="mb-2 flex flex-row justify-center lg:hidden w-full">
          <div className="h-[6px] w-10 rounded-full bg-gray-300 dark:bg-gray-800" />
        </div>

        <button
          onClick={handleOnClickClose}
          className="hidden lg:block absolute top-3 right-3 opacity-80 transition-transform duration-500 hover:scale-[1.35] hover:opacity-100">
          <CloseSVG
            width={24}
            height={24}
            fill="white"
            stroke="white"
            strokeWidth={2}
            className="stroke-black dark:stroke-white"
          />
        </button>

        {props.focusedPhoto.photo.src && (
          <div className="flex flex-col items-center w-full rounded-lg h-full">
            <div className="h-[80%] rounded-lg">
              <Image
                src={props.focusedPhoto.photo.src}
                alt={props.focusedPhoto.photo.alt}
                sizes="100vw"
                width={0}
                height={0}
                style={{ width: "auto", height: "100%", borderRadius: 8 }}
                placeholder="blur"
                blurDataURL="/image-placeholder.png"
              />
            </div>

            <div className="py-1">
              <span className="text-black dark:text-white">
                {props.focusedPhoto.title}
              </span>
            </div>
          </div>
        )}

        <div className="flex flex-row items-center justify-center absolute right-0 bottom-3 left-0 w-full bg-transparent">
          {props.allCarouselPhotos.map((carouselPhoto) => (
            <ExperiencePhotosCarouselModalCard
              key={`src:${carouselPhoto.photo.src}-title:${carouselPhoto.title}`}
              carouselPhoto={carouselPhoto}
              focusedPhoto={props.focusedPhoto}
              setFocusedPhoto={props.setFocusedPhoto}
            />
          ))}
        </div>
      </button>
    </button>
  );
}
