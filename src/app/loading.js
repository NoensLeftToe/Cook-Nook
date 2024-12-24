import { Skeleton } from "@/components/ui/skeleton"

export default function loading(){
    return <div className="w-full bg-black min-h-screen">
        <Skeleton/>
    </div>
}