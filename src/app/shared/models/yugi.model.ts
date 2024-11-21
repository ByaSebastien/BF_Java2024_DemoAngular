export interface YugiResult {
  data: YugiCard[];
  meta: YugiMeta;
}

export interface YugiCard{
  id: number;
  name: string;
  type: string;
  humanReadableCardType: string;
  desc: string;
  card_images: YugiCardImg[];
}

export interface YugiCardImg {
  image_url: string;
}

export interface YugiMeta {
  previous_page?: string;
  next_page?: string;
}
