'use client';

import Button from '@/app/components/button';
import React from 'react';

export interface ErrorComponentProps {
    error: Error;
    // reset: () => void;
};

export default function ErrorComponent({
    // error, reset
}: ErrorComponentProps) {
    return (
        <div>
            <p>Unexpected error inside slot sales</p>
            {/* <Button onClick={() => reset()}>Try again</Button> */}
        </div>
    );
};