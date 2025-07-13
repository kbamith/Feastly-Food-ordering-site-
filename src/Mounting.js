import React from "react";
class Mounting extends React.Component{
    constructor(props){
        super(props)
        // this.state={
        //     count:0,
      console.log("Mounting constructor");
      
        // };
    }
    componentDidMount(){
        console.log(" Mounting did mount");
        
    }
    render(){
        const {name,Location}=this.props;
        // const {count,count2}=this.state
        console.log("mounting render");
        
        return(

            <div className="user-card">
                <h2>Name:{name}</h2>
                <h2>Location:{Location}</h2>
                {/* <h2>count:{count}</h2>
                <button  onClick={
              ()=>{
                this.setState({
                    count:this.state.count+1,
                });
              }
                }>click</button>
                  
                <h2>LinkedIn url</h2> */}
            </div>
        )
    }
}
export default Mounting;