export const quiz = {
    totalQuestions: 6,
    questions: [
      {
        id: 1,
        question: 'What are your fields of interest?',
        answers: ['Urban Planning', 'Technology', 'Strategy', 'Anthropology', 'Healthcare', 'Environment'],
        mappedAnswer: {
            'Urban Planning': ['UTS2105/UTC2105', 'UTC2109/UTS2109'],
            'Technology': ['UTS2114/UTC2114', 'UTS2103/UTC2103'],
            'Strategy': ['UTC2113', 'UTS2100/UTC2100'],
            'Anthropology': ['UTS2110/UTC2110', 'UTC2117'],
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
            'Volunteering' : ['UTC2111','UTC2116/UTS2116'],
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
      {
        id: 4,
        question: "Which book genre do you enjoy reading?",
        answers: ['Science fiction', 'Mystery', 'Historical', 'Non-fiction', 'Fantasy', 'Dystopian'],
        mappedAnswer: {
            'Science fiction' : ['UTS2103/UTC2103','UTC2108','UTC1115'],
            'Mystery' : ['UTC2118','UTC1119'],
            'Historical' : ['UTC2101','UTC1102B'],
            'Non-fiction' : ['UTS2100/UTC2100','UTC2107','UTC1113'],
            'Fantasy' : ['UTS2105/UTC2105','UTC1102C','UTC1102P'], 
            'Dystopian' : ['UTS2114/UTC2114', 'UTC2112/UTS2112', 'UTC1102S'], 
        }
      },
      {
        id: 5,
        question: "What social issue concerns you the most?",
        answers: ['Poverty alleviation', 'Education disparities', 'Racial justice', 'Environmental sustainability', 'War and conflict'],
        mappedAnswer: {
            'Poverty alleviation' : ['UTC2111','UTC1102E','UTC1120'],
            'Education disparities' : ['UTC2116/UTS2116','UTC1102G'],
            'Racial justice' : ['UTC2117','UTC1102D'],
            'Environmental sustainability' : ['UTC2102','UTC2112/UTS2112'],
            'War and conflict' : ['UTC2107', 'UTC2118', 'UTC1123'],
        }
      },
      {
        id: 6,
        question: "What is your preferred learning approach?",
        answers: ['Research essay', 'Creative works/Exhibition', 'Project that engages real stakeholders','Debate','Individual reflection','Field trip'],
        mappedAnswer: {
            'Research essay' : ['UTC2108'],
            'Creative works/Exhibition': ['UTC2101','UTC2117'],
            'Project that engages real stakeholders' : ['UTS2105/UTC2105','UTC2111'],
            'Debate' : ['UTC2107','UTS2103/UTC2103'],
            'Individual reflection' : ['UTC2101','UTC2116/UTS2116'],
            'Field trip': ['UTC2109/UTS2109','UTS2114/UTC2114']
        }
      },
    ],
  };