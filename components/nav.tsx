type Props = {
	className?: string
}

const Nav: React.FC<Props> = (props) => {
	return (
		<nav className={props.className}>
			This is a Nav
		</nav>
	)
}

export default Nav
