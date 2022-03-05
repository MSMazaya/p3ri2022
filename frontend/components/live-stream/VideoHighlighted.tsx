import React from 'react'
import { VideoItem } from 'types/video'
import moment from 'moment'

type Props = {
	video: VideoItem;
}

const VideoHighlighted = (props: Props) => {
	return (
		<div className="col-span-3 m-5 flex flex-col gap-3">
			<div className="aspect-w-16 aspect-h-9">
				<iframe
					frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
					src={`https://www.youtube.com/embed/${props.video.id.videoId}`}
					allowFullScreen
				>
				</iframe>
			</div>

			<div className="title-1 bold">
				{props.video.snippet.title}
			</div>
			<div className="sub-headline medium text-neutral-700">
				{moment(props.video.snippet.publishedAt).format('LL')} - {props.video.snippet.channelTitle}
			</div>
		</div>
	)
}

export default VideoHighlighted