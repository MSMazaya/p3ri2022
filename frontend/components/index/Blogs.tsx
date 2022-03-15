import React from 'react'
import { Article } from 'types/article'
import Link from 'next/link';
import { BlogCard } from 'components/blog/BlogCard';

type Props = {
	articles: Article[];
}


const Blogs = (props: Props) => {
	return (
		<div className="p-10 flex flex-col gap-4">
			<div className="mid-title bold text-neutral-1000 text-center">Blog</div>
			<div className="grid grid-cols-4 gap-10">
				{
					props.articles.map((article, index) =>
						<BlogCard key={index} article={article} />
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