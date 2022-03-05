import OtherVideos from 'components/live-stream/OtherVideos'
import VideoHighlighted from 'components/live-stream/VideoHighlighted'
import React from 'react'

const LiveStream = () => {
	return (
		<div className="m-5 grid grid-cols-4 mt-32">
			<VideoHighlighted />
			<OtherVideos />
		</div>
	)
}

export default LiveStream