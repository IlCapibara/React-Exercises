import React from "react";
import { Age } from "./Age";


export class Welcome extends React.Component{
    render() {
        return (
            <>
                <p>Welcome, {this.props.name ?? "Gian"}</p>
                {<Age age = {this.props.age > 18 && 30}/>}
            </>
        )
    }
}