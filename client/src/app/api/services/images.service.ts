import { httpClient } from "../http-client";
import { API_URL } from "@shared/constants/main";
import IImage from "@shared/types/image/image.interface";
import ICreateImage from "@shared/types/image/create-image.interface";

const imagesService = {
  async create({ image, name, description }: ICreateImage): Promise<IImage> {
    const body = new FormData();

    body.append("file", image as Blob);
    body.append("name", name);

    if (description) {
      body.append("description", description);
    }

    const { data } = await httpClient.post(`${API_URL}/images`, body);

    return data;
  },

  async getAll(): Promise<IImage[]> {
    const { data } = await httpClient.get(`${API_URL}/images`);

    return data;
  },

  async remove(id: string) {
    const { data } = await httpClient.delete(`${API_URL}/images/${id}`);

    return data;
  },
};

export default imagesService;
