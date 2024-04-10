import { API_URL } from "@shared/constants/main";

export default function generateImageUrl(filename: string) {
  return `${API_URL}/images/${filename}`;
}
