# Simple-Calculator
This is HTML,CSS and JavaScript code for a basic calculator.

The HTML defines a container element with a class of "calculator" that contains a display element with two child elements - one with a data attribute of "prev-operand" and a class of "prevOperator" and another with a data attribute of "curr-operand" and a class of "currOperator". The calculator also contains 18 button elements, each with its own data attribute indicating its functionality (number, operation, equals, delete, all-clear). The first button spans two columns using the "span-two" class.

The CSS styles the calculator container and buttons, setting a background color gradient, font size, and border. The display element is styled with a black background color and aligned to the right, with its child elements styled with white and light gray font colors. The "span-two" class is used to span two columns for the all-clear and equals buttons. The hover state of the buttons changes the background color.

The JavaScript creates a class called "Calculator" that takes in two arguments - the text elements that display the previous and current operands.

The "Calculator" class contains several methods:

"clear": sets the current operand, previous operand, and operation to undefined.
"delete": deletes the last character from the current operand.
"appendNumber": appends the provided number to the current operand, unless it is a decimal point and the current operand already contains a decimal point.
"choseOperation": stores the current operation and current operand as the previous operand, and clears the current operand to prepare for the next input. If there is already a previous operand, it calls the "compute" method to calculate the result.
"compute": performs the calculation based on the previous operand, current operand, and selected operation.
"getDisplayNumber": formats the number to include commas for thousands and rounds to zero decimal places.
"updateDisplay": updates the text elements to display the current and previous operands and the selected operation.
The code also creates several event listeners for the number buttons, operation buttons, equals button, clear button, and delete button. When a button is clicked, the corresponding method of the "Calculator" class is called, and the display is updated using the "updateDisplay" method.
