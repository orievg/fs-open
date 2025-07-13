const Hello = (args) => {
    console.log(args);
    return (
        <div>
            <p>Hello {args.name}, age is {args.age}</p>
        </div>
    )
}


const App = () => {
    console.clear()
    const ts = new Date();
    const  a = 10;
    const b = 20;
    console.log({time: ts, result: a + b});
    const name = 'Linda'
    const age = 10;
    return (
        <div>
            <p>Hello World, it is {ts.toString()}</p>
            <p>
                {a} + {b} is {a + b}
            </p>
            <Hello name='John' age={26 + 10}/>
            <Hello name={name} age={10}/>
            <Hello />
        </div>
    )
}

export default App;