// Lấy dữ liệu sinh viên từ localStorage hoặc khởi tạo mảng sinh viên
let students = JSON.parse(localStorage.getItem('students')) || [
    { studentId: "SV001", studentName: "Nguyễn Văn A", age: 20, sex: true, birthDate: "2002-04-23", birthPlace: "HN", address: "25, Võ Ngọc Phan" },
    { studentId: "SV002", studentName: "Nguyễn Văn B", age: 21, sex: false, birthDate: "2001-09-09", birthPlace: "DN", address: "1, Ngô Quyền" },
    { studentId: "SV003", studentName: "Nguyễn Văn C", age: 19, sex: true, birthDate: "2003-07-07", birthPlace: "HCM", address: "1, Lý Tự Trọng" },
    { studentId: "SV004", studentName: "Nguyễn Văn D", age: 29, sex: false, birthDate: "2005-07-07", birthPlace: "HCM", address: "1, Lý Tự Trọng" }
];

// Hiển thị danh sách sinh viên ra bảng
function displayStudents() {
    const tableBody = document.getElementById('studentTable');
    tableBody.innerHTML = '';  // Xóa nội dung cũ
    students.forEach((student, index) => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${index+1}</td>
            <td>${student.studentId}</td>
            <td>${student.studentName}</td>
            <td>${student.age}</td>
            <td>${student.sex ? 'Nam' : 'Nữ'}</td>
            
             <td class="action-buttons">
                <button class="btn btn-danger btn-sm" onclick="viewStudent(${index})">Xem</button>
                <button class="btn btn-warning btn-sm" onclick="editStudent(${index})">Sửa</button>
                <button class="btn btn-info btn-sm" onclick="deleteStudent(${index})">Xóa</button>
            </td>
        `;
        tableBody.appendChild(row);
    });
}

// Thêm hoặc sửa sinh viên
function addStudent() {
    const studentId = document.getElementById('studentId').value;
    const studentName = document.getElementById('studentName').value;
    const age = document.getElementById('age').value;
    const sex = document.getElementById('sex').value === 'true';
    const birthDate = document.getElementById('birthDate').value;
    const birthPlace = document.getElementById('birthPlace').value;
    const address = document.getElementById('address').value;

    const studentIndex = students.findIndex(student => student.studentId === studentId);

    const studentData = { studentId, studentName, age, sex, birthDate, birthPlace, address };

    if (studentIndex > -1) {
        // Sửa thông tin sinh viên
        students[studentIndex] = studentData;
    } else {
        // Thêm sinh viên mới
        students.push(studentData);
    }

    // Lưu dữ liệu vào localStorage
    localStorage.setItem('students', JSON.stringify(students));

    // Làm trống form
    document.getElementById('studentForm').reset();

    // Cập nhật danh sách hiển thị
    displayStudents();
}

// Sửa sinh viên
function editStudent(index) {
    const student = students[index];
    document.getElementById('studentId').value = student.studentId;
    document.getElementById('studentName').value = student.studentName;
    document.getElementById('age').value = student.age;
    document.getElementById('sex').value = student.sex;
    document.getElementById('birthDate').value = student.birthDate;
    document.getElementById('birthPlace').value = student.birthPlace;
    document.getElementById('address').value = student.address;
}
 // Xem sinh viên
 window.viewStudent = function(index) {
    const student = students[index];
    alert(`Thông tin sinh viên:\nMã: ${student.studentId}\nTên: ${student.studentName}\nTuổi: ${student.age}`);
};
// Chức năng tìm kiếm sinh viên
function searchStudent() {
    const searchValue = document.getElementById('searchInput').value.toLowerCase();
    const filteredStudents = students.filter(student => {
        return (
            student.studentId.toLowerCase().includes(searchValue) ||
            student.studentName.toLowerCase().includes(searchValue) ||
            student.birthPlace.toLowerCase().includes(searchValue) ||
            student.address.toLowerCase().includes(searchValue)
        );
    });

    displayFilteredStudents(filteredStudents);
}
// Xóa sinh viên
function deleteStudent(index) {
    students.splice(index, 1);
    localStorage.setItem('students', JSON.stringify(students));
    displayStudents();
}

// Hiển thị danh sách sinh viên khi tải trang
window.onload = displayStudents;
