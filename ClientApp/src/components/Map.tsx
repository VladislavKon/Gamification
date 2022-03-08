import React, { useState, useEffect } from "react";
import Unity, { UnityContext } from "react-unity-webgl";

const unityContext = new UnityContext({
  loaderUrl: "Build/public.loader.js",
  dataUrl: "Build/public.data.unityweb",
  frameworkUrl: "Build/public.framework.js.unityweb",
  codeUrl: "Build/public.wasm.unityweb",
});



function Map() {
  function spawnEnemies() {
    unityContext.send("GameController", "SpawnEnemies", 100);
  }  

  useEffect(function () {
      unityContext.on("SaveMap", function (map) {   
        const requestOptions = {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: map
      };
      fetch('https://localhost:44312/api/map/save-map', requestOptions)
      }
    );
  }, []);

  useEffect(function () {
    unityContext.on("LoadMap", function () {   
      const requestOptions = {
        method: 'GET',
        headers: { 'Content-Type': 'application/json' }        
    };
    fetch('https://localhost:44312/api/map/load-map', requestOptions)
    .then(data => unityContext.send("Hex Map Editor", "SetMapData", JSON.stringify(data)))
    }
  );
}, []);

  return (
    <div>
      <button onClick={spawnEnemies}>Spawn a bunch!</button>      
      <Unity style={{ width: '1280px', height: '720px'}} unityContext={unityContext} />
    </div>
  );
}

export default Map;
