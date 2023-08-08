import React, { useState } from 'react';
import Header from '../Header';
import Sidebar from '../Pages/Sidebar';
import Footer from '../Footer';
import { Typography, Container, Box, Button, Radio, RadioGroup, FormControlLabel, FormControl } from '@mui/material';

const questions = [
  {
    question: 'What is the capital of France?',
    options: ['London', 'Paris', 'Berlin', 'Madrid'],
    answer: 'Paris',
  },
  {
    question: 'Who created ChatGpt?',
    options: ['OpenAi', 'Google', 'Adobe', 'Apple'],
    answer: 'OpenAi',
  },
  {
    question: 'World highly populated country name is:',
    options: ['Pakistan', 'China', 'India', 'America'],
    answer: 'India',
  },
  {
    question: 'World largest country name is:',
    options: ['Russia', 'India', 'China', 'America'],
    answer: 'Russia',
  },
  {
    question: 'Total number of plantes in space?',
    options: ['5', '6', '7', '8'],
    answer: '7',
  },
];

const QuizApp = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [userAnswer, setUserAnswer] = useState('');
  const [score, setScore] = useState(0);

  const handleNextQuestion = () => {
    // Check if the user's answer is correct and update the score
    if (userAnswer === questions[currentQuestion].answer) {
      setScore(score + 10);
    }

    // Move to the next question
    setCurrentQuestion(currentQuestion + 1);
    setUserAnswer('');
  };

  const handleOptionChange = (event) => {
    setUserAnswer(event.target.value);
  };

  const currentQues = questions[currentQuestion];

  return (
    <main>
      <Header/>
      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-3 col-md-3 col-sm-6 border-end">
            <Sidebar/>
          </div>
          <div className="col-lg-9 col-md-9 col-sm-6 text-center my-auto">
            {
              (currentQuestion === questions.length) ?
                <Container>
                  <Typography variant="h4">Quiz Completed!</Typography>
                  <Typography variant="h5">Your Score: {score} Points</Typography>
                </Container>
              :
              <Container maxWidth="sm" sx={{border: '1px solid', borderRadius: '15px', padding: '20px 0'}}>
                <Box>Select one answer from given four answers, each question has 10 points.</Box>
                <Typography variant="h6">Question {currentQuestion + 1}</Typography>
                <Typography variant="body1">{currentQues.question}</Typography>
                <Box component='div'>
                  <FormControl component="fieldset">
                    <RadioGroup value={userAnswer} onChange={handleOptionChange}>
                    {currentQues.options.map((option, index) => (
                      <FormControlLabel
                        key={index}
                        value={option}
                        control={<Radio />}
                        label={option}
                      />
                    ))}
                    </RadioGroup>
                  </FormControl>
                </Box>
                <Button variant="contained" onClick={handleNextQuestion}>Next</Button>
              </Container>
            }
          </div>
        </div>
      </div>
      <Footer/>
    </main>
  );
};

export default QuizApp;