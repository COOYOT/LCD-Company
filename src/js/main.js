const nav = document.querySelector('.nav__links-box')
const navLinks = document.querySelectorAll('.nav__link')
const navBtn = document.querySelector('.hamburger')
const sections = document.querySelectorAll('.scrollspy')
const linksBox = document.querySelector('.nav__links-box')

const navToggle = () => {
	navBtn.classList.toggle('is-active')
	nav.classList.toggle('active-nav')
	document.body.classList.toggle('sticky-body')

	if (navBtn.classList.contains('is-active')) {
		navBtn.setAttribute('aria-expanded', 'true')
		linksBox.setAttribute('aria-hidden', 'false')
	} else {
		navBtn.setAttribute('aria-expanded', 'false')
		linksBox.setAttribute('aria-hidden', 'true')
	}
}

const navReset = () => {
	navBtn.classList.remove('is-active')
	nav.classList.remove('active-nav')
	document.body.classList.remove('sticky-body')
	navBtn.setAttribute('aria-expanded', 'false')
}

const options = {
	rootMargin: '-300px',
}

const handleScrollspy = entries => {
	entries.forEach(entry => {
		const activeNav = linksBox.querySelector(`a[href='#${entry.target.id}']`)

		if (entry.isIntersecting) {
			navLinks.forEach(item => item.classList.remove('nav__link--active'))
			activeNav.classList.add('nav__link--active')
		}
	})
}

const observer = new IntersectionObserver(handleScrollspy, options)

sections.forEach(section => {
	observer.observe(section)
})

navBtn.addEventListener('click', navToggle)
navLinks.forEach(el => {
	el.addEventListener('click', navReset)
})
