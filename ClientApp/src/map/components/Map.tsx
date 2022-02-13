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
    unityContext.on("SaveGame", function (map) {      
        console.log(map)
        const data = new FormData()        
        data.append("map", map);
        const xhr = new XMLHttpRequest();
        xhr.open("post", 'https://localhost:44312/api/map/save-map', true)
        xhr.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
        xhr.send(map);
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
