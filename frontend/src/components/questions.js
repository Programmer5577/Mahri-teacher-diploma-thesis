// questions.js
const questions = {
  javascript: [
    {
      question: "JavaScript näme?",
      options: [
        "Programmirleme dili",
        "Stil dizaýn dili",
        "Bellik dili",
        "Maglumatlar bazasy",
      ],
      correctAnswer: "Programmirleme dili",
    },
    {
      question: "JavaScript haýsy kompaniýa tarapyndan döredildi?",
      options: ["Microsoft", "Mozilla", "Netscape", "Oracle"],
      correctAnswer: "Netscape",
    },
    {
      question: "'DOM' näme diýmegi aňladýar?",
      options: [
        "Resminama Obýekt Modeli",
        "Obýekt Görnüş Dolandyryşy",
        "Sanly Ulgam Modeli",
        "Şahsy Kompýuter Ulgam Tertibi",
      ],
      correctAnswer: "Resminama Obýekt Modeli",
    },
    {
      question: "JavaScript-de kommentariýalar üçin haýsy nyşan ulanylýar?",
      options: ["//", "/*", "<!--", "#"],
      correctAnswer: "//",
    },
    {
      question: "ES6-da üýtgeýjini yglan etmek üçin haýsy açar söz ulanylýar?",
      options: ["var", "let", "const", "int"],
      correctAnswer: "let",
    },
    {
      question:
        "Süzgüçli görnüşde teksti butluga öwürmek üçin haýsy usul ulanylýar?",
      options: ["parseInt()", "parseFloat()", "Number()", "String()"],
      correctAnswer: "parseInt()",
    },
    {
      question: "JavaScript-de HTML elementlerine nädip girip bolýar?",
      options: [
        "getElementById()",
        "querySelector()",
        "getElementsByClassName()",
        "Bularyň hemmesi",
      ],
      correctAnswer: "Bularyň hemmesi",
    },
    {
      question: "'typeof NaN' näme çykdajy berýär?",
      options: ["kesgitlemesiz", "san", "NaN", "obýekt"],
      correctAnswer: "san",
    },
    {
      question:
        "Belirli bir aralykdan soň funksiýa çagyrmak üçin haýsy JavaScript funksiýasy ulanylýar?",
      options: ["setInterval()", "setTimeout()", "setIntervalLoop()", "wait()"],
      correctAnswer: "setTimeout()",
    },
    {
      question:
        "JavaScript-de hemişelik üýtgeýji üçin haýsy açar söz ulanylýar?",
      options: ["var", "const", "let", "define"],
      correctAnswer: "const",
    },
    {
      question: "JavaScript-de 'this' näme?",
      options: ["Üýtgeýji", "Obýekt", "Funksiýa", "Häzirki obýekte salgylanma"],
      correctAnswer: "Häzirki obýekte salgylanma",
    },
    {
      question: "JSON näme diýmegi aňladýar?",
      options: [
        "JavaScript Obýekt Notasiýasy",
        "Java Ýagdaý Obýekt Notasiýasy",
        "JavaScript Uýgunlaşma Notasiýasy",
        "Java Seriýalaşma Obýekti",
      ],
      correctAnswer: "JavaScript Obýekt Notasiýasy",
    },
    {
      question: "JavaScript-de wada näme?",
      options: [
        "Ýerleşýän ýeri",
        "Asinkron amallar üçin obýekt",
        "Funksiýa",
        "Döwran",
      ],
      correctAnswer: "Asinkron amallar üçin obýekt",
    },
    {
      question: "JavaScript-de '===' näme diýmegi aňladýar?",
      options: ["Bellige almak", "Deňlik", "Strict deňlik", "Deň däl"],
      correctAnswer: "Strict deňlik",
    },
    {
      question: "Massiwiň ahyryna element goşmak üçin haýsy usul ulanylýar?",
      options: ["push()", "pop()", "shift()", "unshift()"],
      correctAnswer: "push()",
    },
    {
      question: "JavaScript-de dogry funksiýa sintaksisi näme?",
      options: [
        "function myFunction()",
        "def myFunction()",
        "function:myFunction()",
        "fun myFunction()",
      ],
      correctAnswer: "function myFunction()",
    },
    {
      question: "'0.1 + 0.2 == 0.3' näme bolýar?",
      options: ["hakykat", "ýalan", "kesgitlemesiz", "NaN"],
      correctAnswer: "ýalan",
    },
    {
      question: "'let' üýtgeýjisiniň ulanyş çäkleri näme?",
      options: ["Global", "Blok", "Funksiýa", "Ýerli"],
      correctAnswer: "Blok",
    },
    {
      question:
        "Obýekti JSON teksti görnüşine öwürmek üçin haýsy usul ulanylýar?",
      options: [
        "JSON.parse()",
        "JSON.stringify()",
        "objectToString()",
        "toJsonString()",
      ],
      correctAnswer: "JSON.stringify()",
    },
    {
      question: "ES6-da modullary import etmek üçin haýsy açar söz ulanylýar?",
      options: ["require", "import", "include", "load"],
      correctAnswer: "import",
    },
  ],
  python: [
    {
      question: "What is Python?",
      options: [
        "Programming Language",
        "Styling Language",
        "Markup Language",
        "Database",
      ],
      correctAnswer: "Programming Language",
    },
    {
      question: "Who developed Python?",
      options: [
        "Guido van Rossum",
        "Brendan Eich",
        "Mark Zuckerberg",
        "Bill Gates",
      ],
      correctAnswer: "Guido van Rossum",
    },
    {
      question: "Which command is used to install packages in Python?",
      options: ["install", "pip", "npm", "apt"],
      correctAnswer: "pip",
    },
    {
      question: "What is a list in Python?",
      options: [
        "Mutable data type",
        "Immutable data type",
        "A function",
        "A loop",
      ],
      correctAnswer: "Mutable data type",
    },
    {
      question: "What keyword is used for functions in Python?",
      options: ["function", "func", "define", "def"],
      correctAnswer: "def",
    },
    {
      question: "Which of the following is an immutable data type in Python?",
      options: ["list", "set", "tuple", "dict"],
      correctAnswer: "tuple",
    },
    {
      question: "Which of the following data types is not built-in in Python?",
      options: ["list", "tuple", "queue", "set"],
      correctAnswer: "queue",
    },
    {
      question: "What does the 'len' function return in Python?",
      options: [
        "The length of a string",
        "The number of characters in a file",
        "The number of items in a list",
        "All of the above",
      ],
      correctAnswer: "All of the above",
    },
    {
      question: "How do you create a comment in Python?",
      options: ["//", "#", "/* */", "<!-- -->"],
      correctAnswer: "#",
    },
    {
      question:
        "What will be the output of the following code: print(2 + 3 * 5)?",
      options: ["17", "25", "15", "5"],
      correctAnswer: "17",
    },
    {
      question:
        "Which of the following is used to define a dictionary in Python?",
      options: ["{}", "[]", "()", "<>"],
      correctAnswer: "{}",
    },
    {
      question: "Which of the following is used to catch exceptions in Python?",
      options: ["try/except", "catch/throw", "error/handle", "if/else"],
      correctAnswer: "try/except",
    },
    {
      question: "What is the correct syntax to import a module in Python?",
      options: ["import module", "include module", "use module", "load module"],
      correctAnswer: "import module",
    },
    {
      question:
        "Which function is used to get the type of a variable in Python?",
      options: ["type()", "id()", "isinstance()", "gettype()"],
      correctAnswer: "type()",
    },
    {
      question:
        "Which of the following is the correct way to initialize a set in Python?",
      options: ["[]", "{}", "()", "set[]"],
      correctAnswer: "{}",
    },
    {
      question: "What is the purpose of the 'self' keyword in Python?",
      options: [
        "To refer to the instance of the class",
        "To refer to the class itself",
        "To define a static method",
        "None of the above",
      ],
      correctAnswer: "To refer to the instance of the class",
    },
    {
      question: "What does the 'break' statement do in Python?",
      options: [
        "Exits the current loop",
        "Pauses the program",
        "Stops the function",
        "None of the above",
      ],
      correctAnswer: "Exits the current loop",
    },
    {
      question: "Which operator is used for exponentiation in Python?",
      options: ["^", "*", "**", "//"],
      correctAnswer: "**",
    },
    {
      question: "What will the following code print? print('Python'[-1])",
      options: ["P", "y", "n", "Error"],
      correctAnswer: "n",
    },
    {
      question: "Which of the following can be used to open a file in Python?",
      options: ["open()", "read()", "write()", "load()"],
      correctAnswer: "open()",
    },
    {
      question:
        "What is the default return value of a function in Python that does not have a return statement?",
      options: ["None", "0", "False", "null"],
      correctAnswer: "None",
    },
  ],
  c: [
    {
      question: "Who is known as the father of the C programming language?",
      options: [
        "Bjarne Stroustrup",
        "Dennis Ritchie",
        "James Gosling",
        "Ken Thompson",
      ],
      correctAnswer: "Dennis Ritchie",
    },
    {
      question:
        "Which header file is used for input and output functions in C?",
      options: ["stdio.h", "stdlib.h", "string.h", "math.h"],
      correctAnswer: "stdio.h",
    },
    {
      question: "What is the size of a `char` in C?",
      options: ["1 byte", "2 bytes", "4 bytes", "8 bytes"],
      correctAnswer: "1 byte",
    },
    {
      question: "Which of the following is used to declare a constant in C?",
      options: ["const", "final", "immutable", "define"],
      correctAnswer: "const",
    },
    {
      question: "Which operator is used to access members of a structure in C?",
      options: [".", "->", "&", "::"],
      correctAnswer: ".",
    },
    {
      question: "What does the `sizeof` operator do in C?",
      options: [
        "Returns the size of a variable",
        "Returns the value of a variable",
        "Declares the size of a variable",
        "Allocates memory for a variable",
      ],
      correctAnswer: "Returns the size of a variable",
    },
    {
      question: "Which function is used to read a string in C?",
      options: ["scanf()", "gets()", "fgets()", "read()"],
      correctAnswer: "fgets()",
    },
    {
      question: "Which of the following is a valid C string literal?",
      options: ["'Hello'", "'Hello World!'", '"Hello World!"', "Hello World!"],
      correctAnswer: '"Hello World!"',
    },
    {
      question: "Which of the following is true about pointers in C?",
      options: [
        "A pointer holds the memory address of a variable",
        "A pointer is used to store variables directly",
        "A pointer cannot be null",
        "Pointers are only used with arrays",
      ],
      correctAnswer: "A pointer holds the memory address of a variable",
    },
    {
      question:
        "What does the `return 0;` statement indicate in the `main()` function?",
      options: [
        "Successful execution of the program",
        "Error in the program",
        "Program is incomplete",
        "Execution of the program is delayed",
      ],
      correctAnswer: "Successful execution of the program",
    },
    {
      question: "Which function is used to allocate dynamic memory in C?",
      options: ["malloc()", "new()", "calloc()", "alloc()"],
      correctAnswer: "malloc()",
    },
    {
      question:
        "What is the default return type of the `main()` function in C?",
      options: ["int", "void", "char", "float"],
      correctAnswer: "int",
    },
    {
      question: "What is the purpose of the `break` statement in C?",
      options: [
        "Terminate the program",
        "Exit the current loop or switch",
        "End a function",
        "Jump to the start of the loop",
      ],
      correctAnswer: "Exit the current loop or switch",
    },
    {
      question: "Which of the following is used to end a comment in C?",
      options: ["*/", "//", "#", ":END"],
      correctAnswer: "*/",
    },
    {
      question: 'What is the output of `printf("%d", 5 + 3 * 2);` in C?',
      options: ["16", "11", "8", "5"],
      correctAnswer: "11",
    },
    {
      question: "Which function is used to compare two strings in C?",
      options: ["strcmp()", "strcomp()", "compare()", "strcompare()"],
      correctAnswer: "strcmp()",
    },
    {
      question:
        "What is the correct way to declare a pointer to an integer in C?",
      options: ["int *ptr;", "pointer int ptr;", "ptr int;", "int ptr*;"],
      correctAnswer: "int *ptr;",
    },
    {
      question: "What is the maximum size of an array in C?",
      options: ["Depends on the system memory", "1000", "1024", "2048"],
      correctAnswer: "Depends on the system memory",
    },
    {
      question: "Which of the following is not a valid C data type?",
      options: ["int", "float", "string", "double"],
      correctAnswer: "string",
    },
    {
      question: "What does the `continue` statement do in a loop in C?",
      options: [
        "Exits the loop",
        "Skips the current iteration and proceeds to the next one",
        "Returns to the start of the program",
        "Repeats the loop",
      ],
      correctAnswer: "Skips the current iteration and proceeds to the next one",
    },
    {
      question: "Which of the following is used to declare a structure in C?",
      options: ["struct", "class", "structure", "array"],
      correctAnswer: "struct",
    },
  ],
  cplusplus: [
    {
      question: "Who created C++?",
      options: [
        "Bjarne Stroustrup",
        "Dennis Ritchie",
        "James Gosling",
        "Ken Thompson",
      ],
      correctAnswer: "Bjarne Stroustrup",
    },
    {
      question: "What is the extension for a C++ source file?",
      options: [".c", ".cpp", ".class", ".java"],
      correctAnswer: ".cpp",
    },
    {
      question: "What is the correct syntax for declaring a variable in C++?",
      options: ["var x = 10;", "int x = 10;", "int 10 = x;", "x : int = 10;"],
      correctAnswer: "int x = 10;",
    },
    {
      question: "Which operator is used to access members of a class in C++?",
      options: ["->", ".", "&", "|"],
      correctAnswer: ".",
    },
    {
      question:
        "Which of the following is the correct syntax to declare a pointer in C++?",
      options: ["int *p;", "int p*;", "pointer int p;", "p : int*;"],
      correctAnswer: "int *p;",
    },
    {
      question:
        "Which header file is required to use input/output functions in C++?",
      options: ["<stdio.h>", "<iostream>", "<stdlib.h>", "<math.h>"],
      correctAnswer: "<iostream>",
    },
    {
      question:
        "Which of the following is a feature of object-oriented programming?",
      options: [
        "Encapsulation",
        "Inheritance",
        "Polymorphism",
        "All of the above",
      ],
      correctAnswer: "All of the above",
    },
    {
      question: "Which of the following is NOT a C++ access specifier?",
      options: ["private", "public", "protected", "accessible"],
      correctAnswer: "accessible",
    },
    {
      question: "What does the `new` operator do in C++?",
      options: [
        "Allocates memory for an object",
        "Deallocates memory for an object",
        "Prints an object",
        "None of the above",
      ],
      correctAnswer: "Allocates memory for an object",
    },
    {
      question:
        "Which of the following is used for dynamic memory allocation in C++?",
      options: ["malloc", "calloc", "new", "free"],
      correctAnswer: "new",
    },
    {
      question:
        "What is the default value of an uninitialized static variable in C++?",
      options: ["0", "null", "undefined", "garbage value"],
      correctAnswer: "0",
    },
    {
      question:
        "Which of the following is the correct syntax for creating a constructor in C++?",
      options: [
        "void Constructor() {}",
        "Constructor() {}",
        "Class() {}",
        "Class Constructor() {}",
      ],
      correctAnswer: "Constructor() {}",
    },
    {
      question: "Which of the following is a valid C++ loop?",
      options: ["while", "for", "do-while", "All of the above"],
      correctAnswer: "All of the above",
    },
    {
      question: "What is the purpose of the `virtual` keyword in C++?",
      options: [
        "Defines a virtual function",
        "Makes a class abstract",
        "Makes a function call polymorphic",
        "None of the above",
      ],
      correctAnswer: "Makes a function call polymorphic",
    },
    {
      question: "What does the `delete` operator do in C++?",
      options: [
        "Deallocates memory for a dynamic object",
        "Allocates memory for a dynamic object",
        "Deletes a function",
        "None of the above",
      ],
      correctAnswer: "Deallocates memory for a dynamic object",
    },
    {
      question: "What is the purpose of the `friend` keyword in C++?",
      options: [
        "To define a function that has access to private data",
        "To define a private method",
        "To define a private class",
        "To define an external function",
      ],
      correctAnswer: "To define a function that has access to private data",
    },
    {
      question: "Which operator is used for dynamic memory allocation in C++?",
      options: ["malloc()", "new", "calloc()", "realloc()"],
      correctAnswer: "new",
    },
    {
      question: "What is a pure virtual function in C++?",
      options: [
        "A function with no implementation in the base class",
        "A function that cannot be overridden",
        "A function with default arguments",
        "A function with multiple return values",
      ],
      correctAnswer: "A function with no implementation in the base class",
    },
    {
      question:
        "Which of the following is the correct way to define a C++ class?",
      options: [
        "class MyClass {}",
        "class MyClass[] {}",
        "MyClass class {}",
        "None of the above",
      ],
      correctAnswer: "class MyClass {}",
    },
    {
      question: "Which of the following types can be a friend function in C++?",
      options: [
        "Function",
        "Class",
        "Both function and class",
        "None of the above",
      ],
      correctAnswer: "Both function and class",
    },
  ],
  go: [
    {
      question: "Who developed the Go programming language?",
      options: [
        "Robert Griesemer, Rob Pike, and Ken Thompson",
        "Dennis Ritchie",
        "Guido van Rossum",
        "James Gosling",
      ],
      correctAnswer: "Robert Griesemer, Rob Pike, and Ken Thompson",
    },
    {
      question: "What symbol is used for declaring a variable in Go?",
      options: ["=", "var", ":", ":="],
      correctAnswer: ":=",
    },
    {
      question: "Which of the following is used for error handling in Go?",
      options: ["try-catch", "throws", "defer", "panic"],
      correctAnswer: "panic",
    },
    {
      question: "What is the default value of an uninitialized variable in Go?",
      options: ["null", "0", "undefined", "nil"],
      correctAnswer: "nil",
    },
    {
      question:
        "What is the built-in data type for a single precision floating-point number in Go?",
      options: ["float32", "float64", "double", "float"],
      correctAnswer: "float32",
    },
    {
      question: "Which function is used to start a new Goroutine?",
      options: ["go()", "start()", "goroutine()", "run()"],
      correctAnswer: "go()",
    },
    {
      question: "What is the purpose of the 'defer' keyword in Go?",
      options: [
        "It defers the execution of a function to the end of the program",
        "It defers the execution of a function until the program starts",
        "It defers the execution of a function until the main function returns",
        "It defers the execution of a function until the goroutine ends",
      ],
      correctAnswer:
        "It defers the execution of a function until the goroutine ends",
    },
    {
      question: "What is the 'main' function in Go?",
      options: [
        "The function that handles the program’s entry point",
        "The function for memory allocation",
        "The function for error handling",
        "The function for user input",
      ],
      correctAnswer: "The function that handles the program’s entry point",
    },
    {
      question: "Which package in Go is used to format I/O operations?",
      options: ["fmt", "io", "os", "sys"],
      correctAnswer: "fmt",
    },
    {
      question: "Which of the following types is NOT a built-in Go type?",
      options: ["string", "float", "map", "channel"],
      correctAnswer: "float",
    },
    {
      question:
        "Which of the following statements is true about Go interfaces?",
      options: [
        "An interface in Go is implicitly implemented by a type",
        "A type must explicitly declare that it implements an interface",
        "Go does not support interfaces",
        "A type can implement multiple interfaces",
      ],
      correctAnswer: "An interface in Go is implicitly implemented by a type",
    },
    {
      question: "How do you declare a constant in Go?",
      options: [
        "const PI = 3.14",
        "constant PI = 3.14",
        "let PI = 3.14",
        "PI := 3.14",
      ],
      correctAnswer: "const PI = 3.14",
    },
    {
      question: "Which type is used for an immutable value in Go?",
      options: ["constant", "var", "static", "immutable"],
      correctAnswer: "constant",
    },
    {
      question: "What is the use of the 'select' statement in Go?",
      options: [
        "To handle multiple cases of channel operations",
        "To select the best channel",
        "To select between multiple loops",
        "To handle multiple arrays",
      ],
      correctAnswer: "To handle multiple cases of channel operations",
    },
    {
      question:
        "Which of the following Go data types does NOT support comparison operators?",
      options: ["int", "float64", "string", "slice"],
      correctAnswer: "slice",
    },
    {
      question: "How do you declare a pointer variable in Go?",
      options: ["var ptr *int", "ptr int", "pointer int", "ptr := *int"],
      correctAnswer: "var ptr *int",
    },
    {
      question:
        "What will happen if you try to send data to a closed channel in Go?",
      options: [
        "The program will crash",
        "It will ignore the data",
        "It will panic",
        "The program will automatically reopen the channel",
      ],
      correctAnswer: "It will panic",
    },
    {
      question:
        "What keyword is used to stop a loop or switch statement in Go?",
      options: ["break", "exit", "stop", "continue"],
      correctAnswer: "break",
    },
    {
      question: "How do you handle multiple return values in Go?",
      options: [
        "Using tuples",
        "Using arrays",
        "Using structs",
        "Using multiple variables",
      ],
      correctAnswer: "Using multiple variables",
    },
    {
      question: "What will happen if a Go function does not return a value?",
      options: [
        "It will throw an error",
        "It will return 'nil'",
        "It will return a default value",
        "It will return nothing",
      ],
      correctAnswer: "It will return nothing",
    },
  ],
};

export default questions;
