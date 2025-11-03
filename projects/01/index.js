
    const heading = React.createElement("h1" , {
        id: "heading"
    } , "Hello world from React  ")

    const root = ReactDOM.createRoot(document.getElementById("root"));

    root.render(heading);


    //For nested div we can //
    /**
     *   <div id='parent'>
        <div id='child'>
            <h1>I'm h1 child tag</h1>
        </div>
    </div>
     */

    const parent = React.createElement("div" , {id:"parent"},
        Reac.createElement("div", {id: "child"}, 
            React.createElement("h1", {}, "I'm an h1 tag")
        )
    )

//    const root = ReactDOM.createRoot(document.getElementById("root"));
//    root.render(parent)