
if (location.hostname === 'www.nytimes.com') {
	// Rebuild DOM, so nytimes scripts refer to non-existent elements
	// document.body.innerHTML = document.body.innerHTML
} else if (location.hostname === 'www.chess.com' &&
		   location.pathname === '/live') {

	const injectCss = (css) => {
	    const style = document.createElement('style');
	    style.innerHTML = css
	    document.head.appendChild(style);
	}

	const toggleRemoved = (selector) => {
		let add = true

		return (() => {
			for (const element of document.querySelectorAll(selector)) {
				if (add) {
					element.classList.add('removed')
				} else {
					element.classList.remove('removed')
				}
			}

			add = !add
		})
	}

	const toggleWorst = toggleRemoved(`

		#sb,
		.sidebar-tabset.sidebar-tabsetBottom,
		.board-layout-controls

	`)

	const toggleBad = toggleRemoved(`

		.tabset-nav-component,
		.grudge-score-component,
		.user-avatar-img.board-player-default-userAvatar,
		.user-tagline-component,
		/* .captured-pieces, */
			/* careful contains piece advantage */
		.game-buttons-component

	`)

	injectCss(`
		.removed {
			display: none !important;
		}
	`)

	const showHelp = () => {
		alert(`Shortcuts:
1 - hide really really stuff
2 - hide ugly stuff
? - show this help menu`)
	}

	document.addEventListener('keypress', (e) => {
		if (![ 'input', 'textarea' ].includes(e.target.tagName.toLowerCase())) {
			if (e.key === '1') {
				toggleWorst()
			} else if (e.key === '2') {
				toggleBad()
			} else if (e.key === '?') {
				showHelp()
			}
		}
	})

	showHelp()

}
