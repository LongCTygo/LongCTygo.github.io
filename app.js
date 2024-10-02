const axios = require('axios');
const fs = require('fs');
const createCsvWriter = require('csv-writer').createObjectCsvWriter;

// URL to fetch the course data
const url = 'https://tgrcode.com/mm2/get_posted/N0N-75X-JNG';

// CSV writer setup
const csvWriter = createCsvWriter({
  path: 'courses.csv',
  header: [
    { id: 'name', title: 'Name' },
    { id: 'boos', title: 'Boos' },
    { id: 'likes', title: 'Likes' },
    { id: 'plays', title: 'Plays' },
    { id: 'likesPerPlay', title: 'Likes/Plays' },
    { id: 'boosPerPlay', title: 'Boos/Plays' },
    { id: 'boosPerLike', title: 'Boos/Likes' }
  ]
});

// Function to fetch data and write to CSV
async function fetchAndWriteCoursesToCSV() {
  try {
    const response = await axios.get(url);
    const courses = response.data.courses;

    if (!courses || courses.length === 0) {
      console.log('No courses found.');
      return;
    }

    // Sort courses by the number of boos in descending order
    const sortedCourses = courses.sort((a, b) => b.boos - a.boos);

    // Prepare data for CSV
    const csvData = sortedCourses.map(course => {
      const likesPerPlay = course.plays ? (course.likes / course.unique_players_and_versus).toFixed(2) : 0;
      const boosPerPlay = course.plays ? (course.boos / course.unique_players_and_versus).toFixed(2) : 0;
      const boosPerLike = course.likes ? (course.boos / course.likes).toFixed(2) : 0;

      return {
        name: course.name,
        boos: course.boos,
        likes: course.likes,
        plays: course.unique_players_and_versus,
        likesPerPlay,
        boosPerPlay,
        boosPerLike
      };
    });

    // Write data to CSV file
    await csvWriter.writeRecords(csvData);
    console.log('CSV file has been created: courses.csv');
  } catch (error) {
    console.error('Error fetching the data:', error.message);
  }
}

// Call the function
fetchAndWriteCoursesToCSV();
