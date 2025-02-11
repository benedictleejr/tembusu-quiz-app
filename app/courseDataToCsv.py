import csv

# Entire courseData dictionary
courseData = {
    'UTS2110/UTC2110': {
        'name': 'Happiness By Design',
        'prof': 'Dr John Wee, Dr Priscilla Koh',
        'type': 'Senior Seminar',
    },
    'UTC2107': {
        'name': 'Negotiating in a Complex World',
        'prof': 'Dr Kuan Yee Han, Dr Michael Grainger',
        'type': 'Senior Seminar',
    },
    'UTC2111': {
        'name': 'Picturing and Seeing Development',
        'prof': 'Mr Shamraz Anver',
        'type': 'Senior Seminar',
    },
    'UTS2105': {
        'name': 'Singapore as "Model" City?',
        'prof': 'Dr Connor Graham, Dr Margaret Tan',
        'type': 'Senior Seminar',
    },
    'UTC2117': {
        'name': 'Skin',
        'prof': 'Dr Céline Coderey',
        'type': 'Senior Seminar',
    },
    'UTS2116': {
        'name': 'The University Today',
        'prof': 'Dr Connor Graham',
        'type': 'Senior Seminar',
    },
    'UTC1119': {
        'name': 'Crime and Punishment',
        'prof': 'Dr Michael Grainger',
        'type': 'Junior Seminar',
    },
    'UTC1115': {
        'name': 'Engineering Marvels',
        'prof': 'Dr Ernest Tan',
        'type': 'Junior Seminar',
    },
    'UTC1102B': {
        'name': 'The Darwinian Revolution',
        'prof': 'Dr John van Wyhe',
        'type': 'Junior Seminar',
    },
    'UTC1102C': {
        'name': 'Fakes',
        'prof': 'Dr Eric Kerr',
        'type': 'Junior Seminar',
    },
    'UTC1113': {
        'name': 'Ignorance and Knowing',
        'prof': 'Dr John Wee',
        'type': 'Junior Seminar',
    },
    'UTC1102G': {
        'name': "Proof: What's Truth got to do with it?",
        'prof': 'Professor Tay Yong Chiang',
        'type': 'Junior Seminar',
    },
    'UTS2103': {
        'name': "Health and the Community in Singapore",
        'prof': "Dr Rafi Rashid",
        'type': "Senior Seminar"
    },
    'UTS2104': {
        'name': 'Intelligence and Singapore Society',
        'prof': 'Mr Shamraz Anver, Ms Samridhi Aggarwal',
        'type': 'Senior Seminar',
    }
}

# Define the CSV file name
csv_file = "course_data.csv"

# Define the fieldnames for the CSV file
fieldnames = ['course', 'name', 'prof', 'type']

# Write data to CSV file
with open(csv_file, mode='w', newline='') as file:
    writer = csv.DictWriter(file, fieldnames=fieldnames)

    # Write the header
    writer.writeheader()

    # Write the data
    for course_id, course_info in courseData.items():
        course_info['course'] = course_id  # Add the 'course' column
        writer.writerow(course_info)

print("CSV file has been created successfully.")
