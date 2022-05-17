import React from "react";



export class ClassComponent extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            count: 0,
            films: ["film1", "film2"],
            obj: { title: 1, name: "John" }
        }
    }

    increment = () =>  {

        const film = "New Film"
        
        this.setState((state) => ({
            count: state.count + 1,
            films: [...this.state.films, film]
        }),
        () => {
            console.log("state", this.state)
        }
        )
    };

    decrement = () =>  {
        this.setState({
            count: this.state.count - 1
        })
    };

    addFilm = () => {
        const film = "New Film"
        this.setState({
            films: [...this.state.films, film]
        })
    }


    render() {
        const {count, films, obj} = this.state

        console.log(this.state.obj)
        return <div>
            <h1>Классовый компонет</h1>
            <h2>Count: {count}</h2>
            <button onClick={this.increment}>Increment</button>
            <button onClick={this.decrement}>Decrement</button>
            <hr></hr>
            <div>FilmsArray: {films.map((film) => (
                <h2>{film}</h2>
            ))}</div>
             <button onClick={this.addFilm}>Add film</button>
            <hr></hr>
            <div><h2>{obj.title}</h2></div>
            <div><h2>{obj.name}</h2></div>
            <hr></hr>
        </div>

    }
}