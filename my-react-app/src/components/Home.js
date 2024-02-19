import React from "react";
// import PolicyHolderForm from './PolicyHolderForm'; // Import the PolicyHolderForm component
import { useStore } from "../store";
import { shallow } from "zustand/shallow";
import { useSearchParams } from "react-router-dom";

function Home() {
  const user = useStore((store) => store.user);
  return <div className="Home">{JSON.stringify(user)}</div>;
}
export default Home;
