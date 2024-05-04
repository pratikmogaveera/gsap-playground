import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";

export default function Home() {
    return (
        <main className="grid place-items-center h-screen p-8 lg:p-24">
            <div className="flex flex-col gap-16 items-center">
                <h1 className="text-6xl md:text-7xl lg:text-8xl font-extrabold">GSAP Playground</h1>
                <div className="flex gap-8">
                    <Link href={"/text-reveal"} className={buttonVariants({ variant: "outline" })}>Text Reveals</Link>
                </div>
            </div>
        </main>
    );
}
