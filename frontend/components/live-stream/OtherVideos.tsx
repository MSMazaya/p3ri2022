import React from 'react'
import { VideoItem } from 'types/video'
import VideoCard from './VideoCard'

type Props = {
	videos: VideoItem[];
}

const OtherVideos = (props: Props) => {
	return (
		<div className="flex flex-col gap-2">
			<h2 className="headline bold text-neutral-1000">
				Video Lainnya
			</h2>
			{
				props.videos.map((video, index) => {
					return <VideoCard video={video} key={index} />
				})
			}
		</div>
	)
}

export default OtherVideos