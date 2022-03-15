import React from 'react'
import { DocumentRenderer } from '@keystone-6/document-renderer'
import Image from 'next/image';
import Link from 'next/link';
import { Article } from 'types/article'

type Props = {
	article: Article;
}

export function BlogCard(props: Props) {
	return (
		<Link href={`/blog/${props.article.id}`} passHref>
			<div className="flex flex-col gap-2 hover:bg-white hover:drop-shadow-xl hover:translate-y-[-0.75rem] transition p-4 cursor-pointer rounded-xl">
				<div className="h-40 gray-500 relative rounded-xl overflow-hidden">
					<Image src={props.article.thumbnail.publicUrl} alt={props.article.title} layout="fill" objectFit='cover' />
				</div>
				<div className="text-center neutral-900 headline bold">
					{props.article.title}
				</div>
				<div className="text-justify neutral-800 body-1 font-medium clamp-elipsis-5">
					<DocumentRenderer document={props.article.content.document} />
				</div>
			</div>
		</Link>
	);
}
