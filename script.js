//your JS code here. If required.

document.addEventListener("DOMContentLoaded", function () {
    const output = document.getElementById("output");

    // Show "Loading..." initially
    output.innerHTML = `<tr id="loading"><td colspan="2" class="text-center">Loading...</td></tr>`;

    function createPromise(index) {
        const delay = Math.random() * 2000 + 1000; 
        return new Promise((resolve) => { 
            setTimeout(() => {
                resolve({ promise: `Promise ${index}`, time: delay / 1000 });
            }, delay);
        });
    }

    const startTime = performance.now();

    // Create 3 promises
    const promises = [createPromise(1), createPromise(2), createPromise(3)];

    // Wait for all promises to resolve
    Promise.all(promises).then((results) => {
        const endTime = performance.now();
        const totalTime = (endTime - startTime) / 1000; 

        // Remove "Loading..." row
        document.getElementById("loading").remove();

        // Add rows for each resolved promise
        results.forEach((result) => {
            const row = `<tr><td>${result.promise}</td><td>${result.time.toFixed(3)}</td></tr>`;
            output.innerHTML += row; 
        });

        // Add total time row
        const totalRow = `<tr class="fw-bold table-success"><td>Total</td><td>${totalTime.toFixed(3)}</td></tr>`;
        output.innerHTML += totalRow;
    }).catch((error) => {
        console.error("Error in promise execution:", error);
    });
});
