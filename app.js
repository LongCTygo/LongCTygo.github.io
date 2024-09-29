const axios = require('axios');

// URL to fetch the course data
const url = 'https://tgrcode.com/mm2/get_posted/N0N-75X-JNG';

// Function to fetch data and display course names sorted by boos
async function fetchAndDisplayCourses() {
  try {
    const response = await axios.get(url);
    const courses = response.data.courses;

    if (!courses || courses.length === 0) {
      console.log('No courses found.');
      return;
    }

    // Sort courses by the number of boos in descending order
    const sortedCourses = courses.sort((a, b) => b.boos - a.boos);

    // Display the course name and number of boos
    sortedCourses.forEach(course => {
      console.log(`Name: ${course.name}, Boos: ${course.boos}`);
    });
  } catch (error) {
    console.error('Error fetching the data:', error.message);
  }
}

// Call the function
fetchAndDisplayCourses();
