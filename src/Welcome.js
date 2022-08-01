import React from "react";
import { Age } from "./Age";


export class Welcome extends React.Component{
    render() {
        return (
            <>
                <p>Welcome, {this.props.name ?? "Gian"}</p>
                {/* {this.props.name === 'John' && <Age age={(18 > this.props.age > 65) && 30}/>} */}
                <Age age ={30}/>
            </>
        )
    }
}