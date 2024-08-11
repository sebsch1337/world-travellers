interface BoxProps {
	children: React.ReactNode;
}

export const Box = ({ children }: BoxProps) => {
	return <article className="bg-celeste p-4 w-full h-full relative">{children}</article>;
};

interface BoxTitleProps {
	children: React.ReactNode;
}

export const BoxTitle = ({ children }: BoxTitleProps) => {
	return <h3 className="font-semibold mb-2">{children}</h3>;
};

interface BoxTextProps {
	children: React.ReactNode;
}

export const BoxText = ({ children }: BoxTextProps) => {
	return <p className="text-sm hyphens-auto">{children}</p>;
};
