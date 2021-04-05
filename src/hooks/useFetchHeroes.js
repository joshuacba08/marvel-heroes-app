import { useEffect, useState } from "react";
import { getHeroes } from "../helpers/getHeroes";

export const useFetchHeroes = (value) => {


    const [state, setState] = useState({
        data: [],
        loading: true,
    });

    useEffect(() => {

        getHeroes(value)
            .then(heroes => {

                setState({
                    data: heroes,
                    loading: false,
                });
            })
    }, [value])

    return state;
}