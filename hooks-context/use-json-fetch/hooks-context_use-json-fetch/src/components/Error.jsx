import useJsonFetch from "../hooks/useJsonFetch";

export default function Error() {
    const [{data, loading, error}] = useJsonFetch(
        import.meta.env.VITE_DATA_URL + "error",
        []
    );
    
    return (
        <>
            Data status: {data && data.status}
            {loading && "loading..."}
            {error && "error"}
        </>
    )
};