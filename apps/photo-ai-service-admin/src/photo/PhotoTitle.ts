import { Photo as TPhoto } from "../api/photo/Photo";

export const PHOTO_TITLE_FIELD = "style";

export const PhotoTitle = (record: TPhoto): string => {
  return record.style?.toString() || String(record.id);
};
