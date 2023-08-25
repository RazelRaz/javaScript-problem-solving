// Check if the .course class is present on the page
if (document.body.classList.contains('course')) {
  // Find the <ul> element with the class "breadcrumbs"
  const breadcrumbs = document.querySelector('ul.breadcrumbs');
  
  // Check if the breadcrumbs contain the text "Career Bundle"
  if (breadcrumbs.textContent.includes('Career Bundle')) {
    // Find the <a> element with the class "course_button"
    const courseButton = document.querySelector('a.course_button');
    
    // Check if the button text is "TAKE THIS COURSE"
    if (courseButton.textContent.trim() === 'TAKE THIS COURSE') {
      // Change the button text to "Take This Bundle"
      courseButton.textContent = 'Take This Bundle';
    }
  }
}