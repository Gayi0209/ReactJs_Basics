function Ten(){

    const addReview = () => {
        console.log("Adding Review...");
    }
    const inputValueChange = (event) => {
        console.log("Input Value Changed");
        console.log(event.target.value);
    }
    return(
        <div style = {{display : "flex",flexWrap : "wrap"}}>
            <input type="text" placeholder="Enter your review"  onChange={inputValueChange} />
            <button className="btn btn-dark" onClick = {addReview}>Submit</button>
        </div>
    )
}
export default Ten