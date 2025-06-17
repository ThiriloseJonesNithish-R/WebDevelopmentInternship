const form = document.getElementById("resume-form");
const resumePreview = document.getElementById("resume-preview");
const downloadBtn = document.getElementById("download-btn");

function updatePreview() {
  const name = document.getElementById("fullName").value;
  const email = document.getElementById("email").value;
  const phone = document.getElementById("phone").value;
  const address = document.getElementById("address").value;
  const summary = document.getElementById("summary").value;
  const education = document.getElementById("education").value;
  const experience = document.getElementById("experience").value;
  const skills = document.getElementById("skills").value;

  const skillList = skills
    .split(",")
    .map(skill => `<li>${skill.trim()}</li>`)
    .join("");

  resumePreview.innerHTML = `
    <h2>${name}</h2>
    <p><strong>Email:</strong> ${email}</p>
    <p><strong>Phone:</strong> ${phone}</p>
    <p><strong>Address:</strong> ${address}</p>
    <hr/>
    <h3>Professional Summary</h3>
    <p>${summary}</p>
    <h3>Education</h3>
    <p>${education}</p>
    <h3>Experience</h3>
    <p>${experience}</p>
    <h3>Skills</h3>
    <ul>${skillList}</ul>
  `;
}

// Live update on input
form.addEventListener("input", updatePreview);

// Generate PDF from styled preview
downloadBtn.addEventListener("click", () => {
  // Basic validation
  if (!form.checkValidity()) {
    alert("Please fill in all required fields.");
    return;
  }

  updatePreview(); // ensure updated content

  const previewElement = resumePreview;

  html2canvas(previewElement, { backgroundColor: "#222" }).then(canvas => {
    const imgData = canvas.toDataURL("image/png");
    const { jsPDF } = window.jspdf;
    const pdf = new jsPDF("p", "mm", "a4");

    const imgProps = pdf.getImageProperties(imgData);
    const pdfWidth = pdf.internal.pageSize.getWidth();
    const pdfHeight = (imgProps.height * pdfWidth) / imgProps.width;

    pdf.addImage(imgData, "PNG", 0, 0, pdfWidth, pdfHeight);
    pdf.save("Resume.pdf");
  });
});
