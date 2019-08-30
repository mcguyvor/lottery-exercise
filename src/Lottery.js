import React, { Component } from 'react';
import './LotteryBox.css'
import Ball from'./Ball'
import './Ballbox.css'
import './Button.css'

class Lottery extends Component{
    static defaultProps={
        title:'Lotto',
        maxBall:6,
        maxNum:40

    } 
    constructor(props){
        super(props);
        this.state = {num:Array.from({length:this.props.maxBall})};// create  empty array of 6
        this.handleClick=this.handleClick.bind(this);
        this.generate=this.generate.bind(this);
    }
    generate()
    {
        // generate num and max num
        this.setState(curState=>(
            {num: curState.num.map(n=>Math.floor(Math.random()*this.props.maxNum)+1)}
        )); 
    }
    handleClick(){
        this.generate();
    }
    render(){
        return(
            <div>
                <div className ='LotteryBox'> {/*column flex */}
                    <h2>{this.props.title}</h2>
                        <div className='Ballbox'>{/*row flex */}
                        {this.state.num.map(n=>
                        (<Ball num={n}/>))}
                        </div>
                    <button onClick={this.handleClick}  className='Button'>Generate</button>
                    </div>
                     
                
                
            </div>
        );
    }
}
export default Lottery;