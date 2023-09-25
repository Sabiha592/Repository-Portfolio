import React from "react";
import './App.css';
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Contact from "./components/contact";
import WriteRecommendation from "./components/WriteRecommendation";
import {BrowserRouter,Route,Switch} from "react-router-dom";
import ProjectPage from "./components/ProjectPage";
import Title from "./components/Title";
import About_me from "./components/About_me"; 
import ProjectSection from "./components/ProjectSection";
import ProjectCard from "./components/ProjectCard";
import SkillsSection from "./components/SkillsSection";
import RecommendationSection from "./components/RecommendationSection";
import NotFound from "./components/NotFound";






function App() {
  return (
    <BrowserRouter>
  <Navbar />
  <Switch>
    <Route exact path="/">
  <Title 
   name="Sabiha Marur"
   leadText="I'm b.tech student from SVIT college"/>
  <RecommendationSection />
  <ProjectSection />
  <About_me />
  <SkillsSection />
  </Route>
  <Route exact path="/Contact">
  <Contact />
  </Route>
  <Route 
  exact 
  path="/write-a-recommendation"
  component={WriteRecommendation}
  />
 

  <Route exact path="/project/:id" component={ProjectPage} />
  <Route component={NotFound}/>

  </Switch>
  <Footer />
</BrowserRouter>
  
  );
}

export default App;
