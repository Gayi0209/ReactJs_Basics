// create a component add a button and input feild.Every time you click the button,add the entered each input value to a list on the UI
import React,{useState} from 'react'
function Eleven(){
    const[reviews,setReviews] = useState('');
    const[List,setList] = useState([]);
    const addReview = () => {
        console.log("Adding Review...");
        setList([...List,reviews]);
        setReviews('');
    }
    const inputValueChange = (event) => {
        console.log(event.target.value);
        setReviews(event.target.value);
    }
    return(
        <div style = {{display : "flex", flexDirection: 'column', gap: '10px', width: '300px'}}>
            <input type="text" placeholder="Enter your review" onChange={inputValueChange} />
            <button className="btn btn-dark" onClick = {addReview}>Submit</button>
            <br></br>
            <ul>
                {
                    List.map(
                        (review,index) => <li key = {index}>
                        {review}
                        </li>
                        )
                }
            </ul>
        </div>
    );
}
export default Eleven
