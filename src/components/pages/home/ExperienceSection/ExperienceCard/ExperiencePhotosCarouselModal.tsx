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

export interface IFocusedPhoto extends ImageProps {}

interface IExperiencePhotosCarouselModal {
  isOpen: boolean;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
  focusedPhoto: ImageProps;
  allCarouselPhotos: IFocusedPhoto[];
  setFocusedPhoto: Dispatch<SetStateAction<ImageProps>>;
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
      className="flex items-center justify-center fixed top-0 right-20 bottom-0 left-0 w-screen h-screen z-50 bg-opacity-50 bg-white dark:bg-opacity-50 dark:bg-black">
      <button
        onClick={handleOnClickModalContent}
        className="flex flex-col p-5 relative rounded-lg w-[50%] h-[90%] bg-white dark:bg-black">
        <button
          onClick={handleOnClickClose}
          className="absolute top-3 right-3 opacity-80 transition-transform duration-500 hover:scale-[1.35] hover:opacity-100">
          <CloseSVG
            width={24}
            height={24}
            fill="white"
            stroke="white"
            strokeWidth={2}
            className="stroke-black dark:stroke-white"
          />
        </button>

        {props.focusedPhoto.src && (
          <div className="flex justify-center w-full rounded-lg h-full">
            <div className="h-[80%] rounded-lg">
              <Image
                src={props.focusedPhoto.src}
                alt={props.focusedPhoto.alt}
                sizes="100vw"
                width={0}
                height={0}
                style={{ width: "100%", height: "100%", borderRadius: 8 }}
              />
            </div>
          </div>
        )}

        <div className="absolute right-0 bottom-3 left-0 flex items-center justify-center w-full bg-transparent">
          {props.allCarouselPhotos.map((carouselPhoto) => (
            <ExperiencePhotosCarouselModalCard
              key={`src:${carouselPhoto.src}`}
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
