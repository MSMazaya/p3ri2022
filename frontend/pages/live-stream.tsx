import OtherVideos from 'components/live-stream/OtherVideos'
import VideoHighlighted from 'components/live-stream/VideoHighlighted'
import React, { ReactNode } from 'react'
import { getYoutubeVideos } from 'services/youtube'
import { VideoItem } from 'types/video'

type Props = {
	firstVideo: VideoItem;
	otherVideos: VideoItem[];
	children?: ReactNode;
}

const LiveStream = (props: Props) => {
	return (
		<div className="m-5 grid grid-cols-4 mt-32">
			<VideoHighlighted video={props.firstVideo} />
			<OtherVideos videos={props.otherVideos} />
		</div>
	)
}

export async function getStaticProps() {
	const videosData = await getYoutubeVideos();
	const firstVideo = videosData.items[0];
	const otherVideos = videosData.items.slice(1);

	return {
		props: {
			firstVideo,
			otherVideos
		}
	}
}

export default LiveStream