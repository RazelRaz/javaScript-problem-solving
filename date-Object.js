// 1.Date Object:
//a. Create a function that takes a date in the format "YYYY-MM-DD" as a parameter and returns the day of the week for that date. The function should use the Date object.

function getDayOfWeek(dateString) {
    const date = new Date(dateString);
    const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const dayIndex = date.getDay();
  
    return daysOfWeek[dayIndex];
}

const currentDate = new Date();
const formattedDate = currentDate.toISOString().slice(0, 10);
const dayOfWeek = getDayOfWeek(formattedDate);
console.log("Current Day of the Week:", dayOfWeek);