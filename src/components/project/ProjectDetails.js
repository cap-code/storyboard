import React,{Component,Fragment} from 'react';
import Arrow , {DIRECTION,HEAD} from 'react-arrows';
import test from '../assets/moun.jpg';

class ProjectDetails extends Component{
    render(){
        return(
                <div className="row">
                    <div className="col s2">
                        <div className="card medium" id ="first">
                        <div className="card-image">
                           <img src={test} alt="palceholder"/>
                           <span className="card-title">Card Title</span>
                               </div>
                             <div className="card-content grey-text text-darken-3">
                            <span className="card-title ">Project title-{this.props.match.params.id}</span>
                       <p>Posted by The Net Ninja</p>
                  <p className="grey-text">3rd September, 2am</p>
               </div>
                        </div>
                    </div>
                    <div className="col offset-s1"></div>
                    <div className="col s2">
                        <div className="card medium" id ="second">
                        <div className="card-image">
                           <img src={test} alt="palceholder"/>
                           <span className="card-title">Card Title</span>
                               </div>
                             <div className="card-content grey-text text-darken-3">
                            <span className="card-title ">Project title</span>
                       <p>Posted by The Net Ninja</p>
                  <p className="grey-text">3rd September, 2am</p>
               </div>
                        </div>     
                    </div>
                    <div className="col offset-s1"></div>
                    <div className="col s2">
                        <div className="row">
                            <div className="row"></div>
                            <div className="row"></div>
                            <div className="row"></div>
                            <div className="row"></div>
                            <div className="row"></div>
                            <div className="row"></div>
                            <div className="row"></div>
                        <a href="/" data-target="modal1" class="btn-floating btn-large">
                             <i class="material-icons">add</i>
                             </a>
                        </div>      
                    </div>
                    <div id="modal1" class="modal">
                       <div class="modal-content">
                         <h4>Modal Header</h4>
                             <p>A bunch of text</p>
                             </div>
                            <div class="modal-footer">
                        <a href="#!" class="modal-close waves-effect waves-green btn-flat">Agree</a>
                      </div>
                  </div>
                  <Fragment>
                  <Arrow
      className="arrow"
      from={{
        direction: DIRECTION.RIGHT,
        node: () => document.getElementById("first"),
        translation: [0.5,5]
      }}
      to={{
        direction: DIRECTION.LEFT,
        node: () => document.getElementById("second"),
        translation: [-0.5, -5]
      }}
      head={HEAD.VEE}
    />
                  </Fragment>
                </div>
        )
    }
}

export default ProjectDetails;