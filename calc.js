// Create the main results table and header row
document.write("<table>");
document.write("<tr><th>Number 1</th><th>Operator</th><th>Number 2</th><th>Result</th></tr>");

// Array to store only VALID numeric results (for summary calculations later)
let results = [];

// Loop continues until user clicks Cancel
while (true) {

    // Prompt user for first number
    let x = prompt("Enter first number (Cancel to stop):");
    if (x === null) break; // Exit loop if Cancel clicked

    // Prompt user for operator
    let operator = prompt("Enter operator (+, -, *, /, %):");
    if (operator === null) break; // Exit loop if Cancel clicked

    // Prompt user for second number
    let y = prompt("Enter second number:");
    if (y === null) break; // Exit loop if Cancel clicked

    let result; // Variable to store the computation result

    // Convert input strings to numbers
    let numX = Number(x);
    let numY = Number(y);

    // Check if inputs are valid numbers
    if (isNaN(numX) || isNaN(numY)) {
        result = "Wrong input number"; // Error message for invalid numbers
    }
    else {
        // Perform operation based on operator entered
        switch (operator) {

            case "+":
                result = numX + numY;
                break;

            case "-":
                result = numX - numY;
                break;

            case "*":
                result = numX * numY;
                break;

            case "/":
                // Prevent division by zero
                result = (numY !== 0) ? numX / numY : "Division by zero error";
                break;

            case "%":
                result = numX % numY;
                break;

            default:
                // Invalid operator entered
                result = "Computation error";
        }

        // Only store valid numeric results (exclude errors)
        if (typeof result === "number") {
            results.push(result);
        }
    }

    // Add a row to the results table
    document.write(
        "<tr><td>" + x + "</td><td>" + operator + "</td><td>" + y + "</td><td>" + result + "</td></tr>"
    );
}

// Close the main table
document.write("</table>");


// Create Summary Table
// Only build summary if there are valid results
if (results.length > 0) {

    // Calculate total using reduce()
    let total = results.reduce((a, b) => a + b, 0);

    // Find minimum and maximum values
    let min = Math.min(...results);
    let max = Math.max(...results);

    // Calculate average
    let avg = total / results.length;

    // Display summary table
    document.write("<h3>Summary</h3>");
    document.write("<table>");
    document.write("<tr><th>Minimum</th><th>Maximum</th><th>Average</th><th>Total</th></tr>");
    document.write(
        "<tr><td>" + min + "</td><td>" + max + "</td><td>" +
        avg.toFixed(2) + "</td><td>" + total + "</td></tr>"
    );
    document.write("</table>");
}
else {
    // If no valid results were entered
    document.write("<p>No valid calculations entered.</p>");
}
