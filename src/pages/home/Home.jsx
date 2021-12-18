import { Button } from "../../components/button/Button";
import { Footer } from "../../components/footer/Footer";
import { Header } from "../../components/header/Header";

export const Home = () => {
	return (
		<>
			<Header />
			<main role="main" style={{padding: '60px'}}>
				<h2>Välkommen till startsidan</h2>
				<p>Ipsum anim id voluptate nostrud mollit cillum. Eu cillum non fugiat laborum qui laboris dolore pariatur in Lorem pariatur ullamco officia laboris. Laborum aute labore nisi qui.</p>
				<p>Nulla velit voluptate velit adipisicing consequat excepteur. Commodo Lorem dolor et reprehenderit dolor duis sunt anim labore dolor est cupidatat. Veniam qui ullamco consequat deserunt mollit dolore nisi do mollit aute enim. Proident laboris sit laborum tempor ullamco minim proident est qui qui ex. Lorem anim veniam adipisicing deserunt et fugiat minim elit proident fugiat ut consequat est deserunt.</p>
				<p>Nulla non ut cupidatat eiusmod qui. Excepteur aute voluptate veniam mollit in aute laborum Lorem fugiat amet duis nostrud enim excepteur. Ullamco sint nulla elit consectetur Lorem esse nisi sit consectetur proident Lorem. Ea quis consequat incididunt do voluptate.</p>
				<h3>Underrubrik</h3>
				<p>Sunt non aliqua labore ipsum pariatur est mollit Lorem aliquip velit excepteur aliquip amet. Incididunt sunt sit veniam enim anim labore in in consectetur enim excepteur dolore eiusmod. Do officia non ut tempor est non. Laboris aliquip ad adipisicing velit veniam cupidatat exercitation incididunt consequat enim dolor. Officia deserunt ullamco aute deserunt. Sit aliqua commodo reprehenderit Lorem minim ea esse ex sint eu.</p>
				<p>Tempor consequat nisi proident amet quis voluptate irure quis fugiat commodo do labore. Id nostrud ea Lorem cupidatat veniam reprehenderit pariatur. Ipsum anim ipsum aliqua enim consequat et Lorem deserunt officia irure consequat. Cillum id occaecat ea cupidatat enim cupidatat anim exercitation occaecat reprehenderit. Ea consectetur commodo ullamco qui aliquip sunt do minim enim ex. Nostrud mollit quis laborum sit duis do mollit culpa anim. Minim dolore id non id ea proident.</p>
				<Button>Läs mer</Button>
			</main>
			<Footer />
		</>
	)
};
