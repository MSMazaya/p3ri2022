import Image from 'next/image';
import React from 'react'
import { Article } from 'types/article'
import { DocumentRenderer } from '@keystone-6/document-renderer'
import Link from 'next/link';

type Props = {
	articles: Article[];
}

const Blogs = (props: Props) => {
	return (
		<div className="p-10 flex flex-col gap-4">
			<div className="mid-title bold text-neutral-1000 text-center">Blog</div>
			<div className="grid grid-cols-4 gap-10">
				{
					props.articles.map((article, index) => (
						<Link href={`/blog/${article.id}`} key={index} passHref>
							<div className="flex flex-col gap-2 hover:bg-white hover:drop-shadow-xl hover:translate-y-[-0.75rem] transition p-4 cursor-pointer rounded-xl" >
								<div className="h-40 bg-gray-500 relative rounded-xl">
									<Image src={article.thumbnail.publicUrl} alt={article.title} layout="fill" objectFit='contain' />
								</div>
								<div className="text-center neutral-900 headline bold">
									{article.title}
								</div>
								<div className="text-justify neutral-800 body-1 font-medium clamp-elipsis-5">
									<DocumentRenderer document={article.content.document} />
								</div>
							</div>
						</Link>)
					)
				}
			</div>
			<Link href="/blog" passHref>
				<div className="btn-primary w-fit mx-auto py-4 my-4">
					Lihat Semua Blog
				</div>
			</Link>
		</div>
	)
}

export default Blogs