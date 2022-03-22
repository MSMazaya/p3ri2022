import { DocumentRenderer } from '@keystone-6/document-renderer';
import moment from 'moment';
import Head from 'next/head';
import Image from 'next/image';
import React from 'react'
import { getAllArticlesId, getArticleById, getArticlesPaginated } from 'services/article'
import { Article } from 'types/article'

type Props = {
	blog: Article;
	otherBlogs: Article[];
}

type CardProps = {
	blog: Article;
}

function BlogCard(props: CardProps) {
	return (
		<div className="cursor-pointer">
			<div className="flex gap-5 items-center caption">
				<div className="rounded-2xl w-4 h-4 relative">
					<Image src={props.blog.authorPhoto.publicUrl} layout="fill" objectFit="cover" alt={props.blog.author} />
				</div>
				<div className="text-neutral-1000 bold">
					{props.blog.author}
				</div>
				<div className="w-[2px] h-[1rem] my-auto bg-neutral-400" />
				<div className="text-neutral-600 body-1 font-medium">
					{moment(props.blog.publishedAt).format('LL')}
				</div>
				<div className="w-[2px] h-[1rem] my-auto bg-neutral-400" />
				<div className="text-neutral-600 ">
					{`${props.blog.minutesToRead} min read`}
				</div>
			</div>
			<div className="sub-headline bold mt-2">
				{props.blog.title}
			</div>
		</div>
	);
}


const Blog = (props: Props) => {

	return (
		<React.Fragment>
			<Head>
				<title>P3RI Salman ITB | {props.blog.title}</title>
			</Head>
			<div className="mt-20 p-10">
				<div className="relative flex gap-10">
					<main className="flex flex-col gap-5 w-[60%]">
						<h1 className="mid-title bold text-neutral-1000">{props.blog.title}</h1>
						<div className="flex gap-5 items-center">
							<div className="rounded-2xl w-10 h-10 relative">
								<Image src={props.blog.authorPhoto.publicUrl} layout="fill" objectFit="cover" alt={props.blog.author} />
							</div>
							<div className="text-neutral-1000 body-1 bold">
								{props.blog.author}
							</div>
							<div className="w-[2px] h-[60%] my-auto rounded bg-neutral-400" />
							<div className="text-neutral-600 body-1 font-medium">
								{moment(props.blog.publishedAt).format('LL')}
							</div>
							<div className="w-[2px] h-[60%] my-auto rounded bg-neutral-400" />
							<div className="text-neutral-600 body-1 font-medium">
								{`${props.blog.minutesToRead} min read`}
							</div>
						</div>
						<div className="w-full h-[40vh] rounded-xl relative overflow-hidden">
							<Image src={props.blog.thumbnail.publicUrl} layout="fill" objectFit="cover" alt={props.blog.title} />
						</div>
						<article className="text-justify flex flex-col gap-5 sub-headline">
							<DocumentRenderer document={props.blog.content.document} />
						</article>
					</main>
					<aside className="flex flex-col gap-3">
						<div className="headline bold">Baca Juga</div>
						{
							props.otherBlogs.map((blog, index) => (
								<BlogCard key={index} blog={blog} />
							))
						}
					</aside>
				</div>
			</div>
		</React.Fragment>
	)
}

export async function getStaticPaths() {
	const ids = await getAllArticlesId();

	const paths = ids.map(({ id }) => ({
		params: { blog_id: id },
	}))

	return { paths, fallback: 'blocking' }
}

export async function getStaticProps({ params }) {
	const blog = await getArticleById(params.blog_id);
	const otherBlogs = await getArticlesPaginated(9, 0);

	return {
		props: {
			blog,
			otherBlogs: otherBlogs.filter(blog => blog.id !== params.blog_id),
		}
	}
}

export default Blog 