import { FetchVideos, SingleVideo } from "../types/videoData";

export const defaultFetchVideosData: FetchVideos = {
  IncludeCategories: true,
  IncludeImages: true,
  IncludeMedia: true,
  MediaListId: 2,
  PageNumber: 1,
  PageSize: 15,
};

export const defaultSingleVideoData: SingleVideo = {
  MediaId: "",
  Title: "",
  Description: "",
  MediaTypeCode: "",
  MediaTypeDisplayName: "",
  StreamId: "",
  Provider: "",
  ContentUrl: "",
};
