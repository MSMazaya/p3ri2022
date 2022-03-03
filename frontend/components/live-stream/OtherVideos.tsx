import React from 'react'
import VideoCard from './VideoCard'

const OtherVideos = () => {
	return (
		<div className="flex flex-col gap-2">
			<div className="headline bold text-neutral-1000">
				Video Lainnya
			</div>
			<VideoCard />
		</div>
	)
}

export default OtherVideos