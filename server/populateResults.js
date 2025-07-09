import { config } from 'dotenv';
import connect from './database/conn.js';
import Results from './models/resultSchema.js';

// Load environment variables
config();

async function populateTestResults() {
    try {
        // Connect to database
        await connect();
        console.log('Connected to database');

        // Create sample test results
        const sampleResults = [
            {
                username: 'John Doe',
                result: [0, 1, 2, 0, 1, 1, 0, 2, 1, 0],
                attempts: 10,
                points: 70,
                achived: 'Passed',
                category: 'current-affairs',
                categoryName: 'Current Affairs & General Knowledge'
            },
            {
                username: 'Jane Smith',
                result: [1, 1, 2, 0, 1, 1, 0, 2, 1, 0],
                attempts: 10,
                points: 80,
                achived: 'Passed',
                category: 'tech-affairs',
                categoryName: 'Current Tech Affairs'
            },
            {
                username: 'Mike Johnson',
                result: [0, 1, 0, 0, 1, 1, 0, 2, 1, 0],
                attempts: 10,
                points: 50,
                achived: 'Passed',
                category: 'technical',
                categoryName: 'Technical Programming'
            },
            {
                username: 'Sarah Wilson',
                result: [0, 0, 0, 0, 1, 1, 0, 0, 1, 0],
                attempts: 10,
                points: 30,
                achived: 'Failed',
                category: 'current-affairs',
                categoryName: 'Current Affairs & General Knowledge'
            },
            {
                username: 'Alex Brown',
                result: [1, 1, 2, 1, 1, 1, 1, 2, 1, 1],
                attempts: 10,
                points: 90,
                achived: 'Passed',
                category: 'tech-affairs',
                categoryName: 'Current Tech Affairs'
            }
        ];

        await Results.insertMany(sampleResults);
        console.log('Sample results added successfully!');
        
        // Verify the data
        const allResults = await Results.find();
        console.log(`Total results in database: ${allResults.length}`);
        
        process.exit(0);
    } catch (error) {
        console.error('Error populating results:', error);
        process.exit(1);
    }
}

populateTestResults();
