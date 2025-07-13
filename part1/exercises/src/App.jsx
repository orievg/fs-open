const Header = (args) => {
    console.log(args)
    return (<h1>{args.course}</h1>)
}


const Part = (args) => {
    console.log(args)
    return (
        <p>{args.part.name} {args.part.noOfExercises}</p>
    )
}


const Content = (args) => {
    console.log(args)
    return (
        <div>
            <Part part={args.parts[0]}/>
            <Part part={args.parts[1]}/>
            <Part part={args.parts[2]}/>
        </div>)
}


const Total = (args) => {
    console.log(args)
    return (
        <p>
            Number of exercises {args.parts[0].noOfExercises + args.parts[1].noOfExercises +
            args.parts[2].noOfExercises}
        </p>)
}


const App = () => {
    console.clear()
    const course = {
        name: 'Half Stack application development',
        parts: [
            {
                name: 'Fundamentals of React',
                noOfExercises: 10
            },
            {
                name: 'Using props to pass data',
                noOfExercises: 7
            },
            {
                name: 'State of a component',
                noOfExercises: 14
            }
        ]
    }

    return (
        <div>
            <Header course={course.name}/>
            <Content parts={course.parts}/>
            <Total parts={course.parts}/>
        </div>
    )
}

export default App