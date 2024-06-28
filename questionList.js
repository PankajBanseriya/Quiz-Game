const quizData = [
    {
        question: 'What is the capital of France?',
        options: ['Paris', 'London', 'Berlin', 'Madrid'],
        answer: 'Paris',
    },
    {
        question: 'What is the largest planet in our solar system?',
        options: ['Mars', 'Saturn', 'Jupiter', 'Neptune'],
        answer: 'Jupiter',
    },
    {
        question: 'Which country won the FIFA World Cup in 2018?',
        options: ['Brazil', 'Germany', 'France', 'Argentina'],
        answer: 'France',
    },
    {
        question: 'What is the tallest mountain in the world?',
        options: ['Mount Everest', 'K2', 'Kangchenjunga', 'Makalu'],
        answer: 'Mount Everest',
    },
    {
        question: 'What is the chemical symbol for gold?',
        options: ['Au', 'Ag', 'Cu', 'Fe'],
        answer: 'Au',
    },
    {
        question: 'Who painted the Mona Lisa?',
        options: [
            'Pablo Picasso',
            'Vincent van Gogh',
            'Leonardo da Vinci',
            'Michelangelo',
        ],
        answer: 'Leonardo da Vinci',
    },
    {
        question: 'Which planet is known as the Red Planet?',
        options: ['Mars', 'Venus', 'Mercury', 'Uranus'],
        answer: 'Mars',
    },
    {
        question: 'What is the largest species of shark?',
        options: [
            'Great White Shark',
            'Whale Shark',
            'Tiger Shark',
            'Hammerhead Shark',
        ],
        answer: 'Whale Shark',
    },
    {
        question: 'Which animal is known as the King of the Jungle?',
        options: ['Lion', 'Tiger', 'Elephant', 'Giraffe'],
        answer: 'Lion',
    },
    {
        question: 'What is the capital of Japan?',
        options: ['Tokyo', 'Seoul', 'Beijing', 'Bangkok'],
        answer: 'Tokyo',
    },
    {
        question: 'Who wrote the play "Romeo and Juliet"?',
        options: ['William Shakespeare', 'Charles Dickens', 'Jane Austen', 'Leo Tolstoy'],
        answer: 'William Shakespeare',
    },
    {
        question: 'What is the largest ocean on Earth?',
        options: ['Atlantic Ocean', 'Indian Ocean', 'Arctic Ocean', 'Pacific Ocean'],
        answer: 'Pacific Ocean',
    },
    {
        question: 'In which year did the Titanic sink?',
        options: ['1912', '1905', '1923', '1918'],
        answer: '1912',
    },
    {
        question: 'Which country is known as the Land of the Rising Sun?',
        options: ['Japan', 'China', 'South Korea', 'Vietnam'],
        answer: 'Japan',
    },
    {
        question: 'Who invented the telephone?',
        options: ['Alexander Graham Bell', 'Thomas Edison', 'Nikola Tesla', 'Albert Einstein'],
        answer: 'Alexander Graham Bell',
    },
    {
        question: 'Which is the longest river in the world?',
        options: ['Nile River', 'Amazon River', 'Yangtze River', 'Mississippi River'],
        answer: 'Nile River',
    },
    {
        question: 'QWho was the first person to step on the Moon?',
        options: ['Neil Armstrong', 'Buzz Aldrin', 'Michael Collins', 'Yuri Gagarin'],
        answer: 'Neil Armstrong',
    },
    {
        question: 'What is the currency of Japan?',
        options: ['Yen', 'Yuan', 'Euro', 'Dollar'],
        answer: 'Yen'
    },
    {
        question: 'How many sides does a hexagon have?',
        options: ['4', '5', '6', '7'],
        answer: '6'
    },
    {
        question: 'What is the chemical symbol for water?',
        options: ['H2O', 'NaCl', 'CO2', 'CH4'],
        answer: 'H2O'
    },
    {
        question: 'Which country hosted the 2022 Winter Olympics?',
        options: ['China', 'South Korea', 'Japan', 'Canada'],
        answer: 'China'
    },
    {
        question: 'What is the largest ocean on Earth?',
        options: ['Pacific', 'Atlantic', 'Indian', 'Arctic'],
        answer: 'Pacific'
    },
    {
        question: 'What is the capital of Germany?',
        options: ['Berlin', 'Munich', 'Hamburg', 'Cologne'],
        answer: 'Berlin'
    },
    {
        question: 'How many colors are there in the rainbow?',
        options: ['5', '6', '7', '8'],
        answer: '7'
    },
    {
        question: 'What is the square root of 25?',
        options: ['3', '4', '5', '6'],
        answer: '5'
    },
    {
        question: 'What is the national bird of the United States?',
        options: ['Bald Eagle', 'Golden Eagle', 'Hawk', 'Falcon'],
        answer: 'Bald Eagle'
    },
    {
        question: 'What is the largest desert in the world?',
        options: ['Sahara', 'Gobi', 'Kalahari', 'Patagonia'],
        answer: 'Sahara'
    },
    {
        question: 'What is the longest river in the world?',
        options: ['Nile', 'Amazon', 'Yangtze', 'Mississippi-Missouri'],
        answer: 'Nile'
    },
    {
        question: 'In which year did World War II begin?',
        options: ['1939', '1941', '1943', '1945'],
        answer: '1939'
    },
    {
        question: 'What is the capital of Australia?',
        options: ['Canberra', 'Sydney', 'Melbourne', 'Brisbane'],
        answer: 'Canberra'
    },
    {
        question: 'What is the chemical element with atomic number 1?',
        options: ['Hydrogen', 'Helium', 'Lithium', 'Beryllium'],
        answer: 'Hydrogen'
    },
    {
        question: 'How many moons does Earth have?',
        options: ['0', '1', '2', '3'],
        answer: '1'
    },
    {
        question: 'What is the name of the worlds largest social media platform?',
        options: ['Facebook', 'Instagram', 'Twitter', 'YouTube'],
        answer: 'Facebook'
    },
    {
        question: 'What is the smallest country in the world by land area?',
        options: ['Vatican City', 'Monaco', 'Nauru', 'Tuvalu'],
        answer: 'Vatican City'

    },
    {
        question: 'What is the name of the worlds largest ocean by volume?',
        options: ['Pacific', 'Atlantic', 'Indian', 'Arctic'],
        answer: 'Pacific'

    },
    {
        question: 'What is the currency used in the United Kingdom?',
        options: ['Pound Sterling', 'Euro', 'US Dollar', 'Canadian Dollar'],
        answer: 'Pound Sterling'


    },
    {
        question: 'What is the tallest building in the world?',
        options: ['Burj Khalifa', 'Shanghai Tower', 'Makkah Royal Clock Tower Hotel', 'One World Trade Center'],
        answer: 'Burj Khalifa'

    },
    {
        question: 'What is the name of the search engine developed by Google?',
        options: ['Chrome', 'Safari', 'Firefox', 'Google Search'],
        answer: 'Google Search'

    },
    {
        question: 'What is the capital of Italy?',
        options: ['Rome', 'Milan', 'Naples', 'Turin'],
        answer: 'Rome'

    },
    {
        question: 'How many hearts does an octopus have?',
        options: ['1', '2', '3', '4'],
        answer: '3'

    },
    {
        question: 'What is the scientific name for a human being?',
        options: ['Homo sapiens', 'Pan troglodytes', 'Canis lupus familiaris', 'Felis catus'],
        answer: 'Homo sapiens'

    },
    {
        question: 'What is the hottest planet in our solar system?',
        options: ['Venus', 'Mercury', 'Mars', 'Earth'],
        answer: 'Venus'


    },
    {
        question: 'What is the name of the worlds driest desert?', 
        options: ['Atacama', 'Sahara', 'Gobi', 'Kalahari'], 
        answer: 'Atacama'
    },
    {
        question: 'What year did the first iPhone launch?', 
        options: ['2004', '2005', '2006', '2007'], 
        answer: '2007'
    },
    {
        question: 'What is the largest freshwater lake by volume?', 
        options: ['Caspian Sea', 'Lake Superior', 'Lake Victoria', 'Lake Huron'], 
        answer: 'Caspian Sea'
    },
    {
        question: 'What is the capital of Canada?', 
        options: ['Ottawa', 'Toronto', 'Montreal', 'Vancouver'], 
        answer: 'Ottawa'
    },
    {
        question: 'How many strings does a violin typically have?', 
        options: ['3', '4', '5', '6'], 
        answer: '4'
    },
    {
        question: 'What is the name of the worlds longest river system ? ', 
        options: ['Nile', 'Amazon - Ucayali', 'Yangtze', 'Mississippi - Missouri - Red - Arkansas'], 
        answer: 'Nile'
    },
    {
        question: 'What is the chemical formula for carbon dioxide?', 
        options: ['CO2', 'CO', 'CH4', 'H2O'],
        answer: 'CO2'
    },
    {
        question: 'What is the capital of Brazil?', 
        options: ['Brasilia', 'Rio de Janeiro', 'São Paulo', 'Salvador'], 
        answer: 'Brasilia'
    },

];
