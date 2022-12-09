import React  from "react";
import ReactDOM from 'react-dom/client'
import './index.css';

const myList=(
    <ol>
  <li>keshav</li>
  <li>Venu</li>
  </ol>
  );
//   ReactDOM.render(myList,document.getElementById('root'));


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(myList);

function Sample(props){
    if (props.name){
    return  <div> <h1>{'Mr .'+ props.name.firstname + '  ' +props.name.lastname }</h1> 
    {/* <img src={props.name.url}/> */}
    </div>}
    else{
        return <h1>hi stranger</h1>
    }
}
const data={
    firstname:'keshava',
    lastname :'reddy',
    url:'https://th.bing.com/th/id/R.7f34a70a5bee79488309934920d316cb?rik=IRJI6pSFo6OI%2fQ&riu=http%3a%2f%2fallpicts.in%2fwp-content%2fuploads%2f2018%2f03%2fNatural-Images-HD-1080p-Download-with-Keyhole-Arch-at-Pfeiffer-Beach.jpg&ehk=JPI0MFI04N62Xtd7MT1P2sw4vJgwODLsp1EcpgvuGFo%3d&risl=&pid=ImgRaw&r=0'
}
const subroot=ReactDOM.createRoot(document.getElementById('subroot'))
subroot.render(<Sample name={data} />)
// ---------------tic ticking clock-------------------
const tictic=ReactDOM.createRoot(document.getElementById('tictic'))
function Tick(){
    
    tictic.render((<h1>hai  {new Date().toLocaleTimeString()}</h1>))
}
setInterval(Tick,1000);

// -----------------components(function) and props----------------------

let details={name1:data,name2:{firstname:'chandan',
lastname :'kumar',
url:'https://th.bing.com/th/id/R.7f34a70a5bee79488309934920d316cb?rik=IRJI6pSFo6OI%2fQ&riu=http%3a%2f%2fallpicts.in%2fwp-content%2fuploads%2f2018%2f03%2fNatural-Images-HD-1080p-Download-with-Keyhole-Arch-at-Pfeiffer-Beach.jpg&ehk=JPI0MFI04N62Xtd7MT1P2sw4vJgwODLsp1EcpgvuGFo%3d&risl=&pid=ImgRaw&r=0'

}}

let component=ReactDOM.createRoot(document.getElementById('comp'))
function App(){
    return <h1> this is a app</h1>
}

function Comp(props){
    return  <div> 
        <h1> {props.details.name1.firstname}</h1>
        <h1>{props.details.name2.firstname}</h1>
          <App />
          <Sample name={props.details.name2}  />
          <Clock />
        </div>
}

component.render(<Comp  details = {details} />)

// ---------------------states and life cycles---------------

class App1 extends React.Component {
    // constructor method begins here:
    constructor(props){
      super(props);
      this.state={ title :'Best App'}
    }
   
  render() {
    return (
      <h1>
       {this.state.title}
      </h1>
    );
  }
}
 
let abc=ReactDOM.createRoot(document.getElementById('app'))
abc.render(< App1 />)
// ReactDOM.render(<App1 />,document.getElementById('app'))
// ---------timer2  with  states and class component---------------
class Clock extends React.Component{
    constructor(props){
        super(props)
        this.state={date: new Date(),a:'keshav'}
    }
 
    componentDidMount(){
        this.timerId=setInterval(()=>this.tick(),1000);
    }
    // componentWillUnmount(){
    //     clearInterval(this.timerId);
    // }

    tick(){
        this.setState({date:new Date()})
    }
    render(){
        return (
            <div>
                <h2>{this.state.a}</h2>
                <h1>{this.state.date.toLocaleTimeString()}</h1>
                <Temp date={this.state.date.toLocaleTimeString()} />
            </div>
        )
    }
}


function Temp(props){
    return <h1>this is temp {props.date}</h1>
}
// let clock=ReactDOM.createRoot(document.getElementById('clock'))
// clock.render(<Clock />)