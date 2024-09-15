let quantity = 0;

// Task 1a: Function to ask user for a quantity and display it
function task_1a() {
    quantity = prompt("Enter a quantity:");
    if (quantity !== null && !isNaN(quantity)) {
        document.querySelector("#qty").innerHTML = `Quantity: ${quantity}`;
    } else {
        alert("Please enter a valid number.");
    }
}

// Task 1b: Function to ask user for a percentage and display the result
function task_1b() {
    if (quantity === 0) {
        alert("Please enter a quantity first.");
    } else {
        const percentage = parseFloat(prompt("Enter a percentage:"));
        if (!isNaN(percentage)) {
            const result = (quantity * (percentage / 100)).toFixed(2);
            document.querySelector("#task1Output").innerHTML = `${percentage}% of Quantity, ${quantity}, is ${result}`;
        } else {
            alert("Please enter a valid percentage.");
        }
    }
}

// Task 2: Function to convert grade to letter grade using if and switch
function task_2() {
    const grade = parseInt(prompt("Enter a grade between 1 and 100:"));

    // Using if
    let gradeLetter_if;
    if (grade >= 91) {
        gradeLetter_if = "A";
    } else if (grade >= 81) {
        gradeLetter_if = "B";
    } else if (grade >= 71) {
        gradeLetter_if = "C";
    } else if (grade >= 61) {
        gradeLetter_if = "D";
    } else {
        gradeLetter_if = "F";
    }

    // Using switch
    let gradeLetter_switch;
    switch (true) {
        case grade >= 91:
            gradeLetter_switch = "A";
            break;
        case grade >= 81:
            gradeLetter_switch = "B";
            break;
        case grade >= 71:
            gradeLetter_switch = "C";
            break;
        case grade >= 61:
            gradeLetter_switch = "D";
            break;
        default:
            gradeLetter_switch = "F";
    }

    document.querySelector("#task2Output").innerHTML = `(a) If statement: Your grade is ${gradeLetter_if}<br>(b) Switch statement: Your grade is ${gradeLetter_switch}`;
}

// Task 3: Function to loop through lines and display them in the console
function task_3() {
    const professor = prompt("Enter the punishing professor's name:");
    const line = prompt("Enter the line to write:");
    const times = parseInt(prompt("Enter the number of times:"));

    console.clear();
    for (let i = 1; i <= times; i++) {
        console.log(`${i}: ${line}`);
    }

    document.querySelector("#task3Output").innerHTML = `Professor ${professor} made you write the line ${times} times. Check the console for details.`;
}

// Task 4: Function to loop through lines and display them in the div using while loop
function task_4() {
    const professor = prompt("Enter the punishing professor's name:");
    const phrase = prompt("Enter the line to write:");
    const times = parseInt(prompt("Enter the number of times:"));
    let line = 1;
    let task4_str = "<ul>";

    while (line <= times) {
        task4_str += `<li>${line} ${phrase}</li>`;
        line++;
    }
    task4_str += "</ul>";
    document.querySelector("#task4Output").innerHTML = task4_str;
}

// Task 5: Function to loop through lines and display them in the div using arrow function
function task_5() {
    const professor = prompt("Enter the punishing professor's name:");
    const phrase = prompt("Enter the line to write:");
    const times = parseInt(prompt("Enter the number of times:"));

    const lineWriter = (times, phrase) => {
        let task5_str = "<ul>";
        for (let line = 1; line <= times; line++) {
            task5_str += `<li>${line} ${phrase}</li>`;
        }
        task5_str += "</ul>";
        return task5_str;
    }

    const meanProfessorTitle = professor => `<h1>${professor}</h1>`;

    let refToTask5Div = document.querySelector("#task5Output");
    refToTask5Div.innerHTML = meanProfessorTitle(professor);
    refToTask5Div.innerHTML += lineWriter(times, phrase);
}

// Task 6: Function to display times tables from 1 to 12 using different strategies
function task_6() {
    const delimiter = 12;

    // Using a nested loop
    const generateTablesNestedLoop = () => {
        let displayStr = "<h2>Strategy 1: Nested Loop</h2>";
        for (let firstFactor = 1; firstFactor <= delimiter; firstFactor++) {
            for (let secondFactor = 1; secondFactor <= delimiter; secondFactor++) {
                let product = firstFactor * secondFactor;
                displayStr += `${firstFactor} x ${secondFactor} = ${product} <br>`;
            }
            displayStr += "<br>--------------<br>";
        }
        return displayStr;
    };

    // Using a function call within a loop
    const timesTables = (firstFactor) => {
        let displayStr = "";
        for (let secondFactor = 1; secondFactor <= delimiter; secondFactor++) {
            let product = firstFactor * secondFactor;
            displayStr += `${firstFactor} x ${secondFactor} = ${product} <br>`;
        }
        displayStr += "<br>--------------<br>";
        return displayStr;
    };

    // Function to generate all times tables and handle display
    const displayAllTables = (delimiter) => {
        let fullDisplayStr = "<h2>Strategy 2: Function within Loop</h2>";
        for (let firstFactor = 1; firstFactor <= delimiter; firstFactor++) {
            fullDisplayStr += timesTables(firstFactor);
        }
        return fullDisplayStr;
    };

    // Function to generate all times tables using a function call and display label
    const generateTimesTablesUsingFunction = () => {
        let fullDisplayStr = "<h2>Strategy 3: Function from Within a Loop</h2>";
        const timesTables = (firstFactor) => {
            let displayStr = "";
            for (let secondFactor = 1; secondFactor <= delimiter; secondFactor++) {
                let product = firstFactor * secondFactor;
                displayStr += `${firstFactor} x ${secondFactor} = ${product} <br>`;
            }
            displayStr += "<br>--------------<br>";
            return displayStr;
        };
        for (let firstFactor = 1; firstFactor <= delimiter; firstFactor++) {
            fullDisplayStr += timesTables(firstFactor);
        }
        return fullDisplayStr;
    };

    // Adding new content to web page
    const tablesDiv = document.querySelector(".tables");
    tablesDiv.innerHTML = generateTablesNestedLoop() + displayAllTables(delimiter) + generateTimesTablesUsingFunction();

}

// Task #7: Hoisting
// a) Function Hoisting:
// Function declarations are hoisted to the top of their scope. This means that you can call a function before it is defined in the code.
// Example:
function task_7() {
    // Example code:
    console.log(greeting()); // Outputs: "Hello, world!"
    
    function greeting() {
        return "Hello, world!";
    }

    //b) Variable Hoisting:
    // Variable declarations are hoisted to the top of their scope. This means you can reference a variable before it is defined in the code.
    // Example code:
    console.log(myVar); // Outputs: undefined
    var myVar = "Hello!";
    console.log(myVar); // Outputs: "Hello!"

    // ECMAScript standards resolved the issue of hoisting by introducing `let` and `const` in ES6.
    // Unlike `var`, these declarations are not hoisted in a way that allows their use before declaration. They are in a "temporal dead zone" from the start of the block until the declaration is encountered.
    // This helps prevent bugs related to hoisting by ensuring variables are only accessible after they are declared.
}



