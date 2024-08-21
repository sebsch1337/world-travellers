export interface Message {
	id: string;
	text: string;
	sender: "user" | "bot";
	state: "success" | "failed";
}
