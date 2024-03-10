import logo from './logo.svg';
import './App.css';
import  LearningComponent  from './Components/Learning-Examples/LearningComponent';
import LearningJavascript from './Components/Learning-Examples/LearningJavascript';
import Counter from './Components/counter/Counter';
import TodoApp from './Components/Todo/TodoApp'



function App() {
  return (
    <div className="App">
      {/* <Counter/> */}
      <TodoApp />
    </div>
  );
}

export default App;
