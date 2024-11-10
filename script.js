
document.addEventListener('DOMContentLoaded', function () {
    var _a;
    (_a = document.getElementById('resumeForm')) === null || _a === void 0 ? void 0 : _a.addEventListener('submit', function (event) {
        event.preventDefault();
        generateResume();
    });
});
function addEducation() {
    var container = document.getElementById('educationContainer');
    var newEntry = document.createElement('div');
    newEntry.classList.add('education-entry');
    newEntry.innerHTML = "\n        <label for=\"education\">Education:</label>\n        <textarea name=\"education\" class=\"textarea\" required></textarea><br>\n    ";
    container.appendChild(newEntry);
}
function addExperience() {
    var container = document.getElementById('experienceContainer');
    var newEntry = document.createElement('div');
    newEntry.classList.add('experience-entry');
    newEntry.innerHTML = "\n        <label for=\"experience\">Work Experience:</label>\n        <textarea name=\"experience\" class=\"textarea\" required></textarea><br>\n    ";
    container.appendChild(newEntry);
}
function addSkill() {
    var container = document.getElementById('skillsContainer');
    var newEntry = document.createElement('div');
    newEntry.classList.add('skills-entry');
    newEntry.innerHTML = "\n        <label for=\"skills\">Skills:</label>\n        <textarea name=\"skills\" class=\"textarea\" required></textarea><br>\n    ";
    container.appendChild(newEntry);
}
function generateResume() {
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var educationEntries = document.querySelectorAll('.education-entry textarea');
    var education = '';
    educationEntries.forEach(function (entry) {
        education += "<p contenteditable=\"true\">".concat(entry.value, "</p>");
    });
    var experienceEntries = document.querySelectorAll('.experience-entry textarea');
    var experience = '';
    experienceEntries.forEach(function (entry) {
        experience += "<p contenteditable=\"true\">".concat(entry.value, "</p>");
    });
    var skillsEntries = document.querySelectorAll('.skills-entry textarea');
    var skills = '';
    skillsEntries.forEach(function (entry) {
        skills += "<p contenteditable=\"true\">".concat(entry.value, "</p>");
    });
    var resumeOutput = "\n        <h2>".concat(name, "</h2>\n        <p>Email: ").concat(email, "</p>\n        <h3>Education</h3>\n        ").concat(education, "\n        <h3>Work Experience</h3>\n        ").concat(experience, "\n        <h3>Skills</h3>\n        ").concat(skills, "\n    ");
    document.getElementById('resumeOutput').innerHTML = resumeOutput;
}
function downloadPDF() {
    var element = document.getElementById('resumeOutput');
    html2pdf(element);
}
function shareResume() {
    var resumeHTML = document.getElementById('resumeOutput').innerHTML;
    var blob = new Blob([resumeHTML], { type: 'text/html' });
    var url = URL.createObjectURL(blob);
    prompt('Share this link to your resume:', url);
}
// Ensure these functions are globally accessible
window.addEducation = addEducation;
window.addExperience = addExperience;
window.addSkill = addSkill;
window.generateResume = generateResume;
window.downloadPDF = downloadPDF;
window.shareResume = shareResume;
