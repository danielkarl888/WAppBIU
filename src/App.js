import './App.css';
import FormStartScreen from './FormStartScreen';
function App() {
      return (
      <>     

      <div className="container-fluid">
      <div className="row">
      
        <div className="col-1">
        </div>
        <FormStartScreen/>
        <div className="col-1">
        <a class="btn btn-success btn-sm m-3 " href="http://localhost:5121/Ranks/index" role="button">Rank Us! <i class="bi bi-heart-fill"></i></a>
        </div>

      </div>

    </div>

    </>
    );
}
export default App;
