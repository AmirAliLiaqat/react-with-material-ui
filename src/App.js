import React from 'react';
import { Routes, Route } from "react-router-dom";
import Main from './components/Pages/Main';
import About from './components/Pages/About';
import Services from './components/Pages/Services';
import Blog from './components/Pages/Blog';
import Contact from './components/Pages/Contact';
import Error from './components/Pages/Error';
import TodoList from './components/Projects/TodoList';
import WeatherApp from './components/Projects/WeatherApp';
import Counter from './components/Projects/Counter';
import ChatCounter from './components/Projects/ChatCounter';
import QuizApp from './components/Projects/QuizApp';
import UserManagement from './components/System/UserManagement';
// import MaterialUi from './material-ui/MaterialUi';
// import { Recoil } from './components/Recoil Js/Recoil';
// import ChatBot from './components/ChatGptApp/ChatBot';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

const App = () => {
  return(
    <>
      <Routes>
        <Route path='/' element={<Main/>}>Home</Route>
        <Route path='/about' element={<About/>}>About</Route>
        <Route path='/services' element={<Services/>}>Services</Route>
        <Route path='/blog' element={<Blog/>}>Blog</Route>
        <Route path='/contact' element={<Contact/>}>Contact</Route>
        <Route path='/todoList' element={<TodoList/>}>Todo List</Route>
        <Route path='/weatherApp' element={<WeatherApp/>}>Weather App</Route>
        <Route path='/quizApp' element={<QuizApp/>}>Quiz App</Route>
        <Route path='/counter' element={<Counter/>}>Counter</Route>
        <Route path='/chatCounter' element={<ChatCounter/>}>Chat Counter</Route>
        <Route path='/userManagement' element={<UserManagement/>}>User Management</Route>
        <Route path='*' element={<Error/>}>Error</Route>
      </Routes>
      {/* <MaterialUi/> */}
      {/* <Recoil/> */}
      {/* <ChatBot/> */}
    </>
  )
}

export default App;