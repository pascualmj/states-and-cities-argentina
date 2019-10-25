const fs = require('fs')


/*
	_PROVINCIAS.JSON
*/

// Read file
function generateStates() {
	const rawData = fs.readFileSync('provincias.json')
	const data = JSON.parse(rawData)

	// Create new array
	const newData = []

	// Push desired data into new array
	data.provincias.forEach(provincia => {
		newData.push({
			id: provincia.id,
			name: provincia.iso_nombre
		})
	})

	// Generate and write new json with newData
	fs.writeFileSync('_provincias.json', JSON.stringify(newData, null, 2))
}

generateStates()

/*
	_CIUDADES.JSON
*/

// Read file
function generateCities() {
	const rawData = fs.readFileSync('localidades.json')
	const data = JSON.parse(rawData)

	// Create new array
	const newData = []

	// Push desired data into new array
	data["localidades-censales"].forEach(localidad => {
		newData.push({
			id: localidad.id,
			name: localidad.nombre,
			stateId: localidad.provincia.id
		})
	})

	// Generate and write new json with newData
	fs.writeFileSync('_ciudades.json', JSON.stringify(newData, null, 2))
}

generateCities()