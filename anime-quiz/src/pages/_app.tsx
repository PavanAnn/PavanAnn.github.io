import DefaultLayout from '@/components/Layouts';
import { Text } from '@aws-amplify/ui-react';


export default function App() {
    return(
        <>
        <DefaultLayout >
        <Text
            variation="primary"
            as="p"
            lineHeight="1.5em"
            fontWeight={600}
            fontSize="1em"
            fontStyle="normal"
            textDecoration="Highlight"
            width="30vw"
        >
            Hello World!
        </Text>
        </DefaultLayout>

        </>
    )
}