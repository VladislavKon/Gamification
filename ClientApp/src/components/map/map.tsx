import React, { Component } from 'react';
import Unity, { UnityContext } from 'react-unity-webgl';


interface GameState{
    progress: number
}

const unityContext = new UnityContext({
    loaderUrl: "webGL/Build/build.loader.js",
    dataUrl: "webGL/Build/build.data",
    frameworkUrl: "webGL/Build/build.framework.js",
    codeUrl: "webGL/Build/build.wasm",

  });

export class Game extends Component<{}, GameState>{
    constructor(){
        super({});
        this.state = {
            progress: 0
        };


    }
    componentDidMount(){
        unityContext.on("progress",  (progression) => {
            this.setState({
                progress: progression
            });
          });
    }

    clickClickFunc(){
        unityContext.send("GameHandler", "TaskOnClick");
    }

    render (){
        return (
            <div >
                <div >
                    { this.state.progress !== 1 &&
                        <p>Loading {this.state.progress * 100} percent...</p>
                    }
                    
                </div>
                <Unity 
                    unityContext={unityContext} 
                    style={{
                        height:"100%",
                        width: 1110
                    }}/>
                <button className="btn btn-primary" onClick={this.clickClickFunc}>ClickClick</button>
            </div>
        )
    }
}