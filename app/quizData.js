export const quiz = {
    totalQuestions: 6,
    questions: [
      {
        id: 1,
        question: 'What is your field of interest?',
        answers: ['Urban Planning', 'Technology', 'Strategy', 'Anthropology', 'Healthcare', 'Environment'],
        mappedAnswer: {
            'Urban Planning': ['UTS2105', 'UTC1115'],
            'Technology': ['UTS2104', 'UTS2103'],
            'Strategy': ['UTC2111', 'UTS2104'],
            'Anthropology': ['UTS2110/UTC2110', 'UTC2117'],
            'Healthcare': ['UTS2103'],
            'Environment': ['UTC2111', 'UTC1102B']
        },
      },
      {
        id: 2,
        question: 'What do you do in your free time?',
        answers: ['Playing board games', 'Spending time with family', 'Volunteering', 'Crafting'],
        mappedAnswer: {
            'Playing board games' : ['UTC1102G', 'UTS2104'],
            'Spending time with family' : ['UTC2107', 'UTS2110/UTC2110'],
            'Volunteering' : ['UTC2111','UTS2116'],
            'Crafting' : ['UTS2105'],
        }
      },
      {
        id: 3,
        question: 'What is your favourite TV Show?',
        answers: ['The Good Doctor', 'Black Mirror', 'Back to the Future', 'How to Get Away with Murder', 'The Good Place', 'Our Planet'],
        mappedAnswer: {
            'The Good Doctor' : ['UTS2103'],
            'Black Mirror' : ['UTS2104', 'UTC1113'],
            'Back to the Future' : ['UTC1113', 'UTC1102G'],
            'How to Get Away with Murder' : ['UTC1119'],
            'The Good Place' : ['UTS2110/UTC2110', 'UTC2111'], 
            'Our Planet' : ['UTC1102B'], 
        }
      },
      {
        id: 4,
        question: "Which book genre do you enjoy reading?",
        answers: ['Science fiction', 'Mystery', 'Historical', 'Non-fiction', 'Fantasy', 'Dystopian'],
        mappedAnswer: {
            'Science fiction' : ['UTC1115','UTC1102G','UTC1113'],
            'Mystery' : ['UTC1119'],
            'Historical' : ['UTC1102B'],
            'Non-fiction' : ['UTS2104','UTC2107','UTC1113'],
            'Fantasy' : ['UTS2105','UTC1102C'], 
            'Dystopian' : ['UTC1102C'], 
        }
      },
      {
        id: 5,
        question: "What social issue concerns you the most?",
        answers: ['Poverty alleviation', 'Education disparities', 'Racial justice', 'Environmental sustainability', 'War and conflict'],
        mappedAnswer: {
            'Poverty alleviation' : ['UTC2111','UTS2103'],
            'Education disparities' : ['UTS2116','UTC1102G'],
            'Racial justice' : ['UTC2117','UTC1102C'],
            'Environmental sustainability' : ['UTC2111', 'UTS2105'],
            'War and conflict' : ['UTC2107', 'UTC1119'],
        }
      },
      {
        id: 6,
        question: "What is your preferred learning approach?",
        answers: ['Research essay', 'Creative works/Exhibition', 'Project that engages real stakeholders','Debate','Individual reflection','Field trip'],
        mappedAnswer: {
            'Research essay' : ['UTC1113', 'UTC1102G'],
            'Creative works/Exhibition': ['UTS2116','UTC2117'],
            'Project that engages real stakeholders' : ['UTS2105'],
            'Debate' : ['UTC2107'],
            'Individual reflection' : ['UTC1102B','UTS2116'],
            'Field trip': ['UTC1102C','UTS2103']
        }
      },
    ],
  };