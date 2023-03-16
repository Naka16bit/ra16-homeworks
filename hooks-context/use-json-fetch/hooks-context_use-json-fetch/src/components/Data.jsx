import useJsonFetch from "../hooks/useJsonFetch";

export default function Data() {
    const [{data, loading, error}] = useJsonFetch(
        import.meta.env.VITE_DATA_URL + "data",
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
    
    
   