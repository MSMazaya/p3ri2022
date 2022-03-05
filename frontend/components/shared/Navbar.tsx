import { Fragment } from 'react'
import { Disclosure, Menu, Transition } from '@headlessui/react'
import { MenuIcon, XIcon } from '@heroicons/react/outline'
import Image from 'next/image';
import { useScroll } from 'ahooks';
import { useRouter } from 'next/router';
import Link from 'next/link';

const toNavigation = (name, href) => ({ name, href });

const navigation = [
	toNavigation("Live Stream", "/live-stream"),
	toNavigation("Jadwal", "/jadwal"),
	toNavigation("Infak", "/infak"),
	toNavigation("Merchandise", "/merch"),
	toNavigation("Sponsor", "/sponsor"),
]

function classNames(...classes) {
	return classes.filter(Boolean).join(' ')
}

export default function Navbar() {
	const scroll = useScroll();
	const router = useRouter();

	return (
		<Disclosure
			as="nav"
			className={
				`${(scroll?.top > 64 || !(router.pathname === '/')) ? "bg-main" : "bg-transparent"} 
				top-0 z-10 left-0 w-screen fixed
			`}
		>
			{({ open }) => (
				<>
					<div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8 lg:py-2">
						<div className="relative flex items-center justify-between h-16">
							<div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
								{/* Mobile menu button*/}
								<Disclosure.Button className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
									<span className="sr-only">Open main menu</span>
									{open ? (
										<XIcon className="block h-6 w-6" aria-hidden="true" />
									) : (
										<MenuIcon className="block h-6 w-6" aria-hidden="true" />
									)}
								</Disclosure.Button>
							</div>
							<div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
								<div className="flex-shrink-0 flex items-center">
									<Link
										href="/"
										passHref
									>
										<a>
											<Image
												height={40}
												width={280}
												className="block lg:hidden h-8 w-auto"
												src="/logo.png"
												alt="Workflow"
												objectFit="contain"
											/>
										</a>
									</Link>
								</div>
							</div>
							<div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">

								<div className="hidden sm:block sm:ml-6">
									<div className="flex space-x-4">
										{navigation.map((item) => (
											<Link
												key={item.name}
												href={item.href}
												passHref
											>
												<a
													className={classNames(
														(router.pathname === item.href) ? 'bg-transparent' : 'hover:bg-gray-700 hover:text-white',
														'px-3 py-2 rounded-md text-sm font-medium text-neutral-100'
													)}
													aria-current={(router.pathname === item.href) ? 'page' : undefined}
												>
													<div className={
														classNames(router.pathname === item.href ?
															"border-b-2 border-white" : undefined,
															"bold"
														)
													}>{item.name}</div>
												</a>
											</Link>
										))}
									</div>
								</div>

								{/* Profile dropdown */}
								<Menu as="div" className="ml-3 relative">
									<div>
										<Menu.Button className="bg-gray-800 flex text-sm rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white">
											<span className="sr-only">Open user menu</span>
											{/* <Image
												className="h-8 w-8 rounded-full"
												src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
												alt=""
											/> */}
										</Menu.Button>
									</div>
									<Transition
										as={Fragment}
										enter="transition ease-out duration-100"
										enterFrom="transform opacity-0 scale-95"
										enterTo="transform opacity-100 scale-100"
										leave="transition ease-in duration-75"
										leaveFrom="transform opacity-100 scale-100"
										leaveTo="transform opacity-0 scale-95"
									>
										<Menu.Items className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
											<Menu.Item>
												{({ active }) => (
													<a
														href="#"
														className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700')}
													>
														Your Profile
													</a>
												)}
											</Menu.Item>
											<Menu.Item>
												{({ active }) => (
													<a
														href="#"
														className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700')}
													>
														Settings
													</a>
												)}
											</Menu.Item>
											<Menu.Item>
												{({ active }) => (
													<a
														href="#"
														className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700')}
													>
														Sign out
													</a>
												)}
											</Menu.Item>
										</Menu.Items>
									</Transition>
								</Menu>
							</div>
						</div>
					</div>

					<Disclosure.Panel className="sm:hidden">
						<div className="px-2 pt-2 pb-3 space-y-1">
							{navigation.map((item) => (
								<Link
									key={item.name}
									href={item.href}
									passHref
								>
									<Disclosure.Button
										as="a"
										className={classNames(
											(router.pathname === item.href) ? 'bg-transparent text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
											'block px-3 py-2 rounded-md text-base font-medium'
										)}
										aria-current={(router.pathname === item.href) ? 'page' : undefined}
									>
										{item.name}
									</Disclosure.Button>
								</Link>
							))}
						</div>
					</Disclosure.Panel>
				</>
			)}
		</Disclosure>
	)
}