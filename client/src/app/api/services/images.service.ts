import { httpClient } from "../http-client";
import { API_URL } from "@shared/constants/main";

const imagesService = {
  async create(file: File) {
    const body = new FormData();
    body.append("file", file);

    const { data } = await httpClient.post(`${API_URL}/images`, body);

    return data;
  },

  async getAll() {
    const { data } = await httpClient.get(`${API_URL}/images`);

    return data;
  },
};

export default imagesService;
