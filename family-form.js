let childCount = 0;

function addChildForm() {
    const container = document.getElementById('childrenFormsContainer');
    const childForm = document.createElement('div');
    childForm.className = 'child-form';
    childForm.id = `childForm${childCount}`;

    childForm.innerHTML = `
        <h3>Child ${childCount + 1}</h3>
        <div class="form-group">
            <label>Age Group:</label>
            <select onchange="toggleChildForm(${childCount})" id="ageGroup${childCount}">
                <option value="">Select</option>
                <option value="above18">Above 18</option>
                <option value="below18">Below 18</option>
            </select>
        </div>
        <div id="childFormFields${childCount}" class="form-grid"></div>
    `;

    container.appendChild(childForm);
    childCount++;

    // Scroll to the newly added child form
    childForm.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

function toggleChildForm(index) {
    const ageGroup = document.getElementById(`ageGroup${index}`).value;
    const formFields = document.getElementById(`childFormFields${index}`);

    if (ageGroup === 'above18') {
        formFields.innerHTML = `
            <div class="form-group">
                <label for="childName${index}">Name:</label>
                <input type="text" id="childName${index}" name="childName${index}" required>
            </div>
            <div class="form-group">
                <label for="childYearOfBirth${index}">Year of Birth:</label>
                <input type="number" id="childYearOfBirth${index}" name="childYearOfBirth${index}" required>
            </div>
            <div class="form-group">
                <label for="childID${index}">ID Number:</label>
                <input type="text" id="childID${index}" name="childID${index}" required>
            </div>
            <div class="form-group">
                <label for="childEducation${index}">Education Level & Institution:</label>
                <input type="text" id="childEducation${index}" name="childEducation${index}" required>
            </div>
            <div class="form-group">
                <label for="childOccupation${index}">Occupation:</label>
                <input type="text" id="childOccupation${index}" name="childOccupation${index}" required>
            </div>
        `;
    } else if (ageGroup === 'below18') {
        formFields.innerHTML = `
            <div class="form-group">
                <label for="childFullName${index}">Full Name:</label>
                <input type="text" id="childFullName${index}" name="childFullName${index}" required>
            </div>
            <div class="form-group">
                <label for="childGender${index}">Gender:</label>
                <input type="text" id="childGender${index}" name="childGender${index}" required>
            </div>
            <div class="form-group">
                <label for="childSchool${index}">School:</label>
                <input type="text" id="childSchool${index}" name="childSchool${index}" required>
            </div>
            <div class="form-group">
                <label for="childBirthCertificate${index}">Birth Certificate Number:</label>
                <input type="text" id="childBirthCertificate${index}" name="childBirthCertificate${index}" required>
            </div>
        `;
    } else {
        formFields.innerHTML = '';
    }

    // Scroll to the updated form fields
    formFields.scrollIntoView({ behavior: 'smooth', block: 'start' });
}
