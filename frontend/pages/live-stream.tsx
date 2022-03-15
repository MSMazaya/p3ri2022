import OtherVideos from 'components/live-stream/OtherVideos'
import VideoHighlighted from 'components/live-stream/VideoHighlighted'
import Head from 'next/head'
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
		<>
			<Head>
				<title>Live Stream</title>
				<meta name="description" content="Tonton livestream dari kegiatan yang sedang berlangsung di P3RI" />
			</Head>
			<div className="m-5 grid grid-cols-4 mt-32">
				<VideoHighlighted video={props.firstVideo} />
				<OtherVideos videos={props.otherVideos} />
			</div>
		</>
	)
}

export async function getServerSideProps() {
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