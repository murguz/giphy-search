import { GiphyItemImage } from './giphy-item.model';
export interface GiphyItem {
  embed_url: string;
  id: string;
  images: {
    [id: string]: GiphyItemImage;
    fixed_width: GiphyItemImage;
  };
  rating: string;
  slug: string;
  title: string;
  type: string;
  url: string;
}

export interface GiphyItemImage {
  height: string;
  url: string;
  width: string;
}
