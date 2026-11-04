function getCareer() {

    // Get student details
    let name = document.getElementById("name").value.trim();
    let qualification = document.getElementById("qualification").value;
    let skills = document.getElementById("skills").value.toLowerCase();
    let interests = document.getElementById("interests").value.toLowerCase();
    let goal = document.getElementById("goal").value;

    // Check inputs
    if (name === "" || qualification === "" ||
        skills === "" || interests === "" || goal === "") {

        alert("Please fill all the details");
        return;
    }

    // Career information
    let careers = {

        "Software Development": {
            title: "Software Developer",
            description: "Develop software applications and programs.",
            required: "Java, Python, C++, DSA",
            learning: "Learn Java, DSA, OOP and build projects."
        },

        "Data Science": {
            title: "Data Scientist",
            description: "Analyze data and discover useful information.",
            required: "Python, SQL, Statistics",
            learning: "Learn Python, SQL, Statistics and Data Analysis."
        },

        "Web Development": {
            title: "Web Developer",
            description: "Create websites and web applications.",
            required: "HTML, CSS, JavaScript",
            learning: "Learn HTML, CSS, JavaScript and React."
        },

        "Cyber Security": {
            title: "Cyber Security Analyst",
            description: "Protect systems and networks from threats.",
            required: "Networking, Linux, Security",
            learning: "Learn networking, Linux and security basics."
        },

        "UI/UX Design": {
            title: "UI/UX Designer",
            description: "Design user-friendly digital applications.",
            required: "Design, Creativity, Figma",
            learning: "Learn UI design, UX principles and Figma."
        }
    };

    // Select career based on goal
    let selected = careers[goal];

    // Create output
    let result = `
        <h2>Career Guidance Result</h2>

        <p><b>Student Name:</b> ${escapeHTML(name)}</p>
        <p><b>Qualification:</b> ${escapeHTML(qualification)}</p>
        <p><b>Skills:</b> ${escapeHTML(skills)}</p>
        <p><b>Interests:</b> ${escapeHTML(interests)}</p>

        <div class="career">

            <h3>Recommended Career: ${selected.title}</h3>

            <p>${selected.description}</p>

            <p><b>Required Skills:</b>
            ${selected.required}</p>

            <p><b>Learning Roadmap:</b>
            ${selected.learning}</p>

        </div>

        <h3>Your Career Summary</h3>

        <p>Based on your selected career goal,
        we suggest focusing on the required skills
        and completing practical projects.</p>

        <p><b>Best Wishes for Your Future!</b> 🎓</p>
    `;

    // Display result
    document.getElementById("output").innerHTML = result;
}

// Safely display user-entered text
function escapeHTML(value) {
    return value.replace(/[&<>"']/g, function(char) {
        return {
            "&": "&amp;",
            "<": "&lt;",
            ">": "&gt;",
            '"': "&quot;",
            "'": "&#39;"
        }[char];
    });
}