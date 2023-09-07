import { useState } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import { Link } from "react-router-dom";
import useVideoList from "../hooks/useVideoList";
import Video from "./Video";
import classN from "../styles/videos.module.css"

export default function Videos() {
  const [page, setPage] = useState(1);
  const { loading, error, videos, hasMore } = useVideoList(page);

  return (
    <div>
      {videos.length > 0 && (
        <InfiniteScroll dataLength={videos.length} next={() => setPage(page + 4)} hasMore={hasMore} loader={<h4>Loading...</h4>}
          endMessage={<p style={{ textAlign: 'center' }}> <b>Yah! You have seen it all videos</b> </p>}>
          <div className={classN.videos}>
            {videos.map((video) =>
              video.noq > 0 ? (
                <Link to={`/quiz/${video.youtubeID}`} key={video.youtubeID} className={classN.videos}>
                  <Video
                    title={video.title}
                    id={video.youtubeID}
                    noq={video.noq}
                  />
                </Link>
              ) : (
                <Video title={video.title} id={video.youtubeID} noq={video.noq} />
              )
            )}
          </div>
        </InfiniteScroll>
      )}
      {!loading && videos.length === 0 && <div>No data found!</div>}
      {error && <div>There was an error!</div>}
      {/* {loading && <div><h4>Loading...</h4></div>} */}
    </div>
  );
}