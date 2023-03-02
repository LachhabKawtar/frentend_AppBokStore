import { Button } from "reactstrap";
import { faAdmini,faPaperPlane } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function Home (){
     return (
          <div>
             <h1 className="title">Espace administrateur</h1>
             <Button  color="warning">
                  <div className="BtnHome">
                       <span>Cliquer ici </span><FontAwesomeIcon  icon={faPaperPlane}/> 
                  </div>
             </Button>
          </div>
     )
          
}export default Home;

