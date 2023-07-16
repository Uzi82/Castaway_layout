const buttons = document.querySelector('.nav__buttons')
const nav = document.querySelector('.nav')
const menu = document.createElement('div')
menu.className = 'nav__menu'
const lines = []
for(let i=0; i<3; i++) {
	let el = document.createElement('div')
	el.className = 'nav__menu-line'
	lines.push(el)
}
lines.map(el=>{
	menu.append(el)
})
if(document.body.clientWidth < 767) {
	buttons.remove()
	nav.append(menu)
}