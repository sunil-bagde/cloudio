import React from "react";
import HatSVG from "./components/HatSVG";
import SideNav from "./components/SideNav";
function App() {
  return (
    <div>
      <div class="container">
        <aside className="sidebar">
          <p className="logo">
            Cl
            <span className="o-hat">
              <HatSVG />o
            </span>
            uld <span className="io">io</span>
          </p>

          <div>
            <SideNav />
          </div>

          <div>Upload</div>
        </aside>
        <main className="main">Main </main>
        <aside className="right"> right</aside>
      </div>
    </div>
  );
}

export default App;
