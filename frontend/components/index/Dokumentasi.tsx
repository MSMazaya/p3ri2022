import React from 'react'
import "react-multi-carousel/lib/styles.css";
import Carousel from 'react-multi-carousel';
import SimpleReactLightbox, { SRLWrapper } from 'simple-react-lightbox'
import { PhotoDokumentasi } from 'types/photoDokumentasi';
import Image from 'next/image';

type Props = {
	photoDokumentasis: PhotoDokumentasi[];
}

const responsive = {
	desktop: {
		breakpoint: { max: 3000, min: 1024 },
		items: 5,
		slidesToSlide: 5
	},
	tablet: {
		breakpoint: { max: 1024, min: 464 },
		items: 2,
		slidesToSlide: 2
	},
	mobile: {
		breakpoint: { max: 464, min: 0 },
		items: 1,
		slidesToSlide: 1
	}
};

const Dokumentasi = (props: Props) => {
	return (
		<SimpleReactLightbox>
			<div className="p-12 mb-20">
				<div className="title-2 bold text-neutral-900 text-center mb-10">
					Dokumentasi P3RI
				</div>
				<SRLWrapper>
					<Carousel
						swipeable={false}
						draggable={false}
						showDots={true}
						responsive={responsive}
						ssr={true}
						infinite={true}
						autoPlaySpeed={5000}
						keyBoardControl={true}
						arrows={false}
						customTransition="all .5"
						transitionDuration={500}
						containerClass="carousel-container"
						dotListClass="custom-dot-list-style"
						itemClass="carousel-item-padding-40-px"
					>
						{
							props.photoDokumentasis.map(photoDokumentasi => <>
								<div key={photoDokumentasi.id} className="p-5 flex flex-col items-center cursor-pointer">
									<div className="h-40 w-full relative overflow-hidden rounded-xl drop-shadow-md">
										<Image src={photoDokumentasi.photo.publicUrl} alt={photoDokumentasi.caption} layout="fill" objectFit='cover' />
									</div>
									<p className="text-neutral-800 mt-2 text-center">
										{photoDokumentasi.caption}
									</p>
								</div>
							</>
							)
						}
					</Carousel>
				</SRLWrapper>
			</div>
		</SimpleReactLightbox>
	)
}

export default Dokumentasi