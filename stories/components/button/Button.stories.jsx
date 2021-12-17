import { Button } from "./Button";

export default {
	title: "Button",
	component: Button,
};

export const Primary = () => <Button>Knapp</Button>;
export const Secondary = () => <Button variant="secondary">Knapp</Button>;
export const Ghost = () => <Button variant="ghost">Knapp</Button>;
