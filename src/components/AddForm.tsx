import React, {ChangeEvent, useState} from 'react';

type PropsType = {
    addMovies: (nameFilm: string) => void
}
const AddForm = (props: PropsType) => {
    const [nameFilm, setNameFilm] = useState<string>("")

    const [isCollapsed, setIsCollapsed] = useState<boolean>(false)

    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setNameFilm(e.currentTarget.value)
    }
    const addFilmHandler = () => {
        props.addMovies(nameFilm)
        setNameFilm(nameFilm)
    }

    const collapsedHandler =()=>{
       setIsCollapsed(!isCollapsed)
    }


    return (
        <div>
            <button onClick={collapsedHandler}>ADD Film</button>
            { isCollapsed &&
                <div>
                <input
                    value={nameFilm}
                    onChange={onChangeHandler}/>
                <input/>
                <button onClick={addFilmHandler}>ADD</button>

            </div>
            }

        </div>
    );
};

export default AddForm;
