import { cn } from "@/utils/cn";
import { Montserrat_Alternates } from "next/font/google";
const MontserratAlternates = Montserrat_Alternates({ subsets: ["latin"], weight: ["700"] });

interface TitleProps {
	children: React.ReactNode;
}
export const Title = ({ children }: TitleProps) => {
	return <div className={cn(MontserratAlternates.className, "text-center mb-8")}>{children}</div>;
};

interface MainTitleProps {
	children: React.ReactNode;
}
export const MainTitle = ({ children }: MainTitleProps) => <h1 className="text-3xl">{children}</h1>;

interface SubTitleProps {
	children: React.ReactNode;
}
export const SubTitle = ({ children }: SubTitleProps) => <h2 className="text-lg">{children}</h2>;
