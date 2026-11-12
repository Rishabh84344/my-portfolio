import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import { About, Experience, Education, Projects, ProjectDetail, Journal, Article, Contact, NotFound } from './pages/Pages';
import { Header, Footer, ScrollToTop } from './components/UI';
import './styles/main.css';
function App(){return <BrowserRouter><ScrollToTop/><Header/><main><Routes><Route path="/" element={<Home/>}/><Route path="/about" element={<About/>}/><Route path="/experience" element={<Experience/>}/><Route path="/education" element={<Education/>}/><Route path="/projects" element={<Projects/>}/><Route path="/projects/:slug" element={<ProjectDetail/>}/><Route path="/journal" element={<Journal/>}/><Route path="/journal/:slug" element={<Article/>}/><Route path="/contact" element={<Contact/>}/><Route path="*" element={<NotFound/>}/></Routes></main><Footer/></BrowserRouter>}
createRoot(document.getElementById('root')).render(<React.StrictMode><App/></React.StrictMode>);
