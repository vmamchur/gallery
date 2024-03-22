import { IMAGES_URL } from "@shared/constants/main";

export default function generateImageUrl(filename: string) {
  return `${IMAGES_URL}/${filename}`;
}
