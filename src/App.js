
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BsFacebook} from 'react-icons/bs';
import {AiFillTwitterCircle,AiFillGooglePlusCircle,AiFillLock} from 'react-icons/ai'
import {FaUserAlt} from 'react-icons/fa'
import {Gi3DGlasses} from 'react-icons/gi'
function App() {
  return (

        <div className="container">
        <div className="form-box">
          <div className="header-form">
            <h4 className="text-primary text-center"><Gi3DGlasses size={68} color='#fff'/></h4>
            <div className="image">
            </div>
          </div>
          <div className="body-form">
           <form>
              <div className="input-group mb-3">
   <div className="input-group-prepend">
    <span className="input-group-text"><FaUserAlt size={24}/></span>
  </div>
  <input type="text" className="form-control" placeholder="Username" />
</div>
 <div className="input-group mb-3">
   <div className="input-group-prepend">
    <span className="input-group-text"><AiFillLock size={24}/></span>
  </div>
  <input type="text" className="form-control" placeholder="Password" />
</div>
 <button type="button" className="btn btn-primary btn-block form-control mb-3 mt-3">LOGIN</button>
 <div className="message">
<div className='d-flex flex-row justify-content-center align-items-center '><p className='text-white text-justify text-center' ><input type="checkbox" className=""/>   Remember ME</p></div>
 <div><a href="#">Forgot your password</a></div>
 </div>
   </form>
            <div className="social">
              <a href="#"><BsFacebook size={42} /></a>
              <a href="#"><AiFillTwitterCircle  size={48}/></a>
              <a href="#"><AiFillGooglePlusCircle size={48}/></a>
            </div>
          </div>
        </div>
       </div>   

  );
}

export default App;
