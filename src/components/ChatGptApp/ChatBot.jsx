import React, { useState, useEffect } from 'react';
import { Container, TextField, Button, Paper, Typography, Grid } from '@mui/material';
import axios from 'axios';

const ChatBot = () => {
  const [messages, setMessages] = useState([]);
  const [inputText, setInputText] = useState('');

  useEffect(() => {
    // This function will be called when the component mounts.
    // You can use this to set up initial messages or greet the user.
    addMessage("ChatBot", "Hello! How can I help you?");
  }, []);

  const addMessage = (sender, text) => {
    setMessages([...messages, { sender, text }]);
  };

  const handleInputChange = (event) => {
    setInputText(event.target.value);
  };

  const handleSendMessage = async () => {
    if (inputText.trim() === '') return;

    // Add the user's message to the chat
    addMessage("You", inputText);

    // Clear the input field
    setInputText('');

    try {
      // Make an API call to a chatbot backend (you need to set up your backend)
      const response = await axios.post('/api/chatbot', { message: inputText });

      // Handle the response from the chatbot backend
      addMessage("ChatBot", response.data.message);
    } catch (error) {
      // Handle any error that occurred during the API call
      addMessage("ChatBot", "Oops, something went wrong. Please try again later.");
    }
  };

  return (
    <Container maxWidth="sm" style={{ marginTop: '2rem' }}>
      <Typography variant="h4" align="center" gutterBottom>
        ChatBot App
      </Typography>
      <Paper elevation={3} style={{ padding: '1rem', height: '60vh', overflowY: 'scroll' }}>
        {messages.map((message, index) => (
          <Grid key={index} container direction={message.sender === "You" ? "row-reverse" : "row"} spacing={2}>
            <Grid item>
              <Paper style={{ padding: '0.5rem', maxWidth: '70%', wordWrap: 'break-word' }}>
                {message.text}
              </Paper>
            </Grid>
          </Grid>
        ))}
      </Paper>
      <Grid container spacing={2} style={{ marginTop: '1rem' }}>
        <Grid item xs={9}>
          <TextField
            fullWidth
            variant="outlined"
            label="Type your message..."
            value={inputText}
            onChange={handleInputChange}
          />
        </Grid>
        <Grid item xs={3}>
          <Button
            fullWidth
            variant="contained"
            color="primary"
            onClick={handleSendMessage}
          >
            Send
          </Button>
        </Grid>
      </Grid>
    </Container>
  );
};

export default ChatBot;
