import MagicButton from "@/app/components/magic-button";
import React from "react";


export interface PageProps {

};

export default function Page({ }: PageProps) {
    // console.log('Client Component');

    return (
        <main>
            <h1 className="text-xl">Dashboard Page</h1>
            <MagicButton/>
        </main>
    );
};