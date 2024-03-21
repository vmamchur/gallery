import { httpClient } from "../http-client";
import { API_URL } from "@shared/constants/main";
import IImage from "@shared/types/image/image.interface";

const imagesService = {
  async create(file: File): Promise<IImage> {
    const body = new FormData();
    body.append("file", file);

    const { data } = await httpClient.post(`${API_URL}/images`, body);

    return data;
  },

  async getAll(): Promise<IImage[]> {
    const { data } = await httpClient.get(`${API_URL}/images`);

    return data;
  },
};

export default imagesService;
