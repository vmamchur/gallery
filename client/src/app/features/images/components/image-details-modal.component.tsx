import { useAppSelector } from "src/app/store/hooks";
import IconButton from "@shared/components/icon-button.component";
import ModalWrapper from "@shared/components/modal-wrapper.components";
import { EModalName } from "@shared/types/modal/modal-name.enum";
import generateImageUrl from "@shared/helpers/generate-image-url";
import AvatarPlaceholderIcon from "../../../../assets/icons/avatar-placeholder.svg?react";
import DeleteIcon from "../../../../assets/icons/trash.svg?react";

const ImageDetailsModal = () => {
  const { activeModalName } = useAppSelector((state) => state.modals);
  const { selectedImage } = useAppSelector((state) => state.images);

  return (
    <ModalWrapper isOpen={activeModalName === EModalName.ImageDetails}>
      <div className="flex flex-col gap-4">
        <div className="flex justify-between">
          <div className="flex items-center gap-2 lg:gap-3">
            <AvatarPlaceholderIcon />
            <span className="text-caption">username</span>
          </div>

          <div className="flex gap-1">
            <IconButton
              variant="solid"
              size="m"
              onClick={() => {}}
              Icon={DeleteIcon}
            />
          </div>
        </div>

        <div className="flex justify-center">
          <img
            className="w-min"
            src={generateImageUrl(selectedImage?.filename || "")}
          />
        </div>

        <div>
          <p className="text-caption">
            Lorem ipsum dolor sit amet, qui minim labore adipisicing minim sint
            cillum sint consectetur cupidatat.Lorem ipsum dolor sit amet,
            officia excepteur ex fugiat reprehenderit enim labore culpa sint ad
            nisi Lorem pariatur mollit ex esse exercitation amet. Nisi anim
            cupidatat excepteur officia. Reprehenderit nostrud nostrud ipsum
            Lorem est aliquip amet voluptate voluptate dolor minim nulla est
            proident. Nostrud officia pariatur ut officia. Sit irure elit esse
            ea nulla sunt ex occaecat reprehenderit commodo officia dolor Lorem
            duis laboris cupidatat officia voluptate. Culpa proident adipisicing
            id nulla nisi laboris ex in Lorem sunt duis officia eiusmod. Aliqua
            reprehenderit commodo ex non excepteur duis sunt velit enim.
            Voluptate laboris sint cupidatat ullamco ut ea consectetur et est
            culpa et culpa duis. Lorem ipsum dolor sit amet, officia excepteur
            ex fugiat reprehenderit enim labore culpa sint ad nisi Lorem
            pariatur mollit ex esse exercitation amet. Nisi anim cupidatat
            excepteur officia. Reprehenderit nostrud nostrud ipsum Lorem est
            aliquip amet voluptate voluptate dolor minim nulla est proident.
            Nostrud officia pariatur ut officia. Sit irure elit esse ea nulla
            sunt ex occaecat reprehenderit commodo officia dolor Lorem duis
            laboris cupidatat officia voluptate. Culpa proident adipisicing id
            nulla nisi laboris ex in Lorem sunt duis officia eiusmod. Aliqua
            reprehenderit commodo ex non excepteur duis sunt velit enim.
            Voluptate laboris sint cupidatat ullamco ut ea consectetur et est
            culpa et culpa duis. Lorem ipsum dolor sit amet, qui minim labore
            adipisicing minim sint cillum sint consectetur cupidatat. Lorem
            ipsum dolor sit amet, officia excepteur ex fugiat reprehenderit enim
            labore culpa sint ad nisi Lorem pariatur mollit ex esse exercitation
            amet. Nisi anim cupidatat excepteur officia. Reprehenderit nostrud
            nostrud ipsum Lorem est aliquip amet voluptate voluptate dolor minim
            nulla est proident. Nostrud officia pariatur ut officia. Sit irure
            elit esse ea nulla sunt ex occaecat reprehenderit commodo officia
            dolor Lorem duis laboris cupidatat officia voluptate. Culpa proident
            adipisicing id nulla nisi laboris ex in Lorem sunt duis officia
            eiusmod. Aliqua reprehenderit commodo ex non excepteur duis sunt
            velit enim. Voluptate laboris sint cupidatat ullamco ut ea excepteur
            officia. Reprehenderit nostrud nostrud ipsum Lorem est aliquip amet
            voluptate voluptate dolor minim nulla est proident. Nostrud officia
            pariatur ut officia. Sit irure elit esse ea nulla sunt ex occaecat
            reprehenderit commodo officia dolor Lorem duis laboris cupidatat
            officia voluptate. Culpa proident adipisicing id nulla nisi laboris
            ex in Lorem sunt duis officia eiusmod. Aliqua reprehenderit commodo
            ex non excepteur duis sunt velit enim. Voluptate laboris sint
            cupidatat ullamco ut ea consectetur et est culpa et culpa duis.
            Lorem ipsum dolor sit amet, qui minim labore adipisicing minim sint
            cillum sint consectetur cupidatat. Lorem ipsum dolor sit amet,
            officia excepteur ex fugiat reprehenderit enim labore culpa sint ad
            nisi Lorem pariatur mollit ex esse exercitation amet. Nisi anim
            cupidatat excepteur officia. Reprehenderit nostrud nostrud ipsum
            Lorem est aliquip amet voluptate voluptate dolor minim nulla est
            proident. Nostrud officia pariatur ut officia. Sit irure elit esse
            ea nulla sunt ex occaecat reprehenderit commodo officia dolor Lorem
            duis laboris cupidatat officia voluptate. Culpa proident adipisicing
            id nulla nisi laboris ex in Lorem sunt duis officia eiusmod. Aliqua
            reprehenderit commodo ex non excepteur duis sunt velit enim.
            Voluptate laboris sint cupidatat ullamco ut ea consectetur et est
            culpa et culpa duis. consectetur et est culpa et culpa duis.
          </p>
        </div>
      </div>
    </ModalWrapper>
  );
};

export default ImageDetailsModal;
