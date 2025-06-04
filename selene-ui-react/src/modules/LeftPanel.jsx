import { Card, CardContent } from "@/components/ui/card"
import { ScrollArea } from "@/components/ui/scroll-area"
// import React, { useState } from "react";
import { Button } from "../components/ui/button";
// import { cn } from "@/lib/utils"; // 如果你有工具函数处理 className 合并

export default function LeftPanel() {
    // const [collapsed, setCollapsed] = useState(false);

    return (

        <div className="w-60 bg-muted border-r overflow-auto">
            <nav className="p-4 space-y-2">
                <div>菜单1</div>
                <div>菜单2</div>
                <div>菜单3</div>
            </nav>
        </div>
    )
}