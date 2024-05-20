import axios from "axios";
import { Camper, CamperDetail, Review } from "../app/camperSlice";

const client = axios.create({
  baseURL: process.env.REACT_APP_CAMPER_API,
});

export async function fetchCampers(): Promise<Camper[]> {
  const resp = await client.get<[]>("/advert");

  return resp.data.map((item: any) => {
    return {
      id: item._id,
      name: item.name,
      description: item.description,
      price: item.price,
      width: item.width,
      length: item.length,
      height: item.height,
      form: item.form,
      consumption: item.consumption,
      location: item.location,
      tank: item.tank,
      rating: item.rating,
      reviews: item.reviews.map((review: any) => {
        return {
          reviewer: review.reviewer_name,
          rating: review.reviewer_rating,
          comment: review.comment,
        } satisfies Review;
      }),
      galleryUrls: item.gallery,

      details: prepareDetails(item),
    } satisfies Camper;
  });
}

function prepareDetails(camper: any): CamperDetail[] {
  const details = [
    ["adults", camper.adults],
    ["children", camper.children],
    ["engine", camper.engine],
    ["transmission", camper.transmission],
  ].concat(Object.entries(camper.details));

  return details
    .map(([id, value]) => {
      return {
        id,
        value,
      };
    })
    .filter((detail) => detail.value !== 0);
}
