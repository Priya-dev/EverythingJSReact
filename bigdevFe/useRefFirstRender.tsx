import React, { useRef } from "react";

export function useIsFirstRender(): boolean {
  // your code here
  let firstRender = useRef(true);

  if (firstRender.current) {
    firstRender.current = false;
    return true;
  }
  return false;
}

// if you want to try your code on the right panel
// remember to export App() component like below

export function App() {
  console.log("here");
  const isFirstRender = useIsFirstRender();

  return isFirstRender ? <div> first render </div> : <div> more render </div>;
}
