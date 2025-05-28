const questions = [
  {
    category: "html",
    questions: [
      {
        question: "What does HTML stand for?",
        options: ["Hyper Text Markup Language", "Hyperlinks and Text Markup Language", "Home Tool Markup Language", "Hyper Text Manipulation Language"],
        correctAnswer: 0,
      },
      {
        question: "Which tag is used to define the root of an HTML document?",
        options: ["<html>", "<root>", "<head>", "<body>"],
        correctAnswer: 0,
      },
      {
        question: "Which element is used to create a hyperlink?",
        options: ["<a>", "<link>", "<href>", "<hyperlink>"],
        correctAnswer: 0,
      },
      {
        question: "What is the correct HTML element for inserting a line break?",
        options: ["<br>", "<lb>", "<break>", "<newline>"],
        correctAnswer: 0,
      },
      {
        question: "Which attribute specifies an alternate text for an image?",
        options: ["alt", "title", "src", "description"],
        correctAnswer: 0,
      },
      {
        question: "Which element is used to define the document's body?",
        options: ["<body>", "<main>", "<content>", "<document>"],
        correctAnswer: 0,
      },
      {
        question: "Which tag is used to create an unordered list?",
        options: ["<ul>", "<ol>", "<li>", "<list>"],
        correctAnswer: 0,
      },
      {
        question: "Which element is used for the largest heading?",
        options: ["<h1>", "<heading>", "<h6>", "<head>"],
        correctAnswer: 0,
      },
      {
        question: "Which tag is used to embed an image?",
        options: ["<img>", "<image>", "<picture>", "<src>"],
        correctAnswer: 0,
      },
      {
        question: "Which element defines a paragraph?",
        options: ["<p>", "<para>", "<paragraph>", "<text>"],
        correctAnswer: 0,
      },
      {
        question: "Which attribute is used to specify the URL in a hyperlink?",
        options: ["href", "src", "link", "url"],
        correctAnswer: 0,
      },
      {
        question: "Which element is used to create a table row?",
        options: ["<tr>", "<td>", "<th>", "<row>"],
        correctAnswer: 0,
      },
      {
        question: "Which tag is used to define metadata about an HTML document?",
        options: ["<meta>", "<data>", "<info>", "<head>"],
        correctAnswer: 0,
      },
      {
        question: "Which element is used to create a numbered list?",
        options: ["<ol>", "<ul>", "<li>", "<list>"],
        correctAnswer: 0,
      },
      {
        question: "Which tag is used to define a table cell?",
        options: ["<td>", "<cell>", "<tr>", "<tablecell>"],
        correctAnswer: 0,
      },
      {
        question: "Which element is used to define important text?",
        options: ["<strong>", "<important>", "<bold>", "<em>"],
        correctAnswer: 0,
      },
      {
        question: "Which tag is used to create a horizontal rule?",
        options: ["<hr>", "<line>", "<rule>", "<hrule>"],
        correctAnswer: 0,
      },
      {
        question: "Which element is used to define a section in a document?",
        options: ["<div>", "<section>", "<span>", "<block>"],
        correctAnswer: 0,
      },
      {
        question: "Which tag is used to create a form?",
        options: ["<form>", "<input>", "<submit>", "<fieldset>"],
        correctAnswer: 0,
      },
      {
        question: "Which attribute is used to make an input field required?",
        options: ["required", "mandatory", "validate", "necessary"],
        correctAnswer: 0,
      }
    ]
  },      //END OF THE HTML CATEGORY

  {
    category: "css",
    questions: [
      {
        question: "What does CSS stand for?",
        options: ["Cascading Style Sheets", "Creative Style Sheets", "Computer Style Sheets", "Colorful Style Sheets"],
        correctAnswer: 0,
      },
      {
        question: "Which property is used to change the text color?",
        options: ["color", "text-color", "font-color", "text-style"],
        correctAnswer: 0,
      },
      {
        question: "How do you select an element with id 'header'?",
        options: ["#header", ".header", "*header", "header"],
        correctAnswer: 0,
      },
      {
        question: "Which property controls the text size?",
        options: ["font-size", "text-size", "size", "font-style"],
        correctAnswer: 0,
      },
      {
        question: "How do you make text bold?",
        options: ["font-weight: bold", "font: bold", "text-weight: bold", "style: bold"],
        correctAnswer: 0,
      },
      {
        question: "Which property is used to change the background color?",
        options: ["background-color", "bgcolor", "color-background", "background"],
        correctAnswer: 0,
      },
      {
        question: "How do you add a background image?",
        options: ["background-image: url()", "image-background: url()", "bg-image: url()", "background: image()"],
        correctAnswer: 0,
      },
      {
        question: "Which property controls the space between lines of text?",
        options: ["line-height", "text-spacing", "line-spacing", "spacing"],
        correctAnswer: 0,
      },
      {
        question: "How do you select all paragraph elements?",
        options: ["p", ".p", "#p", "paragraph"],
        correctAnswer: 0,
      },
      {
        question: "Which property adds space inside an element?",
        options: ["padding", "margin", "spacing", "inner-space"],
        correctAnswer: 0,
      },
      {
        question: "Which property adds space outside an element?",
        options: ["margin", "padding", "outer-space", "spacing"],
        correctAnswer: 0,
      },
      {
        question: "How do you center align text?",
        options: ["text-align: center", "align: center", "text-center: true", "center: text"],
        correctAnswer: 0,
      },
      {
        question: "Which property changes the font family?",
        options: ["font-family", "font-type", "text-font", "family-font"],
        correctAnswer: 0,
      },
      {
        question: "How do you underline text?",
        options: ["text-decoration: underline", "underline: text", "text-underline: true", "font-decoration: underline"],
        correctAnswer: 0,
      },
      {
        question: "Which property controls the opacity of an element?",
        options: ["opacity", "transparency", "alpha", "visibility"],
        correctAnswer: 0,
      },
      {
        question: "How do you select elements with class 'menu'?",
        options: [".menu", "#menu", "*menu", "menu"],
        correctAnswer: 0,
      },
      {
        question: "Which property creates rounded corners?",
        options: ["border-radius", "corner-radius", "round-corner", "border-round"],
        correctAnswer: 0,
      },
      {
        question: "How do you make a flex container?",
        options: ["display: flex", "flex: display", "container: flex", "display-flex: true"],
        correctAnswer: 0,
      },
      {
        question: "Which property adds space between letters?",
        options: ["letter-spacing", "text-spacing", "word-spacing", "character-spacing"],
        correctAnswer: 0,
      },
      {
        question: "How do you remove bullet points from a list?",
        options: ["list-style-type: none", "list-bullets: none", "bullets: none", "list-style: no-bullets"],
        correctAnswer: 0,
      }
    ]
  },       // END FOR CSS CATEGORY

  {
    category: "javascript",
    questions: [
       {
        question: "How do you declare a variable in JavaScript?",
        options: ["var", "variable", "v", "let var"],
        correctAnswer: 0,
      },
      {
        question: "Which operator is used for strict equality comparison?",
        options: ["===", "==", "=", "!=="],
        correctAnswer: 0,
      },
      {
        question: "What is the correct syntax for an if statement?",
        options: ["if (condition) {}", "if condition {}", "if {} else", "if [condition] {}"],
        correctAnswer: 0,
      },
      {
        question: "How do you create a function in JavaScript?",
        options: ["function myFunc() {}", "func myFunc() {}", "create myFunc() {}", "def myFunc() {}"],
        correctAnswer: 0,
      },
      {
        question: "Which method adds an element to the end of an array?",
        options: ["push()", "append()", "add()", "insert()"],
        correctAnswer: 0,
      },
      {
        question: "How do you select an HTML element by its ID?",
        options: ["document.getElementById()", "document.querySelector()", "document.getElement()", "document.findElement()"],
        correctAnswer: 0,
      },
      {
        question: "What does the 'typeof' operator return?",
        options: ["The data type of a variable", "The value of a variable", "The size of a variable", "The scope of a variable"],
        correctAnswer: 0,
      },
      {
        question: "Which keyword is used to declare a constant?",
        options: ["const", "constant", "let", "var"],
        correctAnswer: 0,
      },
      {
        question: "How do you write a single-line comment?",
        options: ["// comment", "/* comment */", "# comment", "-- comment"],
        correctAnswer: 0,
      },
      {
        question: "Which method converts a string to a number?",
        options: ["Number()", "parseInt()", "String.toNumber()", "Convert.toNumber()"],
        correctAnswer: 0,
      },
      {
        question: "What is the correct way to create an object?",
        options: ["let obj = {}", "let obj = new Object()", "let obj = []", "let obj = Object.create()"],
        correctAnswer: 0,
      },
      {
        question: "Which method removes the last element from an array?",
        options: ["pop()", "remove()", "delete()", "shift()"],
        correctAnswer: 0,
      },
      {
        question: "How do you check if a variable is NaN?",
        options: ["isNaN()", "isNotNumber()", "checkNaN()", "Number.isNaN()"],
        correctAnswer: 0,
      },
      {
        question: "Which event occurs when a user clicks an element?",
        options: ["onclick", "onhover", "onchange", "onload"],
        correctAnswer: 0,
      },
      {
        question: "What does JSON stand for?",
        options: ["JavaScript Object Notation", "JavaScript Oriented Notation", "JavaScript Operator Network", "JavaScript Object Network"],
        correctAnswer: 0,
      },
      {
        question: "Which method converts an object to a JSON string?",
        options: ["JSON.stringify()", "JSON.parse()", "object.toJSON()", "convertToJSON()"],
        correctAnswer: 0,
      },
      {
        question: "How do you delay code execution for a set time?",
        options: ["setTimeout()", "delay()", "wait()", "pause()"],
        correctAnswer: 0,
      },
      {
        question: "Which operator checks if a property exists in an object?",
        options: ["in", "has", "exists", "contains"],
        correctAnswer: 0,
      },
      {
        question: "What is the default return value of a function?",
        options: ["undefined", "null", "0", "false"],
        correctAnswer: 0,
      },
      {
        question: "Which method creates a new array by transforming elements?",
        options: ["map()", "filter()", "reduce()", "forEach()"],
        correctAnswer: 0,
      }
    ]
  }, // END FOR JAVASCRIPT CATEGORY
  {
    category: "entertainment",
    questions: [
      {
        question: "What does PHP stand for?",
        options: ["PHP: Hypertext Preprocessor", "Private Home Page", "Personal Hypertext Processor", "Preformatted Hypertext Page"],
        correctAnswer: 0,
      },
      {
        question: "How do you start a PHP block of code?",
        options: ["<?php", "<php>", "<?", "<?"],
        correctAnswer: 0,
      },
      {
        question: "Which superglobal variable holds information about headers, paths, and script locations?",
        options: ["$_SERVER", "$_GET", "$_POST", "$_REQUEST"],
        correctAnswer: 0,
      },
      {
        question: "How do you concatenate strings in PHP?",
        options: [".", "+", "&", "|"],
        correctAnswer: 0,
      },
      {
        question: "Which function outputs text in PHP?",
        options: ["echo", "print_r", "printf", "sprintf"],
        correctAnswer: 0,
      },
      {
        question: "How do you create a constant in PHP?",
        options: ["define()", "const", "constant()", "set_constant()"],
        correctAnswer: 0,
      },
      {
        question: "Which operator checks if two values are equal and of the same type?",
        options: ["===", "==", "=", "!=="],
        correctAnswer: 0,
      },
      {
        question: "How do you include a file in PHP?",
        options: ["include", "require", "import", "attach"],
        correctAnswer: 0,
      },
      {
        question: "Which function returns the length of a string?",
        options: ["strlen()", "count()", "length()", "str_length()"],
        correctAnswer: 0,
      },
      {
        question: "How do you start a session in PHP?",
        options: ["session_start()", "start_session()", "session_begin()", "init_session()"],
        correctAnswer: 0,
      },
      {
        question: "Which function converts a string to lowercase?",
        options: ["strtolower()", "lowercase()", "str_lower()", "toLowerCase()"],
        correctAnswer: 0,
      },
      {
        question: "How do you create an array in PHP?",
        options: ["array()", "[]", "new Array()", "create_array()"],
        correctAnswer: 0,
      },
      {
        question: "Which function gets the current date and time?",
        options: ["date()", "time()", "now()", "getdate()"],
        correctAnswer: 0,
      },
      {
        question: "How do you redirect in PHP?",
        options: ["header('Location:')", "redirect()", "location()", "forward()"],
        correctAnswer: 0,
      },
      {
        question: "Which function checks if a variable is set?",
        options: ["isset()", "is_set()", "check_var()", "defined()"],
        correctAnswer: 0,
      },
      {
        question: "How do you connect to a MySQL database?",
        options: ["mysqli_connect()", "mysql_connect()", "db_connect()", "connect_db()"],
        correctAnswer: 0,
      },
      {
        question: "Which function converts an array to a string?",
        options: ["implode()", "join()", "array_to_string()", "concat_array()"],
        correctAnswer: 0,
      },
      {
        question: "How do you get the number of elements in an array?",
        options: ["count()", "size()", "length()", "array_count()"],
        correctAnswer: 0,
      },
      {
        question: "Which function sends an email in PHP?",
        options: ["mail()", "sendmail()", "email()", "smtp()"],
        correctAnswer: 0,
      },
      {
        question: "How do you handle errors in PHP?",
        options: ["try-catch", "error_handle()", "on_error()", "catch_error()"],
        correctAnswer: 0,
      }
    ]
  },
];