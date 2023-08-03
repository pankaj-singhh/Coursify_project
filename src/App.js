// import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import Home from './components/home_page/Home';
import Recommend from './components/recommend_job/Recommend';


function App() {
  return (
    <div>
    <div className="App">
    <Navbar/>
    <Sidebar/>
   
    </div>
    <Home/>
    <footer>.</footer>
     <Recommend link="Change job preferences" job="Recommended Jobs" subjob="Jobs where you're a top applicant based on your profile job search" textimg="We have no job recommendations yet." browse="Browse Jobs"
     />
      <footer>.</footer>
     <Recommend job="Recently Applied Jobs" textimg="It appears you haven’t applied to any jobs" browse="Browse Jobs"/>
     <footer>.</footer>
     <Recommend link="Discover Startups" job="Followed Startups" textimg="you have not followed any startups yet!" browse="Discover Startup" subtext="Stay up to date with startups your interested in by following them"/>


     
    </div>
    
  );
}

export default App;
