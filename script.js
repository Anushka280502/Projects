// Flashcard data organized by subjects and chapters
const flashcardData = {
    html: {
        name: "HTML",
        chapters: {
            basics: {
                name: "HTML Basics",
                description: "Learn fundamental HTML concepts",
                flashcards: [
                    { question: "What is HTML?", answer: "HTML (HyperText Markup Language) is the foundational language used to create and structure content on the web." },
                    { question: "What are HTML tags?", answer: "HTML tags are the building blocks of web pages—they define and structure content like headings, paragraphs, links, images, and more." },
                    { question: "What is the purpose of the <head> tag?", answer: "The <head> tag contains metadata, links to CSS, scripts, and the page title." },
                    { question: "What does DOCTYPE do?", answer: "DOCTYPE tells the browser which version of HTML the page is using, ensuring proper rendering." },
                    { question: "What is semantic HTML?", answer: "Semantic HTML uses meaningful tags (like <article>, <nav>, <header>) that describe their content, improving accessibility and SEO." }
                ]
            },
            forms: {
                name: "HTML Forms",
                description: "Master form elements and validation",
                flashcards: [
                    { question: "What is the <form> tag used for?", answer: "The <form> tag creates an interactive form for user input, which can be submitted to a server." },
                    { question: "What does the alt attribute in <img> do?", answer: "It provides alternative text for the image, improving accessibility and SEO." },
                    { question: "What is the difference between GET and POST?", answer: "GET appends data to URL (visible), POST sends data in request body (hidden). POST is more secure for sensitive data." },
                    { question: "What is the required attribute?", answer: "The required attribute makes a form field mandatory before submission." },
                    { question: "What are input types in HTML5?", answer: "HTML5 introduced types like email, date, number, range, color, etc., providing built-in validation and better UX." }
                ]
            },
            advanced: {
                name: "Advanced HTML",
                description: "Explore advanced HTML features",
                flashcards: [
                    { question: "What is the <canvas> element?", answer: "The <canvas> element is used to draw graphics via JavaScript, enabling dynamic visual content." },
                    { question: "What are data attributes?", answer: "Data attributes (data-*) allow you to store custom data on HTML elements for use in JavaScript." },
                    { question: "What is the <template> tag?", answer: "The <template> tag holds HTML content that is not rendered immediately but can be cloned and inserted via JavaScript." },
                    { question: "What is the difference between <div> and <span>?", answer: "<div> is a block-level element (takes full width), <span> is inline (takes only necessary width)." }
                ]
            }
        }
    },
    css: {
        name: "CSS",
        chapters: {
            basics: {
                name: "CSS Basics",
                description: "Learn CSS fundamentals",
                flashcards: [
                    { question: "What is CSS?", answer: "CSS (Cascading Style Sheets) is the language used to style and visually format HTML content on web pages." },
                    { question: "What is a CSS selector?", answer: "A CSS selector targets HTML elements to apply styles. Examples: class (.class), id (#id), element (div)." },
                    { question: "What is the box model?", answer: "The CSS box model consists of content, padding, border, and margin, defining element spacing and size." },
                    { question: "What is specificity?", answer: "Specificity determines which CSS rule applies when multiple rules target the same element. Inline > ID > Class > Element." },
                    { question: "What are pseudo-classes?", answer: "Pseudo-classes (:hover, :focus, :nth-child) style elements based on their state or position." }
                ]
            },
            layouts: {
                name: "CSS Layouts",
                description: "Master Flexbox and Grid",
                flashcards: [
                    { question: "What is Flexbox?", answer: "Flexbox is a CSS layout model for creating flexible, responsive layouts in one dimension (row or column)." },
                    { question: "What is CSS Grid?", answer: "CSS Grid is a two-dimensional layout system for creating complex, responsive grid-based layouts." },
                    { question: "What is the difference between Flexbox and Grid?", answer: "Flexbox is for 1D layouts (row or column), Grid is for 2D layouts (rows and columns together)." },
                    { question: "What does justify-content do?", answer: "justify-content aligns flex items along the main axis (horizontal in row, vertical in column)." }
                ]
            },
            advanced: {
                name: "Advanced CSS",
                description: "Animations and transformations",
                flashcards: [
                    { question: "What are CSS animations?", answer: "CSS animations allow elements to gradually change from one style to another using @keyframes." },
                    { question: "What is a CSS variable?", answer: "CSS variables (custom properties) store reusable values: --color: blue; color: var(--color);" },
                    { question: "What is the transform property?", answer: "The transform property applies 2D/3D transformations like rotate, scale, translate, and skew." },
                    { question: "What is the difference between transition and animation?", answer: "Transitions change properties smoothly on state change (hover). Animations run independently with @keyframes." }
                ]
            }
        }
    },
    javascript: {
        name: "JavaScript",
        chapters: {
            basics: {
                name: "JavaScript Basics",
                description: "Core JavaScript concepts",
                flashcards: [
                    { question: "What is JavaScript?", answer: "JavaScript is a programming language that enables interactive and dynamic behavior on websites." },
                    { question: "What are variables?", answer: "Variables store data values. Declared with var, let (block-scoped), or const (constant)." },
                    { question: "What is the difference between let and const?", answer: "let allows reassignment, const does not. Both are block-scoped." },
                    { question: "What are data types in JavaScript?", answer: "Primitive types: string, number, boolean, null, undefined, symbol, bigint. Object is non-primitive." },
                    { question: "What is a function?", answer: "A function is a reusable block of code that performs a specific task." }
                ]
            },
            dom: {
                name: "DOM Manipulation",
                description: "Interact with web pages",
                flashcards: [
                    { question: "What is the DOM?", answer: "The DOM (Document Object Model) is a programming interface representing HTML as a tree of objects." },
                    { question: "How do you select an element?", answer: "Use document.getElementById(), querySelector(), querySelectorAll(), etc." },
                    { question: "What is an event listener?", answer: "An event listener waits for events (click, keypress) and executes a function when triggered." },
                    { question: "What is event bubbling?", answer: "Event bubbling is when an event propagates from the target element up through its ancestors." }
                ]
            },
            advanced: {
                name: "Advanced JavaScript",
                description: "Async, promises, and more",
                flashcards: [
                    { question: "What is a promise?", answer: "A promise represents the eventual completion (or failure) of an asynchronous operation." },
                    { question: "What is async/await?", answer: "async/await is syntactic sugar for promises, making asynchronous code look synchronous." },
                    { question: "What is closure?", answer: "A closure is a function that has access to variables from its outer scope, even after the outer function has returned." },
                    { question: "What is the difference between == and ===?", answer: "== compares values with type coercion, === compares values and types (strict equality)." }
                ]
            }
        }
    },
    python: {
        name: "Python",
        chapters: {
            basics: {
                name: "Python Basics",
                description: "Introduction to Python",
                flashcards: [
                    { question: "What is Python?", answer: "Python is a high-level, interpreted programming language known for its simplicity and readability." },
                    { question: "What are Python data types?", answer: "Common types: int, float, str, bool, list, tuple, dict, set." },
                    { question: "What is a list?", answer: "A list is an ordered, mutable collection of items: my_list = [1, 2, 3]" },
                    { question: "What is a dictionary?", answer: "A dictionary stores key-value pairs: my_dict = {'name': 'John', 'age': 30}" },
                    { question: "What is indentation in Python?", answer: "Python uses indentation (spaces/tabs) to define code blocks instead of braces." }
                ]
            },
            functions: {
                name: "Functions & Modules",
                description: "Functions and code organization",
                flashcards: [
                    { question: "How do you define a function?", answer: "Use the def keyword: def my_function(): return 'Hello'" },
                    { question: "What are *args and **kwargs?", answer: "*args passes variable positional arguments, **kwargs passes variable keyword arguments." },
                    { question: "What is a module?", answer: "A module is a Python file containing functions, classes, and variables that can be imported." },
                    { question: "What is the difference between import and from?", answer: "import loads entire module, from imports specific items: from math import sqrt" }
                ]
            },
            oop: {
                name: "Object-Oriented Python",
                description: "Classes and objects",
                flashcards: [
                    { question: "What is a class?", answer: "A class is a blueprint for creating objects with attributes and methods." },
                    { question: "What is _init?", answer: "init_ is a constructor method called when creating a new object instance." },
                    { question: "What is inheritance?", answer: "Inheritance allows a class to inherit attributes and methods from another class." },
                    { question: "What is self?", answer: "self refers to the instance of the class, used to access instance variables and methods." }
                ]
            }
        }
    }
};

// State management
let currentSubject = null;
let currentChapter = null;
let currentCardIndex = 0;
let currentFlashcards = [];

// Initialize the application
document.addEventListener('DOMContentLoaded', () => {
    setupNavigation();
    setupSubjectCards();
    setupFlashcardControls();
    setupKeyboardNavigation();
});

// Navigation setup
function setupNavigation() {
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = link.getAttribute('href').substring(1);

            // Update active link
            navLinks.forEach(l => l.classList.remove('active'));
            link.classList.add('active');

            // Show target section
            if (targetId === 'home' || targetId === 'subjects' || targetId === 'about') {
                showSection(targetId);
            } else {
                document.getElementById(targetId).scrollIntoView({ behavior: 'smooth' });
            }
        });
    });
}

// Setup subject cards
function setupSubjectCards() {
    const subjectCards = document.querySelectorAll('.subject-card');
    subjectCards.forEach(card => {
        card.addEventListener('click', () => {
            const subject = card.getAttribute('data-subject');
            showChapters(subject);
        });
    });
}

// Show chapters for a subject
function showChapters(subject) {
    currentSubject = subject;
    const subjectData = flashcardData[subject];

    // Update title
    document.getElementById('chapter-subject-title').textContent = `${subjectData.name} Chapters`;

    // Generate chapter cards
    const chaptersGrid = document.getElementById('chapters-grid');
    chaptersGrid.innerHTML = '';

    Object.keys(subjectData.chapters).forEach(chapterKey => {
        const chapter = subjectData.chapters[chapterKey];
        const chapterCard = document.createElement('div');
        chapterCard.className = 'chapter-card';
        chapterCard.innerHTML = `
            <h3>${chapter.name}</h3>
            <p>${chapter.description}</p>
            <span class="card-count">${chapter.flashcards.length} flashcards</span>
        `;
        chapterCard.addEventListener('click', () => showFlashcards(subject, chapterKey));
        chaptersGrid.appendChild(chapterCard);
    });

    showSection('chapters');
}

// Show flashcards for a chapter
function showFlashcards(subject, chapter) {
    currentSubject = subject;
    currentChapter = chapter;
    currentCardIndex = 0;

    const chapterData = flashcardData[subject].chapters[chapter];
    currentFlashcards = chapterData.flashcards;

    // Update title
    document.getElementById('flashcard-title').textContent = chapterData.name;

    // Display first card
    displayCard();
    showSection('flashcard-section');
}

// Display current flashcard
function displayCard() {
    if (currentFlashcards.length === 0) return;

    const card = currentFlashcards[currentCardIndex];
    document.getElementById('question').textContent = card.question;
    document.getElementById('answer').textContent = card.answer;

    // Update progress
    document.getElementById('card-progress').textContent =
        `${currentCardIndex + 1} / ${currentFlashcards.length}`;

    // Remove flip
    document.getElementById('flashcard').classList.remove('is-flipped');

    // Update button states
    updateButtonStates();
}

// Update button states
function updateButtonStates() {
    const prevBtn = document.getElementById('prev-card');
    const nextBtn = document.getElementById('next-card');

    prevBtn.disabled = currentCardIndex === 0;
    nextBtn.disabled = currentCardIndex === currentFlashcards.length - 1;
}

// Setup flashcard controls
function setupFlashcardControls() {
    document.getElementById('flip-card').addEventListener('click', () => {
        document.getElementById('flashcard').classList.toggle('is-flipped');
    });

    document.getElementById('next-card').addEventListener('click', () => {
        if (currentCardIndex < currentFlashcards.length - 1) {
            currentCardIndex++;
            displayCard();
        }
    });

    document.getElementById('prev-card').addEventListener('click', () => {
        if (currentCardIndex > 0) {
            currentCardIndex--;
            displayCard();
        }
    });
}

// Keyboard navigation
function setupKeyboardNavigation() {
    document.addEventListener('keydown', (e) => {
        const flashcardSection = document.getElementById('flashcard-section');
        if (!flashcardSection.classList.contains('hidden')) {
            if (e.key === ' ' || e.key === 'Enter') {
                e.preventDefault();
                document.getElementById('flashcard').classList.toggle('is-flipped');
            } else if (e.key === 'ArrowRight') {
                e.preventDefault();
                document.getElementById('next-card').click();
            } else if (e.key === 'ArrowLeft') {
                e.preventDefault();
                document.getElementById('prev-card').click();
            }
        }
    });
}

// Show specific section
function showSection(sectionId) {
    const sections = document.querySelectorAll('.section');
    sections.forEach(section => {
        if (section.id === sectionId) {
            section.classList.remove('hidden');
        } else {
            section.classList.add('hidden');
        }
    });
}

// Navigation functions
function scrollToSubjects() {
    showSection('subjects');
}

function backToSubjects() {
    showSection('subjects');
}

function backToChapters() {
    showSection('chapters');
}