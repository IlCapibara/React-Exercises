import React from "react"
import { Age } from "./Age"
import { HelloWorld } from "./HelloWorld"
import { Welcome } from "./Welcome"

export class App extends React.Component{
    render(){
        return(
            <div>
                <HelloWorld />
                <Welcome name={'Franco' + 30} />
                <Age age = {30}/>
            </div>
        )
    }
} 