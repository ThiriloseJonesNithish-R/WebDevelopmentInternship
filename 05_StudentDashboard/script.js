// Select DOM elements
const form = document.getElementById('student-form');
const studentTable = document.getElementById('student-table-body');
const searchInput = document.getElementById('search');

let students = JSON.parse(localStorage.getItem('students')) || [];
let editIndex = null;

// Display students from localStorage
function displayStudents(list = students) {
  studentTable.innerHTML = '';

  if (list.length === 0) {
    studentTable.innerHTML = '<tr><td colspan="6" style="text-align:center; color: #bbb;">No student records found.</td></tr>';
    return;
  }

  list.forEach((student, index) => {
    const row = document.createElement('tr');

    row.innerHTML = `
      <td>${student.name}</td>
      <td>${student.regNo}</td>
      <td>${student.dept}</td>
      <td>${student.year}</td>
      <td>${student.marks}</td>
      <td class="actions">
        <button onclick="editStudent(${index})">✏️</button>
        <button onclick="deleteStudent(${index})">🗑️</button>
      </td>
    `;

    studentTable.appendChild(row);
  });
}

// Add or Update student
form.addEventListener('submit', (e) => {
  e.preventDefault();

  const name = form.name.value.trim();
  const regNo = form.regNo.value.trim();
  const dept = form.dept.value.trim();
  const year = form.year.value.trim();
  const marks = form.marks.value.trim();

  if (!name || !regNo || !dept || !year || !marks) {
    alert('Please fill in all fields!');
    return;
  }

  const student = { name, regNo, dept, year, marks };

  if (editIndex === null) {
    students.push(student);
  } else {
    students[editIndex] = student;
    editIndex = null;
  }

  localStorage.setItem('students', JSON.stringify(students));
  form.reset();
  displayStudents();
});

// Edit student
window.editStudent = function(index) {
  const student = students[index];
  form.name.value = student.name;
  form.regNo.value = student.regNo;
  form.dept.value = student.dept;
  form.year.value = student.year;
  form.marks.value = student.marks;
  editIndex = index;
  window.scrollTo({ top: 0, behavior: 'smooth' });
};

// Delete student
window.deleteStudent = function(index) {
  if (confirm('Are you sure you want to delete this student?')) {
    students.splice(index, 1);
    localStorage.setItem('students', JSON.stringify(students));
    displayStudents();
  }
};

// Search students
searchInput.addEventListener('input', () => {
  const query = searchInput.value.toLowerCase();
  const filtered = students.filter(
    (student) =>
      student.name.toLowerCase().includes(query) ||
      student.regNo.toLowerCase().includes(query)
  );
  displayStudents(filtered);
});

// Initial load
displayStudents();
