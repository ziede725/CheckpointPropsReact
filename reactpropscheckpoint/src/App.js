import logo from './logo.svg';
import './App.css';
import myImage from './assets/profile.png'
import Profile from './profile/profile.js'
const handleName = (name)=> {
  alert(`my name is ${name}`)
}
function App() {
  
  return (
    <>
    <Profile fullName='zied ben yahia' bio= 'Age : 27 , hobbies : chess and coding  '
    profession = 'Mechatronics engineer ' handleName={handleName}  >
      <img src ={myImage}></img>
      
    </Profile>
    </>
  );
}

export default App;
