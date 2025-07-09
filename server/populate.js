import { config } from 'dotenv';
import connect from './database/conn.js';
import Questions from './models/questionSchema.js';
import { 
    currentAffairsQuestions, 
    techAffairsQuestions, 
    technicalQuestions,
    currentAffairsAnswers,
    techAffairsAnswers,
    technicalAnswers
} from './database/data.js';

// Load environment variables
config();

async function populateDatabase() {
    try {
        // Connect to database
        await connect();
        console.log('Connected to database');

        // Clear existing questions
        await Questions.deleteMany();
        console.log('Cleared existing questions');
        
        // Insert all three categories
        const categories = [
            {
                category: 'current-affairs',
                categoryName: 'Current Affairs & General Knowledge',
                questions: currentAffairsQuestions,
                answers: currentAffairsAnswers
            },
            {
                category: 'tech-affairs',
                categoryName: 'Current Tech Affairs',
                questions: techAffairsQuestions,
                answers: techAffairsAnswers
            },
            {
                category: 'technical',
                categoryName: 'Technical Programming',
                questions: technicalQuestions,
                answers: technicalAnswers
            }
        ];

        await Questions.insertMany(categories);
        console.log('All quiz categories saved successfully!');
        
        // Verify the data
        const allQuestions = await Questions.find();
        console.log(`Total categories in database: ${allQuestions.length}`);
        
        for (const cat of allQuestions) {
            console.log(`${cat.categoryName}: ${cat.questions.length} questions`);
        }
        
        process.exit(0);
    } catch (error) {
        console.error('Error populating database:', error);
        process.exit(1);
    }
}

populateDatabase();
