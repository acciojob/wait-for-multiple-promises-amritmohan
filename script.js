//your JS code here. If required.

document.addEventListener("DOMContentLoaded", function () {
	const output = document.getElementById("output");

	// this will show Loading.... initially 
	output.innerHTML = `<tr><td colspan="2" class="text-center">Loading...</td></tr>`;

	function createPromise(index) {
		const delay = Math.random() * 2000 + 1000;
		return newPromise((resolve) => {
			setTimeout(() => {
				resolve({promise: `Promise ${index}`, time: delay/1000});
			}, delay);
		});
	}

	const startTime = performance.now();
	const promises = [createPromise(1), createPromise(2), createPromise(3)];

	Promise.all(promises).then((results) => {
		let endTime = performance.now();

		let totalTime = (endTime - startTime) / 1000;

		// for removing loading...
		outputTable.innerHTML = "";

		// Add rows for each resolved promise
		results.forEach((result) => {
			let row = `<tr><td>${result.promise}</td><td>${result.time.toFixed(3)}</td></tr>`;
			outputTable.innerHTML += row; 
		});

		// Add total time row
        const totalRow = `<tr class="fw-bold table-success"><td>Total</td><td>${totalTime.toFixed(3)}</td></tr>`;
        outputTable.innerHTML += totalRow;
	});
});