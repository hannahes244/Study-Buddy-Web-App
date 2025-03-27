const mysql = require('mysql2');

// Assume you've already set up a MySQL connection
const connection = mysql.createConnection({host: 'localhost', user: '', database: 'study_buddy'});

const registerStudentWithCourses = (courseAcronyms, studentData) => {
    connection.beginTransaction((err) => {
        if (err) {
            console.log('Error starting transaction:', err);
            return;
        }

        const { first_name, last_name, email, password } = studentData;

        connection.query(
            'INSERT INTO students (first_name, last_name, email, password) VALUES (?, ?, ?, ?)',
            [first_name, last_name, email, password],
            (err, result) => {
                if (err) {
                    return connection.rollback(() => {
                        console.log('Error inserting student:', err);
                    });
                }

                const studentId = result.insertId;

                const courseEnrollments = courseAcronyms.map(courseAcronym => {
                    return new Promise((resolve, reject) => {
                        connection.query(
                            'INSERT INTO student_courses (course_acronym, student_id) VALUES (?, ?)',
                            [courseAcronym, studentId],
                            (err, result) => {
                                if (err) {
                                    reject(`Error enrolling student in course ${courseAcronym}: ${err}`);
                                } else {
                                    resolve(result);
                                }
                            }
                        );
                    });
                });

                Promise.all(courseEnrollments)
                    .then(() => {
                        connection.commit((err) => {
                            if (err) {
                                return connection.rollback(() => {
                                    console.log('Error committing transaction:', err);
                                });
                            }
                            console.log('Student registered and enrolled in courses successfully');
                        });
                    })
                    .catch((err) => {
                        connection.rollback(() => {
                            console.log(err);
                        });
                    });
            }
        );
    });
};

const studentData = {
    first_name: 'Benny',
    last_name: 'J',
    email: 'benny.j@example.com',
    password: 'password'
};
const courseAcronyms = ['CSCI101', 'CSCI221', 'CSCI102'];
registerStudentWithCourses(studentData, courseAcronyms);
