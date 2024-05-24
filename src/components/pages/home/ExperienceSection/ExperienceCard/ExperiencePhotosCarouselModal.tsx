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
      <div className="flex flex-col p-5 relative rounded-lg w-[100%] h-[100%] lg:h-[100%] bg-white dark:bg-gray-950">
        {props.focusedPhoto.photo.src && (
          <div className="flex flex-col items-center justify-center w-full rounded-lg h-[80%] lg:h-[90%]">
            <div className="h-[80%] rounded-lg">
              <button
                onClick={handleOnClickClose}
                className="block absolute top-3 right-3 opacity-80 transition-transform duration-500 hover:scale-[1.35] hover:opacity-100">
                <CloseSVG
                  width={24}
                  height={24}
                  fill="white"
                  stroke="white"
                  strokeWidth={2}
                  className="stroke-black dark:stroke-white"
                />
              </button>

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
              <span className="text-black dark:text-gray-400">
                {props.focusedPhoto.title}
              </span>
            </div>
          </div>
        )}

        <button
          onClick={handleOnClickModalContent}
          className="flex flex-row items-center justify-center absolute right-0 bottom-0 left-0 pt-5 pb-20 lg:pb-5 bg-transparent border-t bg-white border-gray-300 dark:border-gray-800 dark:bg-black">
          {props.allCarouselPhotos.map((carouselPhoto) => (
            <ExperiencePhotosCarouselModalCard
              key={`src:${carouselPhoto.photo.src}-title:${carouselPhoto.title}`}
              carouselPhoto={carouselPhoto}
              focusedPhoto={props.focusedPhoto}
              setFocusedPhoto={props.setFocusedPhoto}
            />
          ))}
        </button>
      </div>
    </button>
  );
}
