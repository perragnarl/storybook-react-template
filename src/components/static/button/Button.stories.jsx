import { Button } from "./Button";

export default {
	title: "Components/Button",
	component: Button,
};

export const Default = () => <Button>Knapp</Button>;
export const Secondary = () => <Button variant="secondary">Knapp</Button>;
export const Ghost = () => <Button variant="ghost">Knapp</Button>;
