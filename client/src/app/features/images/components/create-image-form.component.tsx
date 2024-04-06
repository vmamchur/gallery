import { ChangeEvent, DragEvent, useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { yupResolver } from "@hookform/resolvers/yup";
import { FormProvider, useForm } from "react-hook-form";

import Button from "@shared/components/button.component";
import Input from "@shared/components/input.component";
import { useAppDispatch } from "src/app/store/hooks";
import { imagesActions } from "src/app/store/slices/images.slice";
import ICreateImage from "@shared/types/image/create-image.interface";
import createImageSchema from "../schemas/create-image.schema";

const CreateImageForm = () => {
  const [imagePreview, setImagePreview] = useState<string | null>(null);

  const uploadRef = useRef<HTMLInputElement>(null);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const methods = useForm({
    mode: "onTouched",
    resolver: yupResolver(createImageSchema),
  });

  const selectedImage = methods.watch('image') as File;

  const onSubmit = async (data: ICreateImage) => {
    console.log(data);
    await dispatch(imagesActions.create(data));
    navigate("/");
  };

  useEffect(() => {
    if (!selectedImage) {
      setImagePreview(null);
      return;
    }

    const objectUrl = URL.createObjectURL(selectedImage);

    setImagePreview(objectUrl);

    return () => URL.revokeObjectURL(objectUrl);
  }, [selectedImage]);

  const handleUploadClick = () => {
    if (!uploadRef.current) {
      return;
    }

    uploadRef.current.click();
  };

  const handleFileChange = async (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];

    if (file) {
      methods.setValue('image', file);
    }
  };

  const handleDrop = (event: DragEvent<HTMLDivElement>) => {
    event.preventDefault();

    const file = event.dataTransfer.files[0];

    if (file) {
      methods.setValue('image', file);
    }
  };

  const { errors } = methods.formState;

  return (
    <div className="h-container flex flex-col items-center justify-center gap-6">
      {imagePreview ? (
        <img
          className="w-full h-full lg:w-1/2 flex justify-center items-center"
          src={imagePreview}
        />
      ) : (
        <div
          className="w-full lg:w-1/2 h-96 flex justify-center items-center border-2 border-dashed border-primary-200"
          onDragOver={(event) => event.preventDefault()}
          onDrop={handleDrop}
        >
          <button className="text-header-3" onClick={handleUploadClick}>
            Drag and drop or browse to choose a file
          </button>
        </div>
      )}

      {selectedImage && (
        <FormProvider {...methods}>
          <form
            className="w-full lg:w-1/2 flex flex-col gap-2"
            onSubmit={methods.handleSubmit(onSubmit)}
          >
            <Input placeholder="Name" name="name" error={errors.name?.message} />
            <Input placeholder="Description" name="description" />
            <Button variant="solid" size="m" type="submit">
              Upload
            </Button>
          </form>
        </FormProvider>
      )}

      <input
        className="hidden"
        type="file"
        accept="image/jpeg, image/jpg, image/png, image/gif"
        ref={uploadRef}
        onChange={handleFileChange}
      />
    </div>
  );
};

export default CreateImageForm;
