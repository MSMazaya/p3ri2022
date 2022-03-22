import { AnimatePresence, motion } from 'framer-motion';
import React from 'react'
import { BiChevronDown } from 'react-icons/bi';
import { Faq } from 'types/faq';

type Props = {
	faqs: Faq[];
}

const Faq = (props: Props) => {
	return (
		<div className="p-5 mt-10">
			<h2 className="mid-title bold text-neutral-1000 text-center p-5">F.A.Q</h2>
			<div className="border-[1px] border-neutral-200 rounded-xl overflow-hidden">
				{
					props.faqs.map((faq, index) => <Accordion question={faq.question} answer={faq.answer} key={index} />)
				}
			</div>
		</div>
	)
}

type AccordionProps = {
	question: string;
	answer: string;
}

const Accordion = (props: AccordionProps) => {
	const [open, setOpen] = React.useState(false);
	const toggle = () => setOpen(!open);

	return (
		<div onClick={toggle} className="bg-neutral-100 p-5 cursor-pointer border-[1px] border-neutral-200 transition-all select-none">
			<div className="title-3 bold text-neutral-1000 flex justify-between">
				{props.question}
				<BiChevronDown className={`${open ? "transform rotate-180" : ""} transition-all`} />
			</div>
			<AnimatePresence>
				{
					open &&
					<motion.div
						key="answer"
						initial={{ opacity: 0 }}
						animate={{
							opacity: 1,
						}}
						transition={{ ease: "linear" }}
						className={`sub-headline font-medium text-neutral-900 py-5 transition-all`}>
						{props.answer}
					</motion.div>
				}
			</AnimatePresence>
		</div>
	)
}

export default Faq