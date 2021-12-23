import PropTypes from "prop-types";

export const Button = ({ variant, children }) => {
	return (
		<button className={`button button--${variant}`}>
			{children}
		</button>
	)
};

Button.defaultProps = {
	variant: 'primary',
}

Button.propTypes = {
	variant: PropTypes.string,
	children: PropTypes.any,
};
