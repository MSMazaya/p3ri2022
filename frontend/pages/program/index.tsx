import { DocumentRenderer } from '@keystone-6/document-renderer';
import Link from 'next/link';
import React, { ReactNode } from 'react'
import { getAllPrograms } from 'services/program'
import { Program } from 'types/program'

type Props = {
	programs: Program[];
	children?: ReactNode;
}

const Index = (props: Props) => {
	return (
		<>
			<div className="bold mid-title text-center mt-32">Program P3RI</div>
			<div className="m-10 grid grid-cols-3">
				{
					props.programs.map((program, index) => <ProgramCard program={program} key={index} />)
				}
			</div>
		</>
	)
}

type CardProps = {
	program: Program;
};

const ProgramCard = (props: CardProps) => {
	return (
		<Link href={`/program/${props.program.id}`} passHref>
			<div className="drop-shadow-md hover:drop-shadow-xl transition hover:translate-y-[-0.1rem] cursor-pointer p-5 rounded-xl bg-neutral-100 flex flex-col gap-2">
				<div className="bold title-3">{props.program.namaProgram}</div>
				<div className="text-neutral-600 text-justify clamp-elipsis-5">
					<DocumentRenderer document={props.program.deskripsiProgram.document} />
				</div>
			</div>
		</Link>
	);
}

export async function getStaticProps() {
	const programs = await getAllPrograms();

	return {
		props: {
			programs
		}
	}
}

export default Index