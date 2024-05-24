import { BrowserRouter, Route, Routes } from "react-router-dom";
import PostExample from "./components/PostExample";
import Body from "./components/Body"
import GetExample from "./components/GetExample";
import PutExample from "./components/PutExample";
import DeleteExample from "./components/DeleteExample";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Body />} />
        <Route path="/post" element={<PostExample />} />
        <Route path="/get" element={<GetExample />} />
        <Route path="/put" element={<PutExample />} />
        <Route path="/delete" element={<DeleteExample />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
