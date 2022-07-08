import React, { useEffect, useState } from 'react'

const ListContainer = () => {

    const [results, setResults] = useState([]);
    useEffect(() => {
        fetch('https://rickandmortyapi.com/api/character')
            .then((res) => res.json())
            .then((json) => setResults(json.results));
    }, []);



    return (
        <div>
            {results.map((el) => (
                <div>{el.name}</div>
            ))}
        </div>
    );
};

export default ListContainer