import React from "react";
import { BrowserRouter as Router,Link } from "react-router-dom";
import './index';
import Nav from './components/Nav'
import Footer from './components/Footer'; 


const Card = ({ title, description, image, link , link1 }) => {
  return (
    <div className="card">
      <div className="card-image">
        <img src={image} alt={title} />
      </div>
      <div className="card-content">
        <h3 className="card-title">{title}</h3>
        <p className="card-description">{description}</p>
        <Link className="card-link" to={link}>
          Prototype
        </Link>
        <Link className="card-link1" to={link1}>
          Notebook
        </Link>
      </div>
    </div>
  );
};

const App = () => (
  // <BrowserRouter>
  //App
  <Router>
    <Nav/>
  <div className= "App" >
    <div class="overlay">
    {/* <h1>Nanostuffs Ai </h1> */}
  <div className="card-container">
    <Card
      image={'demo1.png'}
      title="Demo 1"
      description="Message Classification using Fine Tuned Trained Data Model"
      link = {'https://drive.google.com/file/d/1p1iNZkceNqaUlKTneg96CLJblUOq9dzr/view?usp=sharing'}
      link1 = {'https://colab.research.google.com/drive/1Zicuc4TQ2EzBtFcI8uU-OLjUixfejytS?authuser=1'}

    />
    
    <Card
      image={'demo2.png'}
      title="Demo 2"
      description="Audio to Speech mapping and automatically playing Videos of the searched dialogue"
      link={'https://drive.google.com/file/d/1arhkpj5ah6zdZvv5Ki21MpfS5_WjHZ7v/view?usp=sharing'}
      link1 = {'https://drive.google.com/file/d/1arhkpj5ah6zdZvv5Ki21MpfS5_WjHZ7v/view?usp=sharing'}

    />
    <Card
      image={'demo3.png'}
      title="Demo 3"
      description="ChatGPT powered Movies Q&A with personalised and fine tuned data"
      link={'https://drive.google.com/file/d/1TxLHhRbi7II1L8UKzFB3yGE5pSp0eTo-/view?usp=sharing'}
      link1 = {'https://colab.research.google.com/drive/1TSMNK2mZprkg1PVNw323dIgW9n-nFqqc?usp=sharing'}

    />
    {/* <div className="card-spacer"></div> */}
    <Card
      image={'demo14.png'}
      title="Demo 4"
      description="Message Classification using Fine Tuned Trained Data Model"
      link = {'https://drive.google.com/file/d/1p1iNZkceNqaUlKTneg96CLJblUOq9dzr/view?usp=sharing'}
      link1 = {'https://colab.research.google.com/drive/1Zicuc4TQ2EzBtFcI8uU-OLjUixfejytS?authuser=1'}


      
    />
    <Card
      image={'demo13.png'}
      title="Demo 5"
      description="Audio to Speech mapping and automatically playing Videos of the searched dialogue"
      link={'https://drive.google.com/file/d/1arhkpj5ah6zdZvv5Ki21MpfS5_WjHZ7v/view?usp=sharing'}
      link1 = {'https://drive.google.com/file/d/1arhkpj5ah6zdZvv5Ki21MpfS5_WjHZ7v/view?usp=sharing'}

    />
    <Card
      image={'demo16.png'}
      title="Demo 6"
      description="ChatGPT powered Movies Q&A with personalised and fine tuned data"
      l  link={'https://drive.google.com/file/d/1TxLHhRbi7II1L8UKzFB3yGE5pSp0eTo-/view?usp=sharing'}
      link1 = {'https://colab.research.google.com/drive/1TSMNK2mZprkg1PVNw323dIgW9n-nFqqc?usp=sharing'}

    />
    {/* <div className="card-spacer"></div> */}
    </div>
    </div>
    <Footer style={{width:'auto'}}/>
  </div>
  </Router>
//  {/* </BrowserRouter> */}
);

export default App;
