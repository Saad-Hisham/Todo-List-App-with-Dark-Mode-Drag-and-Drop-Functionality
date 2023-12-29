import { Provider } from "react-redux";
import store from "./Store"
import Input from "./components/Input";
function App() {
 return(
  <Provider store={store}>
    
  <main>
<Input/>
<footer> Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">Frontend Mentor</a>. 
    Coded by <a href="https://3d-portofolio-seven.vercel.app/">Saad Hisham</a>.</footer>
  </main>
  </Provider>

  );

}

export default App;








