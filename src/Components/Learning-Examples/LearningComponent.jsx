import FirstComponent from './FirstComponent'
import SecondComponent from './SecondComponent'
import ThirdComponent from './ThirdComponent'
import FourthComponent from './FourthComponent'
import { FifthComponent } from './FourthComponent';

export default function LearningComponent(){
    return (
        <div className="LearningComponent">
          <FirstComponent></FirstComponent>
          <SecondComponent></SecondComponent>
          <ThirdComponent></ThirdComponent>
          <FourthComponent />
          <FifthComponent/>
        </div>
      );
  }