# University JSON CRUD Operations

## Overview
This project demonstrates CRUD operations on a nested JSON file representing a university system.

## Setup Instructions
1. Clone the repository.
   ```bash
   git clone <repository-url>
   cd <project-folder>
   ```
2. Initialize the project.
   ```bash
   npm init -y
   ```
3. Ensure the necessary files exist:
   - `src/crudOperations.js`
   - `src/fileOperations.js`
   - `data/university.json`

## Usage Instructions
### Add Entry
Run the following command to add a new entry to the JSON file:
```bash
node -e "require('./src/crudOperations').addEntry('./data/university.json', 'university.departments[0].students', {name: 'Jane Doe', rollNumber: 'CS102', courses: ['Operating Systems']})"
```

### Update Entry
Run the following command to update an existing entry in the JSON file:
```bash
node -e "require('./src/crudOperations').updateEntry('./data/university.json', 'university.departments[0].professors', 'name', 'Dr. A. Sharma', 'courses', ['AI', 'Deep Learning'])"
```

### Delete Entry
Run the following command to delete an entry from the JSON file:
```bash
node -e "require('./src/crudOperations').deleteEntry('./data/university.json', 'university.departments[0].students', 'rollNumber', 'CS101')"
```

### Search Entry
Run the following command to search for an entry in the JSON file:
```bash
node -e "console.log(require('./src/crudOperations').searchEntry('./data/university.json', 'university.departments[0].students', 'name', 'Jane Doe'))"
```

## Verify Changes
After running any operation, check the `data/university.json` file to verify the changes. Backup files will be created automatically in the same directory for safety.

## Example JSON Structure
```json
{
  "university": {
    "name": "SRM Institute of Science and Technology",
    "departments": [
      {
        "name": "Computer Science",
        "professors": [
          {
            "name": "Dr. A. Sharma",
            "courses": ["AI", "ML"]
          }
        ],
        "students": [
          {
            "name": "John Doe",
            "rollNumber": "CS101",
            "courses": ["AI", "Data Structures"]
          }
        ]
      }
    ]
  }
}
```

## Dependencies
- Node.js

## Notes
- Ensure the `data/university.json` file exists before running the commands.
- Use the correct paths while executing the commands.

