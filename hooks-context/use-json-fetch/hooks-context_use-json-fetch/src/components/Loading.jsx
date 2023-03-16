import useJsonFetch from "../hooks/useJsonFetch";

export default function Loading() {
    const [{data, loading, error}] = useJsonFetch(
        import.meta.env.VITE_DATA_URL + "loading",
        []
    );
    
    return( 
        <>
            Data status: {data && data.status}
            {loading && "loading..."}
            {error && "error"}
        </>
    )
};