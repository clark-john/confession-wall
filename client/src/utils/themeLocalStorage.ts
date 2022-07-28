const saveTheme = (isDark: boolean) => {
	if (isDark) {
		localStorage.setItem("theme", "dark")
	} else {
		localStorage.setItem("theme", "light")
	}
}	

const getTheme = (): boolean | null => {
	const theme = localStorage.getItem("theme")
	if (theme == "light") {
		return false
	} else if (theme == "dark"){
		return true
	} else {
		return null
	}
}

export {
	saveTheme,
	getTheme
}