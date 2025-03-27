const dropASection = (studentId, sectionId) => {
    connection.beginTransaction((err) => {
        if (err) {
            console.log('Error starting transaction:', err);
            return;
        }

        // Check if the student is enrolled in the section
        connection.query(
            'SELECT * FROM student_courses WHERE student_id = ? AND section_id = ?',
            [studentId, sectionId],
            (err, result) => {
                if (err || result.length === 0) {
                    return connection.rollback(() => {
                        console.log('Student not enrolled in this section');
                    });
                }

                // Remove student from the course section
                connection.query(
                    'DELETE FROM student_courses WHERE student_id = ? AND section_id = ?',
                    [studentId, sectionId],
                    (err, result) => {
                        if (err) {
                            return connection.rollback(() => {
                                console.log('Error dropping section:', err);
                            });
                        }

                        // Commit transaction if successful
                        connection.commit((err) => {
                            if (err) {
                                return connection.rollback(() => {
                                    console.log('Error committing transaction:', err);
                                });
                            }
                            console.log('Student dropped the course');
                        });
                    }
                );
            }
        );
    });
};
