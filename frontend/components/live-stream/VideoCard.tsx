import Image from 'next/image'
import React from 'react'

const VideoCard = () => {
	return (
		<div className="flex gap-2 cursor-pointer">
			<Image src="https://i.ytimg.com/vi/gbEAGm48YNo/default.jpg" alt="test" width="120" height="90" />
			<div>
				<div className="text-neutral-900 body-1 bold">
					Kajian Ilmiah : Teknologi dan Islam
				</div>
				<div className="text-neutral-700 caption medium">
					2 Apr 2022 12:00 WIB
				</div>
			</div>
		</div>
	)
}

export default VideoCard