import moment from 'moment'
import Image from 'next/image'
import React from 'react'
import { VideoItem } from 'types/video'

type Props = {
	video: VideoItem;
}

const VideoCard = (props: Props) => {
	return (
		<a className="flex gap-2" href={"https://www.youtube.com/watch?v=" + props.video.id.videoId}>
			<div>
				<div className="h-[90px] w-[120px] relative">
					<Image src={props.video.snippet.thumbnails.default.url} alt="test" layout='fill' />
				</div>
			</div>
			<div>
				<div className="text-neutral-900 body-1 bold">
					{props.video.snippet.title}
				</div>
				<div className="text-neutral-700 caption medium">
					{moment(props.video.snippet.publishedAt).format('LL')}
				</div>
			</div>
		</a>
	)
}

export default VideoCard