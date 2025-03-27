const createMatch = (studentId1, studentId2, sectionId) => {
    connection.beginTransaction((err) => {
        if (err) {
            console.log('Error starting transaction:', err);
            return;
        }

        connection.query(
            'SELECT * FROM student_courses WHERE student_id = ? AND section_id = ?',
            [studentId1, sectionId],
            (err, result1) => {
                if (err || result1.length === 0) {
                    return connection.rollback(() => {
                        console.log('Student 1 is not enrolled in this section');
                    });
                }

                connection.query(
                    'SELECT * FROM student_courses WHERE student_id = ? AND section_id = ?',
                    [studentId2, sectionId],
                    (err, result2) => {
                        if (err || result2.length === 0) {
                            return connection.rollback(() => {
                                console.log('Student 2 is not enrolled in this section');
                            });
                        }

                        connection.query(
                            'INSERT INTO matches (student_id_1, student_id_2) VALUES (?, ?)',
                            [studentId1, studentId2],
                            (err, result) => {
                                if (err) {
                                    return connection.rollback(() => {
                                        console.log('Error creating match:', err);
                                    });
                                }

                                connection.commit((err) => {
                                    if (err) {
                                        return connection.rollback(() => {
                                            console.log('Error committing transaction:', err);
                                        });
                                    }
                                    console.log('Match created successfully');
                                });
                            }
                        );
                    }
                );
            }
        );
    });
};
