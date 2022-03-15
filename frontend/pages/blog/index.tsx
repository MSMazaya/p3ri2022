import { useInViewport } from 'ahooks';
import { BlogCard } from 'components/blog/BlogCard'
import React, { useEffect, useRef } from 'react'
import useSWRInfinite from 'swr/infinite'
import { Article } from 'types/article';
import fetcher from 'utils/fetcher';

const TAKE = 8

const getKey = (pageIndex: number, previousPageData) => {
	if (previousPageData && !previousPageData.length) return null // reached the end
	return `/api/blog?skip=${pageIndex * TAKE}&take=${TAKE}`                    // SWR key
}

const Index = () => {
	const fetchRef = useRef();
	const [inViewport] = useInViewport(fetchRef);

	const { data, size, setSize } = useSWRInfinite<Article[]>(getKey, fetcher)


	useEffect(() => {
		if (inViewport) {
			setSize(size + 1);
		}
	}, [inViewport])

	if (!data) {
		return <h1>Loading...</h1>
	}


	return (
		<div className="p-10 flex flex-col gap-4 min-h-screen mt-20 relative">
			<div className="mid-title bold text-neutral-1000 text-center">Blog</div>
			<div className="grid grid-cols-4 gap-10">
				{
					data.map(articles =>
						articles.map((article, index) =>
							<BlogCard article={article} key={index} />
						)
					)
				}
			</div>
			<div className="absolute bottom-[2rem]" ref={fetchRef} />
		</div>
	)
}

export default Index