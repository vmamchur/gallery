import { ChangeEvent, DragEvent, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { yupResolver } from "@hookform/resolvers/yup";
import { FormProvider, useForm } from "react-hook-form";

import { useAppDispatch, useAppSelector } from "src/app/store/hooks";
import { imagesActions } from "src/app/store/slices/images.slice";
import Button from "@shared/components/button.component";
import Input from "@shared/components/input.component";
import ICreateImage from "@shared/types/image/create-image.interface";
import createImageSchema from "../schemas/create-image.schema";
import ImagePreview from "./image-preview.component";
import ImageInput from "./image-input.component";

const CreateImageForm = () => {
  const [imagePreviewUrl, setImagePreviewUrl] = useState("");

  const { isUploading } = useAppSelector((state) => state.images);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const methods = useForm({
    mode: "onTouched",
    resolver: yupResolver(createImageSchema),
  });

  const selectedImage = methods.watch("image") as File;

  const onSubmit = async (data: ICreateImage) => {
    await dispatch(imagesActions.create(data));
    navigate("/");
  };

  useEffect(() => {
    if (!selectedImage) {
      setImagePreviewUrl("");
      return;
    }

    const objectUrl = URL.createObjectURL(selectedImage);

    setImagePreviewUrl(objectUrl);

    return () => URL.revokeObjectURL(objectUrl);
  }, [selectedImage]);

  const handleFileChange = async (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];

    if (file) {
      methods.setValue("image", file);
    }
  };

  const handleDrop = (event: DragEvent<HTMLDivElement>) => {
    event.preventDefault();

    const file = event.dataTransfer.files[0];

    if (file) {
      methods.setValue("image", file);
    }
  };

  const handleResetImagePreview = () => {
    setImagePreviewUrl("");
    methods.resetField("image");
  };

  const { errors } = methods.formState;

  return (
    <div className="h-container lg:w-1/2 m-auto flex flex-col justify-center gap-6">
      {imagePreviewUrl ? (
        <ImagePreview
          image={imagePreviewUrl}
          error={errors.image?.message}
          onReset={handleResetImagePreview}
        />
      ) : (
        <ImageInput onFileChange={handleFileChange} onDrop={handleDrop} />
      )}

      {selectedImage && (
        <FormProvider {...methods}>
          <form
            className="flex flex-col gap-2"
            onSubmit={methods.handleSubmit(onSubmit)}
          >
            <Input
              placeholder="Name"
              name="name"
              error={errors.name?.message}
            />
            <Input placeholder="Description" name="description" />
            <Button
              variant="solid"
              size="m"
              type="submit"
              isLoading={isUploading}
            >
              Upload
            </Button>
          </form>
        </FormProvider>
      )}
    </div>
  );
};

export default CreateImageForm;
