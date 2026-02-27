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
import { IExperiencePhotoData } from "../ExperiencePhoto";

export interface IFocusedPhoto extends ImageProps {}

interface IExperiencePhotosCarouselModal {
  isOpen: boolean;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
  focusedPhoto: IExperiencePhotoData;
  allCarouselPhotos: IExperiencePhotoData[];
  setFocusedPhoto: Dispatch<SetStateAction<IExperiencePhotoData | null>>;
}

export default function ExperiencePhotosCarouselModal(
  props: IExperiencePhotosCarouselModal,
) {
  const {
    isOpen,
    setIsOpen,
    allCarouselPhotos,
    focusedPhoto,
    setFocusedPhoto,
  } = props;

  const closeModal = useCallback(() => {
    setIsOpen(false);
  }, [setIsOpen]);

  const displayPreviousPhoto = useCallback(() => {
    const currentPhotoIndex = allCarouselPhotos.indexOf(focusedPhoto);

    if (currentPhotoIndex === 0) {
      setFocusedPhoto(allCarouselPhotos[allCarouselPhotos?.length - 1]);
      return;
    }

    setFocusedPhoto(allCarouselPhotos?.[currentPhotoIndex - 1]);
  }, [allCarouselPhotos, focusedPhoto, setFocusedPhoto]);

  const displayNextPhoto = useCallback(() => {
    const currentPhotoIndex = allCarouselPhotos.indexOf(focusedPhoto);

    if (currentPhotoIndex === allCarouselPhotos.length - 1) {
      setFocusedPhoto(allCarouselPhotos?.[0]);
      return;
    }

    setFocusedPhoto(allCarouselPhotos?.[currentPhotoIndex + 1]);
  }, [allCarouselPhotos, focusedPhoto, setFocusedPhoto]);

  const handleOnClickBackdrop = useCallback(() => {
    closeModal();
  }, [closeModal]);

  const handleOnClickModalContent = useCallback(
    (e: MouseEvent<HTMLButtonElement>) => {
      e.stopPropagation();
    },
    [],
  );

  const handleOnClickClose = useCallback(() => {
    closeModal();
  }, [closeModal]);

  const closeModalOnPressEscape = useCallback(
    (e: KeyboardEvent) => {
      if (e.key !== "Escape") {
        return;
      }

      closeModal();
    },
    [closeModal],
  );

  const displayPreviousPhotoOnPressLeftArrow = useCallback(
    (e: KeyboardEvent) => {
      if (e.key !== "ArrowLeft") {
        return;
      }

      displayPreviousPhoto();
    },
    [displayPreviousPhoto],
  );

  const displayPreviousPhotoOnPressA = useCallback(
    (e: KeyboardEvent) => {
      if (e.key !== "a") {
        return;
      }

      displayPreviousPhoto();
    },
    [displayPreviousPhoto],
  );

  const displayNextPhotoOnPressRightArrow = useCallback(
    (e: KeyboardEvent) => {
      if (e.key !== "ArrowRight") {
        return;
      }

      displayNextPhoto();
    },
    [displayNextPhoto],
  );

  const displayNextPhotoOnPressD = useCallback(
    (e: KeyboardEvent) => {
      if (e.key !== "d") {
        return;
      }

      displayNextPhoto();
    },
    [displayNextPhoto],
  );

  const handleOnKeydown = useCallback(
    (e: KeyboardEvent) => {
      closeModalOnPressEscape(e);

      displayPreviousPhotoOnPressLeftArrow(e);
      displayPreviousPhotoOnPressA(e);

      displayNextPhotoOnPressRightArrow(e);
      displayNextPhotoOnPressD(e);
    },
    [
      closeModalOnPressEscape,
      displayPreviousPhotoOnPressLeftArrow,
      displayPreviousPhotoOnPressA,
      displayNextPhotoOnPressRightArrow,
      displayNextPhotoOnPressD,
    ],
  );

  useEffect(() => {
    document.body.addEventListener("keydown", handleOnKeydown);

    return () => {
      document.body.removeEventListener("keydown", handleOnKeydown);
    };
  }, [handleOnKeydown]);

  useEffect(() => {
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = "unset";
    };
  }, []);

  if (!isOpen) {
    return <></>;
  }

  return (
    <button
      onClick={handleOnClickBackdrop}
      className="flex items-end justify-center lg:items-center fixed top-0 right-0 bottom-0 left-0 w-screen h-screen z-[1000] bg-opacity-50 bg-white dark:bg-opacity-50 dark:bg-black">
      <div className="flex flex-col p-5 relative rounded-lg w-[100%] h-[100%] bg-gray-50 dark:bg-gray-950">
        {focusedPhoto.photo.src && (
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
                src={focusedPhoto.photo.src}
                alt={focusedPhoto.photo.alt}
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
                {focusedPhoto.title}
              </span>
            </div>
          </div>
        )}

        <button
          onClick={handleOnClickModalContent}
          className="flex flex-row items-center absolute right-0 bottom-0 left-0 pt-5 pb-20 lg:pb-5 px-5 bg-transparent border-t bg-white border-gray-300 dark:border-gray-900 dark:bg-black overflow-x-auto">
          {allCarouselPhotos.map((carouselPhoto) => (
            <ExperiencePhotosCarouselModalCard
              key={`src:${carouselPhoto.photo.src}-title:${carouselPhoto.title}`}
              carouselPhoto={carouselPhoto}
              focusedPhoto={focusedPhoto}
              setFocusedPhoto={setFocusedPhoto}
            />
          ))}
        </button>
      </div>
    </button>
  );
}
