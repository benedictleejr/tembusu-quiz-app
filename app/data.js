export const quiz = {
    totalQuestions: 2,
    questions: [
      {
        id: 1,
        question: 'What are your fields of interest?',
        answers: ['Urban Planning', 'Technology', 'Strategy', 'Anthropology', 'Healthcare', 'Environment'],
        mappedAnswer: {
            'Urban Planning': ['UTS2105/UTC2105', 'UTC2109/UTS2109'],
            'Technology': ['UTS2114/UTC2114', 'UTS2103/UTC2103', 'UTS2100/UTC2100'],
            'Strategy': ['UTC2113', 'UTS2100/UTC2100'],
            'Anthropology': ['UTS2110/UTC2110', 'UTC2111'],
            'Healthcare': ['UTS2103/UTC2103'],
            'Environment': ['UTC2111', 'UTC2102']
        },
      },
      {
        id: 2,
        question: 'What do you do in your free time?',
        answers: ['Playing board games', 'Spending time with family', 'Volunteering', 'Crafting'],
        mappedAnswer: {
            'Playing board games' : ['UTC2113', 'UTS2100/UTC2100'],
            'Spending time with family' : ['UTS2114/UTC2114', 'UTS2110/UTC2110'],
            'Volunteering' : ['UTS2114/UTC2114'],
            'Crafting' : ['UTS2105/UTC2105'],
        }
      },
      {
        id: 3,
        question: 'What is your favourite TV Show?',
        answers: ['The Good Doctor', 'Black Mirror', 'Back to the Future', 'How to Get Away with Murder', 'The Good Place', 'Our Planet'],
        mappedAnswer: {
            'The Good Doctor' : ['UTS2103/UTC2103'],
            'Black Mirror' : ['UTS2100/UTC2100', 'UTC2113'],
            'Back to the Future' : ['UTC2101'],
            'How to Get Away with Murder' : ['UTC2118'],
            'The Good Place' : ['UTS2110/UTC2110', 'UTC2111'], 
            'Our Planet' : ['UTC2102'], 
        }
      },
    ],
  };