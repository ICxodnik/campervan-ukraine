import axios from "axios";
import { Camper, CamperDetail, Review } from "../features/camper/camperSlice";

const client = axios.create({
  baseURL: process.env.REACT_APP_CAMPER_API,
});

export async function fetchCampers(): Promise<Camper[]> {
  return await client.get<[]>("/advert");
}
