/*
COMPLETE THE FOLLOWING TASKS WITHOUT MODIFYING ANY OF THE CODE IN THE HTML OR CSS FILE.

You should only write code in the JavaScript functions below, 
as well as update the `studentInformation` object with your personal information.

Each function is annotated with a comment explaining what it should do.

By the end of the lab, all tests in the report should be passing.
*/

const studentInformation = {
  name: "Nicholas",
  grade: "17",
  advisor: "Riggs",
  major: "Systems Engineering",
  graduationYear: "2026",
  imageUrl: "data:image/png;base64,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",
}

let semester = "Spring Semester"

const studentData = {
  "Spring Semester": [
    { code: "LIT 101", name: "English Literature 101", semester: "Spring 2021", credits: 5, grade: "B+" },
    { code: "CS 50", name: "Intro to Computer Science", semester: "Spring 2021", credits: 5, grade: "A-" },
    { code: "WD 140", name: "Modern Web Development", semester: "Spring 2021", credits: 5, grade: "A+" },
    { code: "JS 2.0", name: "Serverside JavaScript", semester: "Spring 2021", credits: 10, grade: "A-" },
  ],
  "Fall Semester": [
    { code: "Math 600", name: "Differential Equations", semester: "Fall 2020", credits: 5, grade: "A-" },
    { code: "CS 10", name: "Python Programming", semester: "Fall 2020", credits: 5, grade: "A" },
    { code: "History 99", name: "History of Computers", semester: "Fall 2020", credits: 5, grade: "A-" },
    { code: "MD 00", name: "Meditation and Mindfullness", semester: "Fall 2020", credits: 5, grade: "A+" },
  ],
  "Winter Term": [
    { code: "PHYS ED", name: "Physical Activity", semester: "Winter 2020", credits: 5, grade: "A-" },
    { code: "GEN ED", name: "General Education Requirement", semester: "Winter 2020", credits: 5, grade: "A+" },
  ],
}

const gpaPointsLookup = {
  "A+": 4.0,
  A: 4.0,
  "A-": 3.7,
  "B+": 3.3,
  B: 3.0,
  "B-": 2.7,
  "C+": 2.3,
  C: 2.0,
  "C-": 1.7,
  "D+": 1.3,
  D: 1.0,
  "D-": 0.7,
  F: 0.0,
}

/**
 * QUERY SELECTORS VARIABLES GO HERE
 */
const dropdownEl = document.querySelector(".dropdown")
// ADD more query selectors here

/**
 * SOLUTIONS FOR STUDENT INFO DOM UPDATES
 */

function setInnerHtml(id, val) {
  document.getElementById(id).innerHTML = val
}

/**
 * Modify the report card to display the correct grade level from the lookup table above.
 *
 * @param {String} studentName - the name of the student
 */
function updateStudentName(studentName) {
  setInnerHtml("student-name", studentName);
}

/**
 * Modify the report card to display the correct grade level from the lookup table above.
 *
 * @param {String|Number} studentGradeLevel - the grade level of the student
 */
function updateStudentGradeLevel(studentGradeLevel) {
  setInnerHtml("student-grade-level", studentGradeLevel);
}

/**
 * Modify the report card to display the correct advisor from the lookup table above.
 *
 * @param {String} studentAdvisor - the advisor of the student
 */
function updateStudentAdvisor(studentAdvisor) {
  setInnerHtml("student-advisor", studentAdvisor);
}

/**
 * Modify the report card to display the correct major from the lookup table above.
 *
 * @param {String} studentMajor - the major of the student
 */
function updateMajor(studentMajor) {
  setInnerHtml("student-major", studentMajor);
}

/**
 * Modify the report card to display the correct graduation year from the lookup table above
 *
 * @param {Number} graduationyear - the year the student graduates
 */
function updateStudentGraduationYear(graduationYear) {
  setInnerHtml("student-graduation-year", graduationYear);
}

/**
 * Modify the img element using `setAttribute` so that that the src attribute
 * stores the link to your image.
 *
 * @param {String} url - a link to an image
 */
function updateStudentImage(imageUrl) {
  document.querySelector("#student-image").src = imageUrl
}

/**
 * This function should run as soon as the page loads and update the correct student info
 */
function populateStudentInfo(studentInformationObject) {
  updateStudentName(studentInformationObject.name)
  updateStudentGradeLevel(studentInformationObject.grade)
  updateStudentAdvisor(studentInformationObject.advisor)
  updateMajor(studentInformationObject.major)
  updateStudentGraduationYear(studentInformationObject.graduationYear)
  updateStudentImage(studentInformationObject.imageUrl)
}

/**
 * SOLUTION FOR INNER HTML DOM UPDATES
 */

/**
 * This function should add a headers row to the report card table
 */
function addReportCardHeaders(reportCardTableElement) {
  // update the code here
  reportCardTableElement.innerHTML += `<div class="table-row table-header">
  <h4 class="code-col">Code</h4>
  <h4 class="name-col">Name</h4>
  <h4 class="sem-col">Semester</h4>
  <h4 class="cred-col">Credits</h4>
  <h4 class="lett-col">Letter</h4>
  <h4 class="pts-col">Points</h4>
</div>`
}

/**
 * This function should take in a single course and create a row with the
 * course code, course name, course semester, course credits, course letter grade, and course points columns.
 *
 * @param {Object} course
 * @param {Number} rowNum
 */
function addCourseRowToReportCard(reportCardTableElement, course, rowNum) {
  // update the code here with information about the course passed to this function
  const id_num = rowNum + 1;
  reportCardTableElement.innerHTML += `
  <div class="table-row course-row row-${id_num} ${rowNum % 2 === 1 ? "odd" : "even"}">
  <h4 class="code-col">${course.code}</h4>
  <h4 class="name-col">${course.name}</h4>
  <h4 class="sem-col">${course.semester}</h4>
  <h4 class="cred-col credit"><span class="credit">${course.credits}</span> credits</h4>
  <h4 class="lett-col gpa">${course.grade}</h4>
  <h4 class="pts-col" id="gpa-${id_num}">${gpaPointsLookup[course.grade]}</h4>
  </div>
  `
}

/**
 * This function should add HTML for the totals row in the report card.
 */
function addTotalsRow(reportCardTableElement) {
  
  const lets = [...reportCardTableElement.querySelectorAll(":not(.table-header) > .pts-col")]
  let total = 0
  if (lets.length != 0) {
    total = lets.map(e => e.innerHTML).map(Number).reduce((l,r) => l+r)
  }

  reportCardTableElement.innerHTML += `<div class="table-row totals even">
<h4 class="code-col"></h4>
<h4 class="name-col"></h4>
<h4 class="sem-col">Totals:</h4>
<h4 id="total-credits" class="cred-col"></h4>
<h4 class="lett-col"></h4>
<h4 id="total-pts" class="pts-col">${total}</h4>
</div> `
addUpStudentCredits(reportCardTableElement)
}

/**
 * This function should add HTML for the final row in the report card.
 */
function addGpaRow(reportCardTableElement) {
  reportCardTableElement.innerHTML += `<div class="table-row gpa odd">
  <h4 class="code-col"></h4>
  <h4 class="name-col"></h4>
  <h4 class="sem-col">GPA:</h4>
  <h4 class="cred-col"></h4>
  <h4 class="lett-col"></h4>
  <h4 id="gpa" class="pts-col">${calculateSemesterGpa(reportCardTableElement)}</h4>               
</div>    `
}

/**
 * This is the primary function used to update the report card when the semester changes
 *
 * It should call the other functions responsible for creating the necessary HTML
 *
 */
function updateReportCard(reportCardTableElement, currentSemester) {
  // update the dropdown label
  updateDropdownLabel()
  // reset the report card table's inner html to an empty string
  if (reportCardTableElement) reportCardTableElement.innerHTML = ``

  addReportCardHeaders(reportCardTableElement)
  studentData[currentSemester].forEach((elem, i) => {
    addCourseRowToReportCard(reportCardTableElement, elem, i)
  });
  addTotalsRow(reportCardTableElement)
  addGpaRow(reportCardTableElement)
}

/**
 * SOLUTION FOR DROPDOWN EVENT HANDLERS
 */

/**
 * These two functions should be used to toggle the dropdown.
 *
 * If the dropdown classList contains the "closed" class, the 'openDropdown' function should remove it.
 * If the dropdown classList doesn't contain the "closed" class, 'closeDropdown' function should add it.
 */
function closeDropdown(dropdownElement) {
  dropdownElement.classList.remove("open")
  dropdownElement.classList.add("closed")
}

function openDropdown(dropdownElement) {
  dropdownElement.classList.remove("closed")
  dropdownElement.classList.add("open")
}

/**
 * This function should update the inner html of the dropdown label to be the current
 * value stored in the `semester` variable.
 *
 */
function updateDropdownLabel() {
  document.querySelector(".dropdown-label").innerHTML = semester;
}

/**
 * This function should add the proper event listeners to the correct DOM elements
 * responsible for managing the state of the dropdown menu.
 *
 */
function addEventListeners(
  dropdownElement,
  dropdownButtonElement,
  reportCardTableElement,
  fallSemesterElement,
  springSemesterElement,
  winterTermElement
) {
  const toggle = () => {
    const action = (dropdownElement.classList.contains("open")) ? closeDropdown : openDropdown;
    action(dropdownElement);
  }

  const terms = [[fallSemesterElement, "Fall Semester"], 
    [springSemesterElement, "Spring Semester"], 
    [winterTermElement, "Winter Term"]]

  const termListening = ([elem, sem], i) => {
    const select = () => {
      semester = sem
      updateReportCard(reportCardTableElement, semester)
      closeDropdown(dropdownElement)
    }
    elem.addEventListener("click", select)
  }
  terms.map(termListening)

  dropdownButtonElement.addEventListener("click", toggle)

  dropdownButtonElement.addEventListener("click", () => {})

  // Add an event listener for the dropdown button that calls the openDropdown function with the correct DOM element
  // Add 3 event listeners - one for the fall semestersoption, the spring semester option, and the winter term option
  // Each callback function one should update the `semester` variable,
  // call the `updateReportCard` function, and close the dropdown
}

/***************
   CALCULATIONS
****************/

function stripNumber(str) {
  return Number(str.match(/\d+/)[0]);
}

/**
 * Use query selectors on the `reportCardTableElement` element
 * to access the credits the student has earned for each course.
 * Add them up and display the total in the proper location.
 *
 * It may be useful to check for the existence of certain elements
 * before updating the DOM.
 *
 */
function addUpStudentCredits(reportCardTableElement) {
  let grades = [...reportCardTableElement.querySelectorAll(":not(.table-header).table-row > .cred-col.credit ")]
  
  grades = grades.filter(e => e.id != "total-credits" && e.innerHTML)
  let credits = 0
  if (grades.length !== 0) {
    credits = grades.map(e => stripNumber(e.innerHTML)).reduce((l, r) => l+r)
  }
  reportCardTableElement.querySelector("#total-credits").innerHTML = `${credits} credits`
  return credits
}

/**
 * Use query selectors on the `reportCardTableElement` element
 * to access the letter grades for each course and convert them to GPA points using
 * the `pointsLookup` object.
 *
 * That English Literature grade is keeping us from all A's! Let's see if we can't update that to an A-
 * since we definitely deserve it after a hard semester of work.
 *
 * Then perform a quick calculation and update the report card with the total points and
 * cumulative grade point average for the semester.
 *
 */

Array.prototype.sum = function() {
  return this.reduce((l, r) => r+l)
}

function calculateSemesterGpa(reportCardTableElement) {
  let lets = [...reportCardTableElement.querySelectorAll(":not(.table-header).table-row > .lett-col ")]
  lets.forEach(elem => {
    if (String(elem.innerHTML).includes("B")) {
      elem.innerHTML = "A-";
      elem.parentNode.querySelector(".pts-col").innerHTML = gpaPointsLookup[elem.innerHTML];
    }
  })
  lets = lets.filter(e => Boolean(e.innerHTML) )
  let pts = lets.map(e => {
    return gpaPointsLookup[e.innerHTML]
  })
  let creds = lets.map(e => {
    return stripNumber(e.parentNode.querySelector(".cred-col").innerHTML)})
  let gpa = 0.0
  
  if (creds.length !== 0) {
    let total_cretits = creds.sum()
    if (total_cretits !== 0) {
      gpa = pts.map((elem, i) => elem * creds[i]).reduce((l, r) => r+l) / total_cretits
    }
  }
  //reportCardTableElement.querySelector(".totals > .pts-col").innerHTML = gpa

  return gpa
}

window.onload = function () {
  populateStudentInfo(studentInformation)
  updateReportCard(document.getElementById("report-card-table"), semester)
  const queries = [".dropdown", ".dropdown-button", ".report-card-table","#fall-semester", "#spring-semester", "#winter-term"]
  addEventListeners(
    ...queries.map(q => document.querySelector(q))
  )
}
