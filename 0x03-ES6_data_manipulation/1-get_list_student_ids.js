export default function getListStudentIds(arrayObj) {
	if(!arrayObj.isArray()) {
		return [];
	}
	const arrayIds = arrayObj.map(obj => {
		return obj.id;
	}
	
	return arrayIds;
}

