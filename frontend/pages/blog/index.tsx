import { BlogCard } from 'components/blog/BlogCard'
import React, { useState } from 'react'
import useSWRInfinite from 'swr/infinite'
import { Article } from 'types/article';
import fetcher from 'utils/fetcher';


const Index = () => {
	const [showButton, setShowButton] = useState(true);
	const TAKE = 8

	const { data, size, setSize, isValidating } = useSWRInfinite<Article[]>(
		(pageIndex, previousPageData) => {
			if (previousPageData && previousPageData.length < TAKE) {
				setShowButton(false);
				return null;
			}
			return `/api/blog?skip=${pageIndex * TAKE}&take=${TAKE}`;
		},
		fetcher
	)

	const takeMoreData = () => setSize(size + 1)

	return (
		<div className="p-10 flex flex-col gap-4 min-h-screen mt-20 relative">
			<div className="mid-title bold text-neutral-1000 text-center">Blog</div>
			<div className="grid grid-cols-4 gap-10">
				{
					data &&
					data.map(articles =>
						articles.map((article, index) =>
							<BlogCard article={article} key={index} />
						)
					)
				}
			</div>
			{
				isValidating &&
				<div className="grid grid-cols-4 gap-10">
					{
						[1, 2, 3, 4, 5, 6, 7, 8].map(x =>
							<div key={x} className="flex flex-col gap-2 p-4 cursor-pointer rounded-xl animate-pulse">
								<div className="h-40 bg-gray-500 relative rounded-xl overflow-hidden"></div>
								<div className="h-6 w-[50%] mx-auto bg-gray-500 relative rounded-xl overflow-hidden"></div>
								<div className="h-4 bg-gray-500 relative rounded-xl overflow-hidden"></div>
								<div className="h-4 bg-gray-500 relative rounded-xl overflow-hidden"></div>
								<div className="h-4 bg-gray-500 relative rounded-xl overflow-hidden"></div>
								<div className="h-4 bg-gray-500 relative rounded-xl overflow-hidden"></div>
							</div>
						)
					}
				</div>
			}
			{
				data && (data.length >= TAKE) && showButton && !isValidating &&
				<div className="btn-primary w-fit mx-auto py-4 my-4" onClick={takeMoreData}>
					Show More
				</div>
			}
		</div>
	)
}

export default Index