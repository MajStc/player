export interface VideoImages {
  Id: string;
  MediaId: number;
  PlatformCode: string;
  ImageTypeCode: string;
  Url: string;
  Width: number;
  Height: number;
}

export interface VideoProducts {
  Id: string;
}

export interface Video {
  Id: string;
  Guid: string;
  MediaTypeCode: string;
  MediaAgeRestrictionValueMin: number;
  MediaAgeRestrictionImageUrl: string;
  Title: string;
  Description: string;
  Year: number;
  Duration: number;
  IsTrialContentAvailable: boolean;
  AvailableFrom: string;
  Images: VideoImages[];
  Products: VideoProducts[];
}

export interface VideoData {
  CacheDataValidTo: string;
  SourceType: string;
  Entities: Video[];
}

export interface SingleVideo {
  MediaId: string;
  Title: string;
  Description: string;
  MediaTypeCode: string;
  MediaTypeDisplayName: string;
  StreamId: string;
  Provider: string;
  ContentUrl: string;
}

export interface FetchVideo {
  MediaId: number;
  StreamType: string;
}

export interface FetchVideos {
  MediaListId: number;
  IncludeCategories: boolean;
  IncludeImages: boolean;
  IncludeMedia: boolean;
  PageNumber: number;
  PageSize: number;
}
