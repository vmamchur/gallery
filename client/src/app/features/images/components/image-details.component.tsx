import React from "react";
import Photo from "../../../../assets/unnamed.jpg";
import IconButton from "@shared/components/icon-button.component";
import Task from "../../../../assets/icons/Task.svg?react";

export interface ImageDetailsProps {}

const ImageDetails = () => {
  return (
    // whole component whole component whole component whole component whole component whole component whole component
    <div className="flex flex-col">
      {/* header header header header header header header header header */}
      <div className="flex justify-between">
        {/* author profile info / author profile info  / author profile info */}
        <div className="flex gap-2">
          {/* author profile image */}
          <div className="flex justify-center items-center">
            <img
              src={Photo}
              alt="author profile image"
              className="w-8 h-8 rounded-full object-cover"
            />
          </div>
          {/* additional info */}
          <div className="flex flex-col text-caption">
            {/* name */}
            <span className="text-caption">PopaPisya</span>
            {/* status */}
            <span className="text-primary-300 text-tiny">Beer enjoyer</span>
          </div>
        </div>
        {/* author profile info / author profile info  / author profile info */}

        {/* capacities */}
        <div className="flex gap-1">
          <IconButton icon={<Task />} variant="solid" size="m" />
          <IconButton icon={<Task />} variant="solid" size="m" />
          <IconButton icon={<Task />} variant="solid" size="m" />
        </div>
      </div>
      {/* header header header header header header header header header */}
    </div>

    // whole component whole component whole component whole component whole component whole component whole component
  );
};

export default ImageDetails;
