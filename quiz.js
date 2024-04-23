
const main = document.getElementById('main');
const quizContainer = document.createElement('div');

const vegeredmeny = document.createElement('h1');

let counter = 0;
function kerdes(szoveg, valaszok, helyes){
    const questionContainer = document.createElement('div');
    const question = document.createElement('h1');
    question.textContent = szoveg;
    questionContainer.appendChild(question);

    valaszok.forEach((valasz, index) => {
        const button = document.createElement('button');
        button.style.margin = '5px';
        button.textContent = valasz;
        button.addEventListener('click', () => {
            if (index === helyes) {
                counter += 1;
                vegeredmeny.textContent = `Correct answers: ${counter}`;
            }
            quizContainer.removeChild(questionContainer);
        });
        questionContainer.appendChild(button);
    });

    quizContainer.appendChild(questionContainer);
}

main.appendChild(vegeredmeny);
main.appendChild(quizContainer);

kerdes('1: What country is Cocks located in?',['UK','Ireland','Scotland','Northern Ireland'], 0)
kerdes('2: What currency do they use in Cocks?',['US Dollars','Punds','Pounds'], 2)
kerdes('3: What is the name of the local Inn?',['Cock Inn','The Cock In','The Cock Inn'], 0)
kerdes('4: What is the name of the main road in Cocks',['The Cocks Road','Cocks Hill','Main Street'], 1)
kerdes('5: How people should drive through Cocks?',['Fast','Nice','Slow','Careful'], 3)
kerdes('On what side should you drive in Cocks',['Left','Right','Road is road (middle)'], 0)
kerdes('If the time in Hungary is 14:35, what is the time in Cocks?',['14:38','13:35','15:35','14:35'], 3)
kerdes('Cocks is a large town',['true','false'], 1)
kerdes('Cocks has a temple',['true','false'], 1)
kerdes('10: How would you rate this quiz on a scale from 1 to 10',['1','2','3','4','5','6','7','8','9','10'], 9)