import { Dialog, Transition } from '@headlessui/react'
import { Event } from 'types/jadwal'
import { DocumentRenderer } from '@keystone-6/document-renderer'

type Props = {
	event: Event | null;
	open: boolean;
	setOpen: (value: boolean) => void;
}

export default function Modal(props: Props) {

	return (
		<Transition appear show={props.open} as={'div'}>
			<Dialog
				className="fixed inset-0 z-10 overflow-y-auto"
				open={props.open}
				onClose={() => props.setOpen(false)}
			>
				<div className="min-h-screen px-4 bg-slate-500 bg-opacity-40 flex justify-center items-center">
					<Transition.Child
						enter="ease-out duration-300"
						enterFrom="opacity-0"
						enterTo="opacity-100"
						leave="ease-in duration-200"
						leaveFrom="opacity-100"
						leaveTo="opacity-0"
						as='div'
					>
						<Dialog.Overlay />
					</Transition.Child>

					<Transition.Child
						enter="ease-out duration-300"
						enterFrom="opacity-0 scale-95"
						enterTo="opacity-100 scale-100"
						leave="ease-in duration-200"
						leaveFrom="opacity-100 scale-100"
						leaveTo="opacity-0 scale-95"
						className="bg-white rounded-lg shadow-xl transform transition-all sm:max-w-4xl sm:w-full"
						as='div'
					>
						<div className="bold title-1 p-4">
							<Dialog.Title>{props.event?.namaKegiatan}</Dialog.Title>
						</div>
						<hr className="h-1 bg-slate-500 rounded" />
						<div className="p-5">
							<div className="mt-2">
								<Dialog.Description>
									<DocumentRenderer document={props.event?.longDescription.document} />
								</Dialog.Description>
							</div>
							<div className="mt-4 ">
								<button
									type="button"
									className="inline-flex justify-center px-4 py-2 text-sm font-medium text-blue-900 bg-blue-100 border border-transparent rounded-md hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-500"
									onClick={() => props.setOpen(false)}
								>
									Close
								</button>
							</div>
						</div>
					</Transition.Child>
				</div>
			</Dialog>
		</Transition>
	)
}