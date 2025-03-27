const enrollInSection = (studentId, sectionId) => {
    connection.beginTransaction((err) => {
        if (err) {
            console.log('Error starting transaction:', err);
            return;
        }

        // Check if student exists
        connection.query(
            'SELECT id FROM students WHERE id = ?',
            [studentId],
            (err, result) => {
                if (err || result.length === 0) {
                    return connection.rollback(() => {
                        console.log('Student not found');
                    });
                }

                // Check if section exists
                connection.query(
                    'SELECT id FROM sections WHERE id = ?',
                    [sectionId],
                    (err, result) => {
                        if (err || result.length === 0) {
                            return connection.rollback(() => {
                                console.log('Section not found');
                            });
                        }

                        // Enroll student in section
                        connection.query(
                            'INSERT INTO student_courses (student_id, section_id) VALUES (?, ?)',
                            [studentId, sectionId],
                            (err, result) => {
                                if (err) {
                                    return connection.rollback(() => {
                                        console.log('Error enrolling student:', err);
                                    });
                                }

                                // Commit transaction if successful
                                connection.commit((err) => {
                                    if (err) {
                                        return connection.rollback(() => {
                                            console.log('Error committing transaction:', err);
                                        });
                                    }
                                    console.log('Student enrolled in section');
                                });
                            }
                        );
                    }
                );
            }
        );
    });
};
