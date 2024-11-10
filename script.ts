
document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('resumeForm')?.addEventListener('submit', function(event) {
        event.preventDefault();
        generateResume();
    });
});

function addEducation() {
    const container = document.getElementById('educationContainer') as HTMLDivElement;
    const newEntry = document.createElement('div');
    newEntry.classList.add('education-entry');
    newEntry.innerHTML = `
        <label for="education">Education:</label>
        <textarea name="education" class="textarea" required></textarea><br>
    `;
    container.appendChild(newEntry);
}

function addExperience() {
    const container = document.getElementById('experienceContainer') as HTMLDivElement;
    const newEntry = document.createElement('div');
    newEntry.classList.add('experience-entry');
    newEntry.innerHTML = `
        <label for="experience">Work Experience:</label>
        <textarea name="experience" class="textarea" required></textarea><br>
    `;
    container.appendChild(newEntry);
}

function addSkill() {
    const container = document.getElementById('skillsContainer') as HTMLDivElement;
    const newEntry = document.createElement('div');
    newEntry.classList.add('skills-entry');
    newEntry.innerHTML = `
        <label for="skills">Skills:</label>
        <textarea name="skills" class="textarea" required></textarea><br>
    `;
    container.appendChild(newEntry);
}

function generateResume() {
    const name = (document.getElementById('name') as HTMLInputElement).value;
    const email = (document.getElementById('email') as HTMLInputElement).value;

    const educationEntries = document.querySelectorAll('.education-entry textarea');
    let education = '';
    educationEntries.forEach(entry => {
        education += `<p contenteditable="true">${(entry as HTMLTextAreaElement).value}</p>`;
    });

    const experienceEntries = document.querySelectorAll('.experience-entry textarea');
    let experience = '';
    experienceEntries.forEach(entry => {
        experience += `<p contenteditable="true">${(entry as HTMLTextAreaElement).value}</p>`;
    });

    const skillsEntries = document.querySelectorAll('.skills-entry textarea');
    let skills = '';
    skillsEntries.forEach(entry => {
        skills += `<p contenteditable="true">${(entry as HTMLTextAreaElement).value}</p>`;
    });

    const resumeOutput = `
        <h2>${name}</h2>
        <p>Email: ${email}</p>
        <h3>Education</h3>
        ${education}
        <h3>Work Experience</h3>
        ${experience}
        <h3>Skills</h3>
        ${skills}
    `;

    (document.getElementById('resumeOutput') as HTMLDivElement).innerHTML = resumeOutput;
}

function downloadPDF() {
    const element = document.getElementById('resumeOutput') as HTMLDivElement;
    html2pdf(element);
}

function shareResume() {
    const resumeHTML = (document.getElementById('resumeOutput') as HTMLDivElement).innerHTML;
    const blob = new Blob([resumeHTML], { type: 'text/html' });
    const url = URL.createObjectURL(blob);
    prompt('Share this link to your resume:', url);
}

