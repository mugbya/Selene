import Header from "./modules/Header"
import LeftPanel from "./modules/LeftPanel"
import MainContent from "./modules/MainContent"
import RightPanel from "./modules/RightPanel.jsx"
import Footer from "./modules/Footer.jsx"

export default function Layout() {
  return (
    <div className="flex flex-col h-screen">
      {/* 顶部 Header */}
      <Header/>

      {/* 内容区，左右中布局 */}
      <div className="flex flex-1 overflow-hidden">
        {/* 左侧 Panel */}
        <LeftPanel/>

        {/* 中间内容区 */}
        <MainContent/>

        {/* 右侧 Panel */}
        <RightPanel/>

      </div>


      {/* 底部区域 */}
      <Footer/>

    </div>
  )
}