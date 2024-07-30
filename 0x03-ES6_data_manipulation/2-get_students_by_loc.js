export default function getStudentsByLocation(studentList, city) {
	const specificLocations = studentList.filter(studentLocation => studentLocation === city);
	return specificLocations;
}

