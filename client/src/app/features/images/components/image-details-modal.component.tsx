import { useAppDispatch, useAppSelector } from "src/app/store/hooks";
import IconButton from "@shared/components/icon-button.component";
import ModalWrapper from "@shared/components/modal-wrapper.components";
import { EModalName } from "@shared/types/modal/modal-name.enum";
import generateImageUrl from "@shared/helpers/generate-image-url";
import AvatarPlaceholderIcon from "../../../../assets/icons/avatar-placeholder.svg?react";
import DeleteIcon from "../../../../assets/icons/trash.svg?react";
import { imagesActions } from "src/app/store/slices/images.slice";
import { modalsActions } from "src/app/store/slices/modals.slice";

const ImageDetailsModal = () => {
  const dispatch = useAppDispatch();
  const { activeModalName } = useAppSelector((state) => state.modals);
  const { selectedImage } = useAppSelector((state) => state.images);
  const { currentUser } = useAppSelector((state) => state.auth);

  if (!selectedImage) {
    return null;
  }

  const handleDelete = async () => {
    await dispatch(imagesActions.remove(selectedImage.id));
    dispatch(modalsActions.closeModal());
  };

  return (
    <ModalWrapper isOpen={activeModalName === EModalName.ImageDetails}>
      <div className="flex flex-col gap-4">
        <div className="flex justify-between">
          <div className="flex items-center gap-2 lg:gap-3">
            <AvatarPlaceholderIcon />
            <span className="text-caption">
              {selectedImage.author.username}
            </span>
          </div>

          <div className="flex gap-1">
            {currentUser?.id === selectedImage.author.id && (
              <IconButton
                variant="solid"
                size="m"
                onClick={handleDelete}
                Icon={DeleteIcon}
              />
            )}
          </div>
        </div>

        <div className="flex justify-center">
          <img
            className="w-min max-h-[600px]"
            src={generateImageUrl(selectedImage.filename)}
          />
        </div>

        <div>
          <h3 className="text-header-3">{selectedImage.name}</h3>
          <p className="text-caption">{selectedImage.description}</p>
        </div>
      </div>
    </ModalWrapper>
  );
};

export default ImageDetailsModal;
