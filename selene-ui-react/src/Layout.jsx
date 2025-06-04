import React, { useState } from "react";
import Header from "./modules/Header.js"
import LeftPanel from "./modules/LeftPanel"
import MainContent from "./modules/MainContent"
import RightPanel from "./modules/RightPanel.jsx"
import Footer from "./modules/Footer.jsx"

export default function Layout() {
    const [showLeftPanel, setShowLeftPanel] = useState(true);
    const [showRightPanel, setShowRightPanel] = useState(true);

  return (
    <div className="flex flex-col h-screen">
      {/* 顶部 Header */}
      <Header toggleLeft={() => setShowLeftPanel((prev) => !prev)}
              toggleRight={() => setShowRightPanel((prev) => !prev)}/>

      {/* 内容区，左右中布局 */}
      <div className="flex flex-1 overflow-hidden">
        {/* 左侧 Panel */}
          {showLeftPanel && <LeftPanel />}

        {/* 中间内容区 */}
        <MainContent/>

        {/* 右侧 Panel */}
          {showRightPanel && <RightPanel />}

      </div>


      {/* 底部区域 */}
      <Footer/>

    </div>
  )
}