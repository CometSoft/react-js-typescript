import * as React from "react";
import * as ReactDOM from "react-dom";
import Hello from "./hello/Hello"

class Main extends React.Component<any, any>{
    constructor(props: any) {
        super(props);
    };

    render() {
        return(
            <Hello></Hello>
        );
    };
}

ReactDOM.render(<Main/>, document.getElementById("main"));