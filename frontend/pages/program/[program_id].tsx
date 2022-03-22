import React from 'react'
import { getAllPrograms, getProgramById } from 'services/program';
import { Program } from 'types/program';
import Image from 'next/image'
import { DocumentRenderer } from '@keystone-6/document-renderer';
import { Chrono } from 'react-chrono';
import moment from 'moment';
import { BiArrowBack } from 'react-icons/bi';
import { BlogCard } from 'components/blog/BlogCard';
import Link from 'next/link';
import Head from 'next/head';

type Props = {
	program: Program;
}

const Program = (props: Props) => {

	return (
		<React.Fragment>
			<Head>
				<title>P3RI Salman ITB | {props.program.namaProgram}</title>
			</Head>
			<div className="px-5">
				<div className="py-32 h-screen flex flex-col justify-center gap-10">
					<div className="grid grid-cols-2 gap-10 m-10">
						<div className="p-5 flex flex-col gap-10">
							<h1 className="bold mid-title">{props.program.namaProgram}</h1>
							<div className="text-justify">
								<DocumentRenderer document={props.program.deskripsiProgram.document} />
							</div>
							<a className="text-primary-main bold title-3 flex gap-2 items-center group" href="#timeline">
								Lihat Timeline
								<BiArrowBack className="transform rotate-[-90deg] group-hover:animate-bounce-y-rotate-min-90" />
							</a>
						</div>
						<div className="relative h-full my-auto rounded-md overflow-hidden drop-shadow-lg">
							<Image className="" src={props.program.thumbnail.publicUrl} alt={props.program.namaProgram} layout="fill" objectFit="cover" />
						</div>
					</div>
				</div>
				<div className="h-fit mb-32" id="timeline">
					<div className="bold title-1 text-center my-5">Timelines</div>
					<div className="title-3 text-neutral-700 text-center my-5">Berbagai acara pada {props.program.namaProgram}</div>
					<Chrono
						items={props.program.timelines.map(timeline => (
							{
								title: `${moment(timeline.waktuAkhirAcara).format("LL")} - ${moment(timeline.waktuAwalAcara).format("LL")}`,
								cardTitle: timeline.namaKegiatan,
								cardSubtitle: timeline.shortDescription,
								cardDetailedText: timeline.longDescription.document.map(doc => doc.children.map(child => child.text).join()),
								media: {
									name: timeline.namaKegiatan,
									source: {
										url: timeline.thumbnail.publicUrl,
									},
									type: "IMAGE"
								}
							}
						))}
						scrollable={false}
						hideControls
						mode="VERTICAL"
					/>
				</div>
			</div>
			<div className="h-fit m-12">
				<div className="bold title-1 text-center my-5">Artikel</div>
				<div className="title-3 text-neutral-700 text-center my-5">Baca artikel mengenai {props.program.namaProgram}</div>
				<div className="grid grid-cols-4 gap-10 my-10">
					{
						props.program.articles.map((article, index) =>
							<BlogCard key={index} article={article} />
						)
					}
				</div>
				<Link href="/blog" passHref>
					<div className="btn-primary w-fit mx-auto py-4 my-4">
						Lihat Semua Blog P3RI
					</div>
				</Link>
			</div>
		</React.Fragment>
	)
}

export async function getStaticPaths() {
	const programs = await getAllPrograms();

	const paths = programs.map(({ id }) => ({
		params: { program_id: id },
	}))

	return { paths, fallback: 'blocking' }
}

export async function getStaticProps({ params }) {
	const program = await getProgramById(params.program_id);

	return {
		props: {
			program,
		}
	}
}

export default Program 