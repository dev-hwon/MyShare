export default function getUUID() {
	let name = ''
	try {
		const id = window.applicationFramework.applicationManager.getOwnerApplication(document).getDescriptor().id.split('/')
		name = id[id.length - 1]
	} catch (err) {
		name = "template"
	}
	let uuid = window.localStorage.getItem(`${name}-uuid`)
	function s4 () {
		return Math.floor((1 + Math.random()) * 0x10000)
			.toString(16)
			.substring(1)
	}
	if (!uuid) {
		uuid = s4() + s4() + '-' + s4() + '-' + s4() + '-' + s4() + '-' + s4() + s4() + s4()
		window.localStorage.setItem(`${name}-uuid`, uuid)
	}
	return uuid
}
