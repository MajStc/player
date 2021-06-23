import { request } from "../agent";

import {
  VideoData,
  SingleVideo,
  FetchVideos,
  FetchVideo,
} from "../../utils/types/videoData";

const Videos = {
  getAllVideos: (data: FetchVideos) =>
    request.post<VideoData>("/Media/GetMediaList", data),
  getSingleVideo: (data: FetchVideo) =>
    request.post<SingleVideo>(`/Media/GetMediaPlayInfo`, data),
};

export default Videos;
