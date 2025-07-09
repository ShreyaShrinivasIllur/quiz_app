import Questions from "../models/questionSchema.js";
import Results from "../models/resultSchema.js";
import { 
    currentAffairsQuestions, 
    techAffairsQuestions, 
    technicalQuestions,
    currentAffairsAnswers,
    techAffairsAnswers,
    technicalAnswers
} from '../database/data.js'

/** get all questions */
export async function getQuestions(req, res){
    try {
        const q = await Questions.find();
        res.json(q)
    } catch (error) {
        res.json({ error })
    }
}

/** get questions by category */
export async function getQuestionsByCategory(req, res){
    try {
        const { category } = req.params;
        
        // Mock data fallback when database is not available
        const mockData = {
            'current-affairs': {
                category: 'current-affairs',
                categoryName: 'Current Affairs & General Knowledge',
                questions: currentAffairsQuestions,
                answers: currentAffairsAnswers
            },
            'tech-affairs': {
                category: 'tech-affairs',
                categoryName: 'Current Tech Affairs',
                questions: techAffairsQuestions,
                answers: techAffairsAnswers
            },
            'technical': {
                category: 'technical',
                categoryName: 'Technical Programming',
                questions: technicalQuestions,
                answers: technicalAnswers
            }
        };

        if (mockData[category]) {
            return res.json(mockData[category]);
        }

        // Try database first
        const q = await Questions.findOne({ category });
        if (!q) {
            return res.status(404).json({ error: "Category not found" });
        }
        res.json(q)
    } catch (error) {
        // If database error, use mock data
        const { category } = req.params;
        const mockData = {
            'current-affairs': {
                category: 'current-affairs',
                categoryName: 'Current Affairs & General Knowledge',
                questions: currentAffairsQuestions,
                answers: currentAffairsAnswers
            },
            'tech-affairs': {
                category: 'tech-affairs',
                categoryName: 'Current Tech Affairs',
                questions: techAffairsQuestions,
                answers: techAffairsAnswers
            },
            'technical': {
                category: 'technical',
                categoryName: 'Technical Programming',
                questions: technicalQuestions,
                answers: technicalAnswers
            }
        };

        if (mockData[category]) {
            return res.json(mockData[category]);
        }

        res.status(500).json({ error: "Server error and category not found" });
    }
}

/** insert all questions */
export async function insertQuestions(req, res){
    try {
        // Clear existing questions
        await Questions.deleteMany();
        
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
        res.json({ msg: "All quiz categories saved successfully!"})
    } catch (error) {
        res.json({ error })
    }
}

/** Delete all Questions */
export async function dropQuestions(req, res){
   try {
        await Questions.deleteMany();
        res.json({ msg: "Questions Deleted Successfully...!"});
   } catch (error) {
        res.json({ error })
   }
}

/** get all result */
export async function getResult(req, res){
    try {
        const r = await Results.find();
        res.json(r)
    } catch (error) {
        // Return mock data if database fails
        const mockResults = [
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
        res.json(mockResults);
    }
}

/** post all result */
export async function storeResult(req, res){
   try {
        const { username, result, attempts, points, achived, category, categoryName } = req.body;
        if(!username && !result) throw new Error('Data Not Provided...!');

        const resultData = {
            username,
            result,
            attempts,
            points,
            achived,
            category: category || 'current-affairs',
            categoryName: categoryName || 'Current Affairs & General Knowledge'
        };

        const newResult = await Results.create(resultData);
        res.json({ msg : "Result Saved Successfully...!"})

   } catch (error) {
        res.json({error})
   }
}

/** delete all result */
export async function dropResult(req, res){
    try {
        await Results.deleteMany();
        res.json({ msg : "Result Deleted Successfully...!"})
    } catch (error) {
        res.json({ error })
    }
}