import React,{useState,useRef} from 'react'
function Assignment2() {

    const firstRef = useRef(null);
    const[reviews,setReviews] = useState('');
    const[List,setList] = useState([]);
    const addReview = () => {
        console.log("Adding Review...");
        setList([...List,reviews]);
        setReviews('');
        firstRef.current.value = '';
    }
    const inputValueChange = (event) => {
        event.preventDefault();
        console.log(firstRef.current.value);
        setReviews(firstRef.current.value);
    }
    return (
        <div>
            <h1>ProductName</h1>
            <div className="card" style={{width:'1350px'}}>
                <div  style={{ display: 'flex', marginTop: '30px' }}>
                    <div>
                        <img src="dress.png" alt="Product" style={{ width: '400px' }} />
                    </div>
                    <div style={{ marginLeft: '20px' }}>
                        <h2>Product Name</h2>
                        <p>Description: This is a green frock </p>
                        <h3> ₹500.00 </h3>
                        <button type="button" className="btn btn-success">Add To Cart</button>
                    </div>
                </div>
            </div>
            <div className="card" style = {{width : '1350px'}}>
                <h4>Product Specification</h4>
                <p>Description and specification of the product </p>
            </div>
            <div className = "card" style = {{width : '1350px'}}>
                <h4>Reviews</h4>
                <div className = "cardbody">
                <input type = "text" placeholder = "Type to review" ref = {firstRef} onChange = {inputValueChange} style = {{ width : '1200px',marginRight :'15px'}}></input>
                <button className="btn btn-dark" style = {{ height : '30px'}}onClick = {addReview}>Add Review</button>
                
                <ul>
                {   
                    List.map(
                        (review,index) => <li key = {index}>
                        <strong>Reviewer Name</strong>
                        <br/>
                        {review}
                        </li>
                        )
                }
                </ul>
                </div>
            </div>
        </div>
    )
}
export default Assignment2