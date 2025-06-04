import { Card, CardContent } from "@/components/ui/card"
import { ScrollArea } from "@/components/ui/scroll-area"
// import {cn} from "@/lib/utils.js";
// import {Button} from "@/components/ui/button.js";
// import React, { useState } from "react";

export default function RightPanel() {
    // const [collapsed, setCollapsed] = useState(false);
    return (
        <aside className="w-60 bg-muted border-l overflow-auto">
            <ScrollArea className="h-full p-4">
                <Card>
                    <CardContent>Right Panel</CardContent>
                </Card>
            </ScrollArea>
        </aside>

        // <div
        //     className={cn(
        //         "w-60 bg-muted border-l overflow-auto",
        //         collapsed ? "w-16" : "w-64"
        //     )}
        // >
        //     <div className="p-4">
        //         <Button variant="ghost" onClick={() => setCollapsed(!collapsed)}>
        //             {collapsed ? "➤" : "⮜ 收起"}
        //         </Button>
        //     </div>
        //     {!collapsed && (
        //         <nav className="p-4 space-y-2">
        //             <div>菜单1</div>
        //             <div>菜单2</div>
        //             <div>菜单3</div>
        //         </nav>
        //     )}
        // </div>
    )
}