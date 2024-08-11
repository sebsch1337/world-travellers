"use client";

import Autoplay from "embla-carousel-autoplay";
import useEmblaCarousel from "embla-carousel-react";

import { Box, BoxTitle, BoxText } from "@/components/box";

import { boxContent } from "@/data/box-content";

export const MarketingSwiper = () => {
	const [emblaRef] = useEmblaCarousel({ align: "start", loop: true }, [Autoplay({ delay: 10000 })]);

	const contentData = boxContent || [];

	return (
		<div
			className="overflow-hidden"
			ref={emblaRef}
		>
			<div className="flex gap-4">
				{contentData.map((content) => {
					return (
						<div
							key={content.title}
							className="flex-[0_0_100%]"
						>
							<Box>
								<BoxTitle>{content.title}</BoxTitle>
								<BoxText>{content.text}</BoxText>
							</Box>
						</div>
					);
				})}
			</div>
		</div>
	);
};
