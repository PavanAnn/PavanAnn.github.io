import React from 'react';
import { View } from '@aws-amplify/ui-react';

interface Props {
    children: React.ReactNode;
}

export default function DefaultLayout({ children }: Props) {
    return (
        <View
            as="div"
            ariaLabel="View example"
            backgroundColor="#ADD8E6"
            style={{
                minHeight: '100vh',
                display: 'flex',
                flexDirection: 'column',
                maxWidth: 1920,
                margin: 'auto',
             }}
        >
            {children}
        </View>
    );
}
