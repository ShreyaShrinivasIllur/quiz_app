import React from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { setCategory } from '../redux/result_reducer';
import '../styles/CategorySelection.css';

export default function CategorySelection() {
    const dispatch = useDispatch();

    const categories = [
        {
            id: 'current-affairs',
            name: 'Current Affairs & General Knowledge',
            description: 'Test your knowledge of world events, geography, history, and general awareness',
            icon: '🌍',
            color: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
            difficulty: 'Moderate',
            questions: 20
        },
        {
            id: 'tech-affairs',
            name: 'Current Tech Affairs',
            description: 'Stay updated with the latest technology trends, companies, and innovations',
            icon: '💻',
            color: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
            difficulty: 'Moderate',
            questions: 20
        },
        {
            id: 'technical',
            name: 'Technical Programming',
            description: 'Challenge yourself with programming concepts, algorithms, and coding questions',
            icon: '⚡',
            color: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)',
            difficulty: 'Advanced',
            questions: 20
        }
    ];

    const handleCategorySelect = (categoryId, categoryName) => {
        dispatch(setCategory({ id: categoryId, name: categoryName }));
    };

    return (
        <div className='container'>
            <h1 className='title text-light'>🎯 Choose Your Challenge</h1>
            
            <div className="category-intro">
                <h2 className="intro-title">Select Your Quiz Category</h2>
                <p className="intro-description">
                    Each category contains 20 carefully crafted questions to test your knowledge and skills. 
                    Choose your area of expertise and prove your mastery!
                </p>
            </div>

            <div className="categories-grid">
                {categories.map((category) => (
                    <div key={category.id} className="category-card">
                        <div className="category-header" style={{ background: category.color }}>
                            <div className="category-icon">{category.icon}</div>
                            <h3 className="category-name">{category.name}</h3>
                        </div>
                        
                        <div className="category-content">
                            <p className="category-description">{category.description}</p>
                            
                            <div className="category-stats">
                                <div className="stat-item">
                                    <span className="stat-icon">📝</span>
                                    <span className="stat-text">{category.questions} Questions</span>
                                </div>
                                <div className="stat-item">
                                    <span className="stat-icon">🎚️</span>
                                    <span className="stat-text">{category.difficulty}</span>
                                </div>
                                <div className="stat-item">
                                    <span className="stat-icon">⏱️</span>
                                    <span className="stat-text">15-20 min</span>
                                </div>
                            </div>
                            
                            <Link 
                                to={'/main'}
                                className="category-btn"
                                onClick={() => handleCategorySelect(category.id, category.name)}
                            >
                                Start {category.name} Quiz 🚀
                            </Link>
                        </div>
                    </div>
                ))}
            </div>

            <div className="tips-section">
                <h3 className="tips-title">💡 Quiz Tips</h3>
                <div className="tips-grid">
                    <div className="tip-item">
                        <span className="tip-icon">🎯</span>
                        <span className="tip-text">Read each question carefully</span>
                    </div>
                    <div className="tip-item">
                        <span className="tip-icon">⏰</span>
                        <span className="tip-text">Take your time to think</span>
                    </div>
                    <div className="tip-item">
                        <span className="tip-icon">🔄</span>
                        <span className="tip-text">You can change answers before submitting</span>
                    </div>
                    <div className="tip-item">
                        <span className="tip-icon">🏆</span>
                        <span className="tip-text">Score 50% or higher to pass</span>
                    </div>
                </div>
            </div>
        </div>
    );
}
