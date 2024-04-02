import DefaultLayout from '@/components/Layouts';
import { Text } from '@aws-amplify/ui-react';


export default function App({ Component, pageProps }: any) {
    return(
        <>
        <DefaultLayout >
            <Component {...pageProps} />
        </DefaultLayout>

        </>
    )
}