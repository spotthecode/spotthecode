import Image from 'next/image';
import Link from 'next/link'

import Happy from '../public/Images/Happy.svg';
import Flower from '../public/Images/flower.svg';
import reading_time from '../public/Images/reading_time.svg';
import Notebook from '../public/Images/Notebook.svg';
import Papers from '../public/Images/Papers.svg';
import Videos from '../public/Images/Videos.svg';

 const HomePage = () => {
  
  // array for strings
        var motivations = [
          "formal education will make you a living; self-education will make you a fortune",
          "The man who does not read books has no advantage over the one who cannot read them.",
          "Teachers can open the door, but you must enter it yourself.",
          "The beautiful thing about learning is that no one can take it away from you.",
          "Education is the most powerful weapon you can use to change the .",
          "The mind is not a vessel to be filled but a fire to be ignited.",
          "Don't let what you cannot do interfere with what you can do.",
          "A person who never made a mistake never tried anything new.",
          "Learning is never done without errors and defeat.",
          "Never let the fear of striking out stop you from playing the game.",
          "Procrastination makes easy things hard and hard things harder.",
          "You don't have to be great to start, but you have to start to be great.",
          "The expert in anything was once a beginner.",
          "The way to get started is to quit talking and begin doing.",
          "There are no shortcuts to any place worth going.",
          "I think it's possible to ordinary people to choose to be extraordinary.",
          "I find that the harder I work, the more luck I seem to have.",
          "Motivation is what gets you started. Habit is what keeps you going.",
          "Success is the sum of small efforts, repeated.",
          "The best way to predict your future is to create it.",
          "The future belongs to those who believe in the beauty of their dreams.",
          "You are braver than you believe, stronger than you seem and smarter than you think.",
          "Learn from yesterday. Live for today. Hope for tomorrow.",
          "The more that you read, the more things you will know, the more that you learn, the more places you'll go.",
        ];   
        var i = Math.floor(Math.random()*10);
         
  return (
    <div className="Landing-Page">
        <div className="home-container">
          <Image className='home-image' src={reading_time} alt="study" />
          <div className='home-content'>
              <p>practice makes you <delete>perfect</delete> improved</p>

            <div className="buttons">
            <Link href='/Practices'><button className='primarybtn'>practices</button></Link>
            <Link href='/Blogs'><button className='secondarybtn'>blogs</button></Link>
            </div>
          </div>          
        </div>



        <div className="quotes-container">
        <Image src={Flower} alt="FlowerImage" width="50px"/>
         
         <p>{motivations[i]}</p>
        </div>

        

        <div className="service-container">
          <h1>WHAT WILL I GET?</h1>
          <p style={{textAlign:'center'}}>all semester notes, previous year questions, PDF books and many more for free.</p>
          <div className="container">
            <div className="card1"><Image className="item1" src={Notebook}  alt='_'/><br/>Notes & PDF </div>
            <div className="card2"><Image className="item2" src={Videos}  alt='_'/><br/>Course Videos</div>
            <div className="card3"><Image className="item3" src={Papers}  alt='_'/><br/> Previous Year Papaers</div>
          </div>
        </div>



    {/* <center>
      <div className = "about-container">
        <h1>feedback</h1>
        <input type ="paragraph" placeHolder="something"/> <br/>
        <input type ="text" placeHolder="example@xyz.com" /> <br/>
        <input type ="submit" placeHolder="send"/>
        

      </div>
    </center> */}


    
    </div>
  )
}

export default HomePage;