function download_csv(data) {
	var csv = 'FieldID,FieldValue\n' +
		Object.entries(data).map(([key, value]) => `${key}, ${value}`).join('\n');

	var hiddenElement = document.createElement('a');
	hiddenElement.href = 'data:text/csv;charset=utf-8,' + encodeURI(csv);
	hiddenElement.target = '_blank';
	hiddenElement.download = 'people.csv';
	hiddenElement.click();
}
