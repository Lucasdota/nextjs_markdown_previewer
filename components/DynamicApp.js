import dynamic from "next/dynamic";

//using dynamic to load the component and pass in the SSR parameter as false to turn off the server render of the component avoid the hydration error
const NoSsr = dynamic(() =>
    import('./App'), {
        ssr: false,
    }
);

export default function DynamicApp() {
    return (
        <>
            <NoSsr />
        </>
    )
}