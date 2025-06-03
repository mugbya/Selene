import { Card, CardContent } from "@/components/ui/card"
import { ScrollArea } from "@/components/ui/scroll-area"


export default function LeftPanel() {
    return (
        <aside className="w-60 bg-muted border-r overflow-auto">
            <ScrollArea className="h-full p-4">
                <Card>
                    <CardContent>Left Panel</CardContent>
                </Card>
            </ScrollArea>
        </aside>
    )
}