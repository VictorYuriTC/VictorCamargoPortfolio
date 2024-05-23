import React, { Dispatch, SetStateAction } from "react";
import ExperiencePhoto, { IExperiencePhotoData } from "./ExperiencePhoto";
import { ImageProps } from "next/image";

export interface IAllExperiencePhotos {
  photos: IExperiencePhotoData[];
  setIsExperiencePhotosCarouselModalOpen: Dispatch<SetStateAction<boolean>>;
  setFocusedPhoto: Dispatch<SetStateAction<ImageProps>>;
}

export default function AllExperiencePhotos(props: IAllExperiencePhotos) {
  return (
    <div className="flex flex-row items-center my-5">
      {props.photos.map((photoData, index) => (
        <ExperiencePhoto
          setFocusedPhoto={props.setFocusedPhoto}
          setIsExperiencePhotosCarouselModalOpen={
            props.setIsExperiencePhotosCarouselModalOpen
          }
          key={index}
          photoData={photoData}
        />
      ))}
    </div>
  );
}
