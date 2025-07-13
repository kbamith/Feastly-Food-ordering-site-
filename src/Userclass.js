import React from "react";
class Userclass extends React.Component{
    constructor(props){
        super(props)
        this.state={
            userinfo:{
            login:"Dummy",
            html_url:"Default",
           
            },
        };
    }

async componentDidMount(){
    const data=await fetch("https://api.github.com/users/kbamith");
    const json =await data.json();
    this.setState({
        userinfo:json,
    })
}


    render(){
    debugger;
        let {login,html_url,avatar_url}=this.state.userinfo;
        return(

            <div className="user-card m-2.5">
                <div className="pt-3.5">
                <img src={avatar_url}  width={150}/>
                <h2><b>Name:</b> Amith K B</h2>
                 <h2><b>Email:</b> amithkb816@gmail.com</h2>
                  <h2><b>Git username:</b> {login}</h2>
                <h2><b>Git Url:</b><a className="text-blue-500 underline"  href={html_url}> url</a></h2>
            </div>
            </div>
        )
    }
}
export default Userclass;