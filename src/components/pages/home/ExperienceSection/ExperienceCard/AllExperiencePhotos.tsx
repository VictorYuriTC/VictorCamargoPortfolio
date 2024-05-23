import React, { Dispatch, SetStateAction } from "react";
import ExperiencePhoto, { IExperiencePhotoData } from "./ExperiencePhoto";

export interface IAllExperiencePhotos {
  photos: IExperiencePhotoData[];
  setIsExperiencePhotosCarouselModalOpen: Dispatch<SetStateAction<boolean>>;
  setFocusedPhoto: Dispatch<SetStateAction<IExperiencePhotoData | null>>;
}

export default function AllExperiencePhotos(props: IAllExperiencePhotos) {
  return (
    <div className="flex flex-row items-center my-5">
      {props.photos.map((photoData) => (
        <ExperiencePhoto
          setFocusedPhoto={props.setFocusedPhoto}
          setIsExperiencePhotosCarouselModalOpen={
            props.setIsExperiencePhotosCarouselModalOpen
          }
          key={`src:${photoData.photo.src}-title${photoData.title}`}
          photoData={photoData}
        />
      ))}
    </div>
  );
}
